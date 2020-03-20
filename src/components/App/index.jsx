import React, { useEffect } from "react";
import css from "./style.module.css";
import { connect } from "react-redux";

import {
  connectServer,
  requireBtnStatus,
  changeBtnStatus
} from "../../redux/switcherReducer";
import Switcher from "../Switcher";
import Preloader from "../Preloader";

const App = ({
  btnStatus,
  connectServer,
  requireBtnStatus,
  changeBtnStatus,
  isConnected
}) => {
  useEffect(() => {
    connectServer();
  }, [connectServer]);

  if (!isConnected) return <Preloader />;

  return (
    <div className={css.appContainer}>
      <div className={css.btnContainer}>
        <Switcher
          btnStatus={btnStatus}
          requireBtnStatus={requireBtnStatus}
          changeBtnStatus={changeBtnStatus}
        />
      </div>
    </div>
  );
};

const mstp = state => ({
  isConnected: state.switcher.isConnected,
  btnStatus: state.switcher.btnStatus
});

const mdtp = {
  connectServer,
  requireBtnStatus,
  changeBtnStatus
};

export default connect(mstp, mdtp)(App);
