// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'

// import {
//   CCloseButton,
//   CSidebar,
//   CSidebarBrand,
//   CSidebarFooter,
//   CSidebarHeader,
//   CSidebarToggler,
// } from '@coreui/react'
// import CIcon from '@coreui/icons-react'

// import { AppSidebarNav } from './AppSidebarNav'

// import { logo } from 'src/assets/brand/logo'
// import { sygnet } from 'src/assets/brand/sygnet'

// // sidebar nav config
// import navigation from '../_nav'

// const AppSidebar = () => {
//   const dispatch = useDispatch()
//   const unfoldable = useSelector((state) => state.sidebarUnfoldable)
//   const sidebarShow = useSelector((state) => state.sidebarShow)

//   return (
//     <CSidebar
//       className="border-end-0"  // Removes the right side border
//       colorScheme="light"
//       position="fixed"
//       unfoldable={unfoldable}
//       visible={sidebarShow}
//       onVisibleChange={(visible) => {
//         dispatch({ type: 'set', sidebarShow: visible })
//       }}
//       style={{
//         boxShadow: 'none',       // Removes any shadow on the sidebar
//       }}
//     >
//       <CSidebarHeader 
//         className="border-bottom-0"  // Removes the bottom border under the logo
//         style={{ borderBottom: 'none' }}  // Inline style to ensure the border is removed
//       >
//         <CSidebarBrand to="/">
//           <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
//           <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
//         </CSidebarBrand>
//         <CCloseButton
//           className="d-lg-none"
//           dark
//           onClick={() => dispatch({ type: 'set', sidebarShow: false })}
//         />
//       </CSidebarHeader>
//       <AppSidebarNav items={navigation} />
//       <CSidebarFooter className="border-top d-none d-lg-flex">
//         <CSidebarToggler
//           onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
//         />
//       </CSidebarFooter>
//     </CSidebar>
//   )
// }

// export default React.memo(AppSidebar)



import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilExitToApp } from '@coreui/icons'
import { Image } from 'react-bootstrap';
import { AppSidebarNav } from './AppSidebarNav'

import { logo } from 'src/assets/brand/logo'
import { sygnet } from 'src/assets/brand/sygnet'

import gymLogo from 'src/views/Images/SGFitnessHubLogo.png'

// sidebar nav config
import navigation from '../_nav'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const handleLogout = () => {
    // Clear local storage on logout
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    localStorage.removeItem('userData')
    localStorage.removeItem('adminData')

    // Redirect to the login page after logout
    window.location.href = '/' // or use navigate() if you're using react-router-dom
  }

  // useEffect(() => {
  //   document.body.setAttribute('data-coreui-theme', 'light');
  // }, []);

  useEffect(() => {
    document.body.setAttribute('data-coreui-theme', 'light');
    document.body.style.colorScheme = 'light';
  }, []);

  return (
    <CSidebar
      className="border-end-0" // Removes the right side border
      colorScheme="light"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
      style={{
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Removes any shadow on the sidebar
        // backgroundColor: 'white'
      }}
    >
      <CSidebarHeader
        className="border-bottom-0" // Removes the bottom border under the logo
        style={{ borderBottom: 'none', justifyContent: 'center', padding:'10px 0px', background:'black' }} // Inline style to ensure the border is removed
      >
        <CSidebarBrand to="/">
          {/* <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} /> */}
          <Image src={gymLogo} height={52} width={99}></Image>
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>
      <AppSidebarNav items={navigation} />
      <CSidebarFooter className="border-top d-flex flex-column align-items-start">
        {/* <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        /> */}
        <div
          className="d-flex align-items-center"
          style={{
            cursor: 'pointer',
            padding: '0px 10px',
            transition: 'color 0.3s, background-color 0.3s',
          }}
          onClick={handleLogout}
        >
          <CIcon
            icon={cilExitToApp}
            size="sm"
            style={{ marginRight: '10px', color: 'inherit' }}
          />
          <span style={{ color: 'inherit' }}>Logout</span>
        </div>
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
