import React, { useEffect, useRef, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'

import { FaUserAlt } from "react-icons/fa";

const AppHeader = () => {
  const headerRef = useRef()
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const [userName, setUserName] = useState('')

  // useEffect(() => {
  //   document.addEventListener('scroll', () => {
  //     headerRef.current &&
  //       headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
  //   })
  // }, [])

  useEffect(() => {
    document.addEventListener('scroll', () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    })

    // Fetch user data from localStorage and set the name based on the role
    const userRole = localStorage.getItem('userRole')
    if (userRole === 'Gymuser') {
      const userData = JSON.parse(localStorage.getItem('userData'))
      if (userData) {
        setUserName(userData.fullName)  // Get full name of Gymuser
      }
    } else if (userRole === 'Admin') {
      const adminData = JSON.parse(localStorage.getItem('adminData'))
      if (adminData) {
        setUserName(adminData.adminName)  // Get admin name for Admin role
      }
    }
  }, [])


  return (
    <CHeader
      position="sticky"
      className="mb-0 p-0"
      ref={headerRef}
      style={{
        borderBottom: 'none',  // Remove bottom line
        // backgroundColor: 'white',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',      // Remove shadow
      }}
    >
      {/* <CContainer className="px-4" fluid>
        <CHeaderToggler
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px' }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <AppBreadcrumb />
      </CContainer> */}

<CContainer className="px-4 justify-content-between align-items-center" fluid>
        {/* Sidebar Toggle Button */}
        <div className="d-flex align-items-center">
        <CHeaderToggler
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px', color:'black' }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <AppBreadcrumb />
        </div>

          {/* "Hi Admin" at the end */}
        <div className="d-flex align-items-center me-3">
          <span style={{ fontWeight: '500', fontSize: '1rem' }}>
          <FaUserAlt /> Hi {userName || 'User'}
            </span>
        </div>

      </CContainer>
    </CHeader>
  )
}

export default AppHeader
