import { Dashboard } from "./Dashboard";
import { DashboardOutlined } from "@ant-design/icons";

export const DASHBOARD = {
  path: "/dashboard",
  component: Dashboard,
  // roles:["ADMIN"],
  menu: {
    key: "DashboardX",
    label: "DashboardX",
    order: 0,
    icon: DashboardOutlined,
  },
};
