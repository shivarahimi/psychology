import { NavigationItem } from "@/core/models/navigation-item.model";
import { BiBookOpen, BiHome } from "react-icons/bi";
import { CiShoppingCart } from "react-icons/ci";

export const UserPanelNav = (): NavigationItem[] => [
  {
    key: "/user-panel",
    label: "داشبورد",
    icon: <BiHome size={20} />,
  },
  {
    key: "/user-panel/my-courses",
    label: "دوره های من",
    icon: <BiBookOpen size={20} />,
  },
  {
    key: "/user-panel/my-transactions",
    label: "تراکنش های من",
    icon: <CiShoppingCart size={20} />,
  },
];
