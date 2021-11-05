import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Overview',
  },
  {
    component: CNavItem,
    name: 'C',
    to: '/t',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'T',
    to: '/t',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Tracking',
    to: '/theme/typography',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Analytics',
  },
  {
    component: CNavGroup,
    name: 'B',
    to: '/b',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'A',
        to: '/b/ac',
      },
      {
        component: CNavItem,
        name: 'B',
        to: '/b/b',
      },
      {
        component: CNavItem,
        name: 'C',
        to: '/b/c',
      },
      {
        component: CNavItem,
        name: 'C',
        to: '/b/c',
      },
      {
        component: CNavItem,
        name: 'C',
        to: '/b/c',
      },
      {
        component: CNavItem,
        name: 'L',
        to: '/b/l',
      },
      {
        component: CNavItem,
        name: 'N',
        to: '/b/n',
      },
      {
        component: CNavItem,
        name: 'P',
        to: '/b/p',
      },
      {
        component: CNavItem,
        name: 'P',
        to: '/b/p',
      },
      {
        component: CNavItem,
        name: 'P',
        to: '/b/p',
      },
      {
        component: CNavItem,
        name: 'S',
        to: '/b/s',
      },
      {
        component: CNavItem,
        name: 'T',
        to: '/b/t',
      },
      {
        component: CNavItem,
        name: 'T',
        to: '/b/t',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'B',
    to: '/bu',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Bu',
        to: '/bu/b',
      },
      {
        component: CNavItem,
        name: 'Bu',
        to: '/bu/b',
      },
      {
        component: CNavItem,
        name: 'D',
        to: '/bu/d',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'F',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Fo',
        to: '/f/f',
      },
      {
        component: CNavItem,
        name: 'S',
        to: '/f/s',
      },
      {
        component: CNavItem,
        name: 'C',
        to: '/f/c',
      },
      {
        component: CNavItem,
        name: 'R',
        to: '/f/r',
      },
      {
        component: CNavItem,
        name: 'I',
        to: '/f/i',
      },
      {
        component: CNavItem,
        name: 'F',
        to: '/f/f',
      },
      {
        component: CNavItem,
        name: 'L',
        to: '/f/l',
      },
      {
        component: CNavItem,
        name: 'V',
        to: '/f/v',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'C',
    to: '/c',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'I',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'C',
        to: '/i/c',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'C',
        to: '/i/f',
      },
      {
        component: CNavItem,
        name: 'Co',
        to: '/i/b',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'N',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'A',
        to: '/n/a',
      },
      {
        component: CNavItem,
        name: 'B',
        to: '/n/b',
      },
      {
        component: CNavItem,
        name: 'M',
        to: '/n/m',
      },
      {
        component: CNavItem,
        name: 'T',
        to: '/n/t',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'W',
    to: '/w',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Data',
  },
  {
    component: CNavGroup,
    name: 'P',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'L',
        to: '/l',
      },
      {
        component: CNavItem,
        name: 'R',
        to: '/r',
      },
      {
        component: CNavItem,
        name: 'E',
        to: '/4',
      },
      {
        component: CNavItem,
        name: 'E',
        to: '/5',
      },
    ],
  },
]

export default nav
