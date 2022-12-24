import {
    BsShop,
    BsGrid,
    BsFileRichtext,
} from "react-icons/bs";
import {
    GiIsland
} from 'react-icons/gi'
import {
    MdPayment
} from 'react-icons/md'

const sidebarLinks = [
    {
        name: "Dashboard",
        to: "/",
        icon: <BsGrid />,
    },
    {
        name: "Homepage Settings",
        to: "/homepages",
        icon: <BsShop />,
    },
    {
        name: "Tours",
        to: "/tours",
        icon: <GiIsland />,
    },
    {
        name: "Visa",
        to: "/visas",
        icon: <BsFileRichtext />,
    },
    {
        name: "Payment Settings",
        to: "/payments",
        icon: <MdPayment />,
    },
];

export default sidebarLinks;