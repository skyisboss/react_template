import {
  createSlice,
  createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { getStatus } from "../api/auth";

export interface AuthType {
  isLogin: boolean;
  logining: boolean;
  version: string;
}
const initialState: AuthType = {
  isLogin: false,
  logining: false,
  version: "1.0.0",
};

export const storeStatus = createAsyncThunk(
  "auth/status",
  async () => {
    const res = await getStatus();
    return res
  }
);
export const storeLogin = createAsyncThunk(
  "auth/login",
  async (params: any) => {
    // const response = await login(params);
    // return response.data;
		return {}
  }
);

const { actions, reducer: authReducer } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // 退出登陆
    loginOut: (state) => {
      state.isLogin = false;
      // 设置token
      localStorage.removeItem("pass");
    },
  },
  extraReducers: (builder) => {
    // fetchCourse
    builder
      .addCase(storeLogin.pending, (state) => {
        state.logining = true;
        state.isLogin = false;
      })
      .addCase(storeLogin.fulfilled, (state, action) => {
        state.logining = false;
        state.isLogin = true;
      })
      .addCase(storeLogin.rejected, (state, action) => {
        state.logining = false;
      });
  },
});

export const loginSlice = createSelector(
  (state: { [x: string]: any }) => state.auth,
  (value) => value.isLogin
);
export const authSlice = createSelector(
  (state: { [x: string]: any }) => state.auth,
  (value: AuthType) => value
);

export const { loginOut } = actions;
export default authReducer;