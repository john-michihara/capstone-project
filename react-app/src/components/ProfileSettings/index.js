import React, { useState } from "react";
import { useSelector } from "react-redux";

import styles from "./ProfileSettings.module.css";

const profilePictureURLs = [
  "https://4.bp.blogspot.com/-gKPdnJWscyI/VCIkF3Po4DI/AAAAAAAAmjo/fAKkTMyf8hM/s100/monster01.png",
  "https://1.bp.blogspot.com/-3GUksHO3Sgc/VCIkF-PenoI/AAAAAAAAmjk/by_uxGIO7hU/s100/monster02.png",
  "https://4.bp.blogspot.com/-zyd_W4E6BjM/VCIkF1J8sII/AAAAAAAAmjg/X7j73gG6UFs/s100/monster03.png",
];

const ProfileSettings = () => {
  const user = useSelector((state) => state.session.user);
  const [selectedPicture, setSelectedPicture] = useState("");

  const pictureSelectionHandler = (url) => {
    setSelectedPicture(url);
    console.log(url);
  };

  return (
    <div>
      <h1>Choose your profile picture</h1>
      {profilePictureURLs.map((url, idx) => (
        <img src={url} key={idx} onClick={() => pictureSelectionHandler(url)} />
      ))}
    </div>
  );
};

export default ProfileSettings;
