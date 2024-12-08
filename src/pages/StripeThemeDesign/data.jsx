import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";
export const sublinks = [
  {
    page: "Products",
    links: [
      { label: "Payment", icon: <FaCreditCard />, url: "/" },
      { label: "Terminal", icon: <FaCreditCard />, url: "/" },
      { label: "Connect", icon: <FaCreditCard />, url: "/" },
    ],
  },
  {
    page: "Developers",
    links: [
      { label: "Plugins", icon: <FaBook />, url: "/" },
      { label: "Libraries", icon: <FaBook />, url: "/" },
      { label: "Help", icon: <FaBook />, url: "/" },
      { label: "Billing", icon: <FaBook />, url: "/" },
    ],
  },
  {
    page: "Company",
    links: [
      { label: "About", icon: <FaBriefcase />, url: "/" },
      { label: "Customers", icon: <FaBriefcase />, url: "/" },
    ],
  },
];
