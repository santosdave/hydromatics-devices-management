import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { logoNegative } from 'src/Assets/brand/logo-negative';
import { sygnet } from 'src/Assets/brand/sygnet';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import navigation from '../../utils/nav';
import SidebarNav from './SidebarNav';

function Sidebar() {
    const dispatch = useDispatch()
    const unfoldable = useSelector((state) => state.sidebarUnfoldable)
    const sidebarShow = useSelector((state) => state.sidebarShow)

    return (
        <CSidebar
        position="fixed"
        unfoldable={unfoldable}
        visible={sidebarShow}
        onVisibleChange={(visible) => {
            dispatch({ type: 'set', sidebarShow: visible })
        }}
        >
        <CSidebarBrand className="d-none d-md-flex" to="/">
            <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
            <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
        </CSidebarBrand>
        <CSidebarNav>
            <SimpleBar>
            <SidebarNav items={navigation} />
            </SimpleBar>
        </CSidebarNav>
        <CSidebarToggler
            className="d-none d-lg-flex"
            onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
        </CSidebar>
    )
}

export default Sidebar
