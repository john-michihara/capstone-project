import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateProfilePicture } from "../../store/session";
import { uploadProfilePicture } from "../../store/session";
import styles from "./ProfileSettings.module.css";

const profilePictureURLs = [
  "https://4.bp.blogspot.com/-gKPdnJWscyI/VCIkF3Po4DI/AAAAAAAAmjo/fAKkTMyf8hM/s100/monster01.png",
  "https://1.bp.blogspot.com/-3GUksHO3Sgc/VCIkF-PenoI/AAAAAAAAmjk/by_uxGIO7hU/s100/monster02.png",
  "https://4.bp.blogspot.com/-zyd_W4E6BjM/VCIkF1J8sII/AAAAAAAAmjg/X7j73gG6UFs/s100/monster03.png",
  "https://4.bp.blogspot.com/-CfSVFwYqpkQ/VCIkGwECcHI/AAAAAAAAmjs/Iksw2cv-43s/s100/monster04.png",
  "https://3.bp.blogspot.com/-uF9VsXtCfz0/VCIkHKJUTSI/AAAAAAAAmjw/Zmw2VGrZyyY/s100/monster05.png",
  "https://4.bp.blogspot.com/-e-2KBynpWWM/VCIkIH5TMaI/AAAAAAAAmkM/P-wz_w_BaKI/s100/monster06.png",
  "https://1.bp.blogspot.com/-Q6gxY-WglOo/VCIkIUdDUkI/AAAAAAAAmkI/jk6SAjSdezo/s100/monster07.png",
  "https://4.bp.blogspot.com/-R7qkuOoCs1k/VCIkIbJW75I/AAAAAAAAmkE/pvE5zePq6Tk/s100/monster08.png",
  "https://4.bp.blogspot.com/-8DEnZirlVa0/VCIkJQVrQaI/AAAAAAAAmkQ/sYReYG-5cho/s100/monster09.png",
  "https://3.bp.blogspot.com/-66UXoSvwaOc/VCIkJiqQVMI/AAAAAAAAmkU/8lvbCe4sz9s/s100/monster10.png",
  "https://4.bp.blogspot.com/-HRxya4zR5dU/VCIkKKcirWI/AAAAAAAAmkY/ksdUUIJJdcA/s100/monster11.png",
  "https://3.bp.blogspot.com/---bC5f3l67Y/VCIkKXEkX8I/AAAAAAAAmkc/xOSiXCTwebk/s100/monster12.png",
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
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <img src={user.profile_url} className={styles.avatarImage} />
          <h2 className={styles.avatarTitle}>Profile Picture</h2>
        </div>
        <div className={styles.rightContainer}>
          <h3 className={styles.subTitle}>Choose your profile picture</h3>
          <div className={styles.imagesContainer}>
            {profilePictureURLs.map((url, idx) => (
              <img
                src={url}
                key={idx}
                alt="selectable avatar"
                className={styles.image}
                onClick={() => pictureSelectionHandler(url)}
              />
            ))}
          </div>
          <div>
            <input type="file" accept="image/*" onChange={updateImage} />
            {imageLoading && <p>Loading...</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
