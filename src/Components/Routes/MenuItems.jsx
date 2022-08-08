import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";

const MenuItems = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "About us ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "Director's Message",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Chairman's Message",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/users",
    name: "Academics",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Programmes ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "Course Highlights",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Grade System",
        icon: <FaMoneyBill />,
      },
      {
        path: "/settings/billing",
        name: "Admission Procedure",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/messages",
    name: "Students",
    icon: <MdMessage />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Student Corner",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "Achievements",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Registeration Procedure",
        icon: <FaMoneyBill />,
      },
      {
        path: "/settings/billing",
        name: "Career Development Activity",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/analytics",
    name: "Recruiter",
    icon: <BiAnalyse />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Why Recruit?",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "Brochure",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Placement Statistics",
        icon: <FaMoneyBill />,
      },
      {
        path: "/settings/billing",
        name: "Placement Procedure",
        icon: <FaMoneyBill />,
      },
      {
        path: "/settings/billing",
        name: "Past Recruiters",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/Forms",
    name: "Forms",
    icon: <AiTwotoneFileExclamation />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "JAF",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "IAF",
        icon: <FaLock />,
      },
    ],
  },
  {
    path: "/order",
    name: "CDC Team",
    icon: <BsCartCheck />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Contact Us ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "Placement Team",
        icon: <FaLock />,
      },
    ],
  },
  {
    path: "/settings",
    name: "Login",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
      {
        path: "/settings/2fa",
        name: "2FA",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "Billing",
        icon: <FaMoneyBill />,
      },
    ],
  },
];

export default MenuItems