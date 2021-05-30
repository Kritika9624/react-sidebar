import React from 'react';
import * as AiIcons from "react-icons/ai";
import { FaBoxOpen } from "react-icons/fa";


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        clsName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaBoxOpen />,
        clsName: 'nav-text'
    },
    {
        title: 'Services',
        path: '/services',
        icon: <AiIcons.AiFillSetting/>,
        clsName: 'nav-text'
    },
]