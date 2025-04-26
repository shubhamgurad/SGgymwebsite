import React from 'react'

const Dashboard = React.lazy(() => import('./views/sidebarpages/Dashboard'))
const Theme = React.lazy(() => import('./views/sidebarpages/ColorTheme'))
const AddBlog = React.lazy(() => import('./views/sidebarpages/AddBlog'))
const AllBlogs = React.lazy(() => import('./views/sidebarpages/AllBlogs'))
const ContactTable = React.lazy(() => import('./views/sidebarpages/ContactTable'))
const UserDetails = React.lazy(() => import('./views/sidebarpages/UserDetails'))
const ManageTrainer = React.lazy(() => import('./views/sidebarpages/ManageTrainer'))
const ManageMembershipPlan = React.lazy(() => import('./views/sidebarpages/ManageMembershipPlan'))
const UserForm = React.lazy(() => import('./views/sidebarpages/UserForm'))
const HealthDetails = React.lazy(() => import('./views/sidebarpages/HealthDetails'))
const MembershipDetails = React.lazy(() => import('./views/sidebarpages/MembershipDetails'))

// ✅ Get user role from localStorage, it could be from either 'userData' or 'adminData'
const userData = JSON.parse(localStorage.getItem('userData')) || {};
const adminData = JSON.parse(localStorage.getItem('adminData')) || {};
const userRole = userData?.role || adminData?.role || '';

// ✅ Define all routes
const allRoutes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard, roles: ['Admin'] },
  { path: '/colortheme', name: 'Color Theme', element: Theme, roles: ['Admin'] },
  { path: '/addblog', name: 'Add Blog', element: AddBlog, roles: ['Admin'] },
  { path: '/allblog', name: 'All Blogs', element: AllBlogs, roles: ['Admin'] },
  { path: '/conatctinquiries', name: 'Contact Table', element: ContactTable, roles: ['Admin'] },
  { path: '/userdetails', name: 'User Details', element: UserDetails, roles: ['Admin'] },
  { path: '/managetrainer', name: 'Manage Trainer', element: ManageTrainer, roles: ['Admin'] },
  { path: '/manageplan', name: 'Manage Membership Plan', element: ManageMembershipPlan, roles: ['Admin'] },
  { path: '/userform', name: 'User Profile', element: UserForm, roles: ['Gymuser'] },
  { path: '/healthdetails', name: 'Health Details', element: HealthDetails, roles: ['Gymuser'] },
  { path: '/membershipdetails', name: 'Membership Details', element: MembershipDetails, roles: ['Gymuser'] },
]

// ✅ Filter routes based on the user role from localStorage
const routes = allRoutes.filter(route =>
  !route.roles || route.roles.includes(userRole)
)

export default routes