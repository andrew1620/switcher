import io from "socket.io-client";

const SET_IS_CONNECTED = "switcher/SET_IS_CONNECTED";
const SET_BTN_STATUS = "switcher/SET_BTN_STATUS";

const initialState = {
  isConnected: null,
  btnStatus: null
};

const switcherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_CONNECTED:
      return { ...state, isConnected: action.payload };
    case SET_BTN_STATUS:
      return { ...state, btnStatus: action.payload };
    default:
      return state;
  }
};

export default switcherReducer;

export const setBtnStatus = btnStatus => {
  return { type: SET_BTN_STATUS, payload: btnStatus };
};
export const setIsConnected = isConnected => {
  return { type: SET_IS_CONNECTED, payload: isConnected };
};

let socket;

export const connectServer = () => dispatch => {
  socket = io("http://localhost:3002");
  socket.on("connect", () => {
    dispatch(setIsConnected(socket.connected));
  });
};
export const requireBtnStatus = () => dispatch => {
  socket.on("added btnStatus", function(data) {
    dispatch(setBtnStatus(data.btnStatus));
  });
};
export const changeBtnStatus = status => dispatch => {
  socket.emit("send btnStatus", {
    btnStatus: status
  });
};
