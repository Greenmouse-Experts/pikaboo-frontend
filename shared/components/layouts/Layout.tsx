"use client";

import DashboardLayout from "./DashboardLayout";
import MainLayout from "./MainLayout";
import NoLayout from "./NoLayout";


export const Layouts = {
  Login: NoLayout,
  Main: MainLayout,
  Dashboard: DashboardLayout,
};

export type LayoutKeys = keyof typeof Layouts;