// import React from 'react'
// import CIcon from '@coreui/icons-react'
// import { cilSpeedometer,} from '@coreui/icons'
// import {  CNavItem, CNavGroup } from '@coreui/react'
// import { FaTachometerAlt, FaHome, FaCogs, FaUserAlt  } from 'react-icons/fa'
// import { CiBoxList } from "react-icons/ci";
// import { IoNewspaperOutline } from "react-icons/io5";
// import { MdOutlinePostAdd, MdDiscount, MdLocalOffer, MdSportsGymnastics, MdOutlineHealthAndSafety  } from "react-icons/md";
// import { IoIosContact } from "react-icons/io";
// import { BiSolidBadgeDollar } from "react-icons/bi";
// import { FaUsers } from "react-icons/fa6";
// import { ImProfile } from "react-icons/im";
// import { GrYoga } from "react-icons/gr";

// const _nav = [
//   {
//     component: CNavItem,
//     name: 'Dashboard',
//     to: '/dashboard',
//     icon: <FaTachometerAlt className="nav-icon" />,
//     roles: ['Admin'],
//   },

//   // {
//   //   component: CNavItem,
//   //   name: 'Home',
//   //   to: '/home',
//   //   icon: <FaHome className="nav-icon" />
//   // },

//   {
//     component: CNavItem,
//     name: 'Add Blog',
//     to: '/addblog',
//     icon: <MdOutlinePostAdd className="nav-icon" />,
//     roles: ['Admin'],
//   },

//   {
//     component: CNavItem,
//     name: 'All Blog',
//     to: '/allblog',
//     icon: <IoNewspaperOutline className="nav-icon" />,
//     roles: ['Admin'],
//   },

//   {
//     component: CNavItem,
//     name: 'Contact Inquiries',
//     to: '/conatctinquiries',
//     icon: <IoIosContact className="nav-icon" />,
//     roles: ['Admin'],
//   },

//   {
//     component: CNavItem,
//     name: 'User Details',
//     to: '/userdetails',
//     icon: <FaUserAlt  className="nav-icon" />,
//     roles: ['Admin'],
//   },

//   {
//     component: CNavItem,
//     name: 'Manage Trainer',
//     to: '/managetrainer',
//     icon: <GrYoga className="nav-icon" />,
//     roles: ['Admin'],
//   },

//   {
//     component: CNavItem,
//     name: 'Membership Plan',
//     to: '/manageplan',
//     icon: <BiSolidBadgeDollar  className="nav-icon" />,
//     roles: ['Admin'],
//   },
 
//   {
//     component: CNavItem,
//     name: 'User Profile',
//     to: '/userform',
//     icon: <ImProfile className="nav-icon" />,
//     roles: ['Gymuser'],
//   },

//   {
//     component: CNavItem,
//     name: 'Health Details',
//     to: '/healthdetails',
//     icon: <MdOutlineHealthAndSafety className="nav-icon" />,
//     roles: ['Gymuser'],
//   },

//   {
//     component: CNavItem,
//     name: 'Membership Details',
//     to: '/membershipdetails',
//     icon: <FaUsers className="nav-icon" />,
//     roles: ['Gymuser'],
//   },

//   {
//     component: CNavGroup,
//     name: 'App Setting',
//     to: '/setting',
//     icon: <FaCogs className="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'Color Theme',
//         to: '/colortheme',
//         roles: ['Admin', 'Gymuser'],
//       },
//       {
//         component: CNavItem,
//         name: 'Profile',
//         to: '/profile',
//         roles: ['Admin'],
//       },
//     ],
//   },
 
// ]

// export default _nav




import React from 'react';
import CIcon from '@coreui/icons-react';
import { cilSpeedometer } from '@coreui/icons';
import { CNavItem, CNavGroup } from '@coreui/react';
import { FaTachometerAlt, FaHome, FaCogs, FaUserAlt } from 'react-icons/fa';
import { CiBoxList } from "react-icons/ci";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlinePostAdd, MdDiscount, MdLocalOffer, MdSportsGymnastics, MdOutlineHealthAndSafety } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { FaUsers } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { GrYoga } from "react-icons/gr";

// Function to get the role from localStorage
const getUserRole = () => {
  // Get the role from localStorage
  const userRole = localStorage.getItem('userRole');
  return userRole || ''; // Fallback to empty string if role is not found
};

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <FaTachometerAlt className="nav-icon" />,
    roles: ['Admin'],
  },
  
  {
    component: CNavItem,
    name: 'Add Blog',
    to: '/addblog',
    icon: <MdOutlinePostAdd className="nav-icon" />,
    roles: ['Admin'],
  },

  {
    component: CNavItem,
    name: 'All Blog',
    to: '/allblog',
    icon: <IoNewspaperOutline className="nav-icon" />,
    roles: ['Admin'],
  },

  {
    component: CNavItem,
    name: 'Contact Inquiries',
    to: '/conatctinquiries',
    icon: <IoIosContact className="nav-icon" />,
    roles: ['Admin'],
  },

  {
    component: CNavItem,
    name: 'User Details',
    to: '/userdetails',
    icon: <FaUserAlt className="nav-icon" />,
    roles: ['Admin'],
  },

  {
    component: CNavItem,
    name: 'Manage Trainer',
    to: '/managetrainer',
    icon: <GrYoga className="nav-icon" />,
    roles: ['Admin'],
  },

  {
    component: CNavItem,
    name: 'Membership Plan',
    to: '/manageplan',
    icon: <BiSolidBadgeDollar className="nav-icon" />,
    roles: ['Admin'],
  },
  
  // For Gymuser role
  {
    component: CNavItem,
    name: 'User Profile',
    to: '/userform',
    icon: <ImProfile className="nav-icon" />,
    roles: ['Gymuser'],
  },

  {
    component: CNavItem,
    name: 'Health Details',
    to: '/healthdetails',
    icon: <MdOutlineHealthAndSafety className="nav-icon" />,
    roles: ['Gymuser'],
  },

  {
    component: CNavItem,
    name: 'Membership Details',
    to: '/membershipdetails',
    icon: <FaUsers className="nav-icon" />,
    roles: ['Gymuser'],
  },

  // App Setting (accessible by both Admin and Gymuser)
  {
    component: CNavGroup,
    name: 'App Setting',
    to: '/setting',
    icon: <FaCogs className="nav-icon" />,
    roles: ['Admin', 'Gymuser'],
    items: [
      {
        component: CNavItem,
        name: 'Color Theme',
        to: '/colortheme',
      },
      // {
      //   component: CNavItem,
      //   name: 'Profile',
      //   to: '/profile',
      //   roles: ['Admin'],
      // },
    ],
  },
];

// Dynamically filter _nav based on user role
const userRole = getUserRole(); // Get the role from localStorage
const filteredNav = _nav.filter(item => item.roles && item.roles.includes(userRole));

export default filteredNav;
