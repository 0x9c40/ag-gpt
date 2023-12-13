import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LayoutState {
  isSidebarOpened: boolean;
  isDashboardOpened: boolean;
}

const initialState: LayoutState = {
  isSidebarOpened: true,
  isDashboardOpened: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpened = true;
    },
    hideSidebar: (state) => {
      state.isSidebarOpened = false;
    },
    toggleSidebar: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpened = action.payload;
    },

    openDashboard: (state) => {
      state.isDashboardOpened = true;
    },
    hideDashboard: (state) => {
      state.isDashboardOpened = false;
    },
    toggleDashboard: (state, action: PayloadAction<boolean>) => {
      state.isDashboardOpened = action.payload;
    },
  },
});

export const {
  openDashboard,
  hideDashboard,
  toggleDashboard,
  openSidebar,
  hideSidebar,
  toggleSidebar,
} = layoutSlice.actions;

export default layoutSlice.reducer;
