import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    CContainer,
    CHeader,
    CHeaderBrand,
    CHeaderDivider,
    CHeaderNav,
    CHeaderToggler,
    CNavLink,
    CNavItem,
    CButtonGroup,
    CButton,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilBell, cilEnvelopeOpen, cilList, cilMenu,cilBlur,cilSun,cilMoon} from '@coreui/icons';
import Breadcrumb from './Breadcrumb';
import HeaderDropDown from './HeaderDropDown';
import { logo } from 'src/Assets/brand/logo';
function Header() {
    const dispatch = useDispatch()
    const sidebarShow = useSelector((state) => state.sidebarShow);
    return (
        <CHeader position="sticky" className="mb-4">
            <CContainer fluid>
                <CHeaderToggler
                className="ps-1"
                onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
                >
                <CIcon icon={cilMenu} size="lg" />
                </CHeaderToggler>
                <CHeaderBrand className="mx-auto d-md-none" to="/">
                <CIcon icon={logo} height={48} alt="Logo" />
                </CHeaderBrand>
                <CHeaderNav className="d-none d-md-flex me-auto">
                <CNavItem>
                    <CNavLink to="/dashboard" component={NavLink} activeClassName="active">
                    Dashboard
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink href="#">Users</CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink href="#">Settings</CNavLink>
                </CNavItem>
                </CHeaderNav>
                <CHeaderNav>
                    <CButtonGroup role="group" aria-label="Basic example">
                        <CButton color="primary">
                            <CIcon icon={cilSun} size="lg" />
                        </CButton>
                        <CButton color="primary">
                            <CIcon icon={cilMoon} size="lg" />
                        </CButton>
                    </CButtonGroup>
                </CHeaderNav>
                <CHeaderNav>
                <CNavItem>
                    <CNavLink href="#">
                    <CIcon icon={cilBell} size="lg" />
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink href="#">
                    <CIcon icon={cilList} size="lg" />
                    </CNavLink>
                </CNavItem>
                
                <CNavItem>
                    <CNavLink href="#">
                    <CIcon icon={cilEnvelopeOpen} size="lg" />
                    </CNavLink>
                </CNavItem>
                <CNavItem>
                    <CNavLink href="#">
                    <CIcon icon={cilBlur} size="lg" />
                    </CNavLink>
                </CNavItem>
                </CHeaderNav>
                <CHeaderNav className="ms-3">
                <HeaderDropDown />
                </CHeaderNav>
                
            </CContainer>
            <CHeaderDivider />
            <CContainer fluid>
                <Breadcrumb />
            </CContainer>
        </CHeader>
    )
}

export default Header
