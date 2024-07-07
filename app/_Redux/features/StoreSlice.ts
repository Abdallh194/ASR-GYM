import { createSlice } from "@reduxjs/toolkit";

const currentUser = createSlice({
  name: "currentUser",
  initialState: {
    isLoggin: false,
    newuser: {
      NewFirstName: "Abdallh",
      NewLastName: "Rakha",
      NewPhone: "01091415560",
      NewEmail: "Abdallhsabry194@gmail.com",
      NewWeight: "70",
      NewHight: "180",
      NewAge: "24",
      NewPassword: "0",
      NewSubscribtion_Type: "Gold",
      is_Subscribtion_Active: false,
    },
    userNameFromStore: "Abdallh",
    PassWordFromStore: "1234",
  },
  reducers: {
    ActiveLoggin: (state) => {
      state.isLoggin = true;
    },
    AddnewUser: (state, action) => {
      state.newuser = action.payload;
    },
    ActiveSubscribtion: (state) => {
      state.newuser.is_Subscribtion_Active = true;
    },
    ActiveLogout: (state) => {
      state.isLoggin = false;
    },
  },
});

export const { ActiveLoggin, AddnewUser, ActiveSubscribtion, ActiveLogout } =
  currentUser.actions;
export default currentUser.reducer;
