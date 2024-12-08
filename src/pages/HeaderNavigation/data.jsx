import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "/", text: "about" },
  { id: 3, url: "/", text: "projects" },
  { id: 4, url: "/", text: "contact" },
  { id: 5, url: "/", text: "profile" },
];

export const social = [
  { id: 1, url: "https://www.facebook.com/ahad.x.ali", icon: <FaFacebook /> },
  { id: 2, url: "https://www.twitter.com/ahadalireach", icon: <FaTwitter /> },
  {
    id: 3,
    url: "https://www.linkedin.com/in/ahadalireach",
    icon: <FaLinkedin />,
  },
  { id: 4, url: "https://www.instagram.com/ahad.x.ali", icon: <FaInstagram /> },
];
