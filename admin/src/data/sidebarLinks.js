import { BsShop, BsGrid, BsFileRichtext } from "react-icons/bs";
import { GiIsland } from "react-icons/gi";
import { MdPayment } from "react-icons/md";

const sidebarLinks = [
  {
    name: "Dashboard",
    to: "/",
    icon: <BsGrid />,
  },
  {
    name: "Homepage",
    to: "/homepages",
    icon: <BsShop />,
    state: "homepages",
    list: [
      {
        list_name: "logos",
        list_to: "/homepages/logo",
      },
      {
        list_name: "footer",
        list_to: "/homepages/footer",
      },

    ],
  },
  {
    name: "Tours",
    to: "/tours",
    icon: <GiIsland />,
    state: "tours",
    list: [
      {
        list1: "All tours",
        list1_to: "/tours/all",
      },
      {
        list1: "Add tours",
        list1_to: "/tours/add",
      },
      {
        list1: "Categories",
        list1_to: "/tours/category",
      },
      {
        list1: "Countries",
        list1_to: "/tours/country",
      },
    ],
  },
  {
    name: "Visa",
    to: "/visas",
    icon: <BsFileRichtext />,
    list: [
      {
        list1: "All tours",
        list1_to: "/tours/all",
      },
      {
        list1: "Add tours",
        list1_to: "/tours/add",
      },
      {
        list1: "Categories",
        list1_to: "/tours/category",
      },
      {
        list1: "Countries",
        list1_to: "/tours/country",
      },
    ],
  },
  {
    name: "Payment Settings",
    to: "/payments",
    icon: <MdPayment />,
    list: [
      {
        list1: "All tours",
        list1_to: "/tours/all",
      },
      {
        list1: "Add tours",
        list1_to: "/tours/add",
      },
      {
        list1: "Categories",
        list1_to: "/tours/category",
      },
      {
        list1: "Countries",
        list1_to: "/tours/country",
      },
    ],
  },
];

export default sidebarLinks;
