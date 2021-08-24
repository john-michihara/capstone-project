import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateProfilePicture } from "../../store/session";
import { uploadProfilePicture } from "../../store/session";
import styles from "./ProfileSettings.module.css";

const profilePictureURLs = [
  "https://4.bp.blogspot.com/-gKPdnJWscyI/VCIkF3Po4DI/AAAAAAAAmjo/fAKkTMyf8hM/s100/monster01.png",
  "https://1.bp.blogspot.com/-3GUksHO3Sgc/VCIkF-PenoI/AAAAAAAAmjk/by_uxGIO7hU/s100/monster02.png",
  "https://4.bp.blogspot.com/-zyd_W4E6BjM/VCIkF1J8sII/AAAAAAAAmjg/X7j73gG6UFs/s100/monster03.png",
];

const ProfileSettings = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [selectedPicture, setSelectedPicture] = useState("");
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const pictureSelectionHandler = async (url) => {
    setSelectedPicture(url);
    await dispatch(updateProfilePicture(url, user.id));
  };

  useEffect(() => {
    handleSubmit();
  }, [image]);

  const handleSubmit = async (event) => {
    if (!image) return;
    let formData = new FormData();
    formData.append("image", image);
    setImageLoading(true);

    const data = await dispatch(uploadProfilePicture(formData));
    setImageLoading(false);
    if (data) {
      const errorsObj = {};
      data.forEach((error) => {
        const [field, message] = error.split(" : ");
        errorsObj[field] = message;
      });

      setErrors(errorsObj);
    } else {
      const errorsObj = { server: "An error occurred. Please try again." };
      setErrors(errorsObj);
    }
  };

  const updateImage = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  return (
    <div>
      <div>
        <h1>Choose your profile picture</h1>
        <h2>Profile Picture</h2>
        <img
          src={user.profile_url}
          height="100px"
          style={{ display: "block" }}
        />
        {profilePictureURLs.map((url, idx) => (
          <img
            src={url}
            key={idx}
            onClick={() => pictureSelectionHandler(url)}
          />
        ))}
      </div>
      <div>
        <input type="file" accept="image/*" onChange={updateImage} />
        {imageLoading && <p>Loading...</p>}
      </div>
    </div>
  );
};

export default ProfileSettings;
