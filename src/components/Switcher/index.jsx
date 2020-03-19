import React, { useEffect } from "react";
import css from "./style.module.css";

const Switcher = ({ btnStatus, requireBtnStatus, changeBtnStatus }) => {
  useEffect(() => {
    requireBtnStatus();
  }, []);

  const handleBtnClick = () => {
    changeBtnStatus(!btnStatus);
  };

  return (
    <div
      className={`${css.btn} ${btnStatus ? css.on : css.off}`}
      onClick={handleBtnClick}
    >
      <span className={css.btnCaption}>{btnStatus ? "On" : "Off"}</span>
    </div>
  );
};

export default Switcher;
