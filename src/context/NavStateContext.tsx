'use client'

import { createContext, useContext, useState } from 'react'

const NavContext = createContext<any>(null)

export const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Services', href: '/services', current: false },
  { name: 'Resume', href: '/resume', current: false },
  { name: 'Experiences', href: '/experiences', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

export function NavProvider({ children }: any) {

  const [nav, setNav] = useState(navigation);

  return (
    <NavContext.Provider value={{ nav, setNav }}>
      {children}
    </NavContext.Provider>
  )
}

export function useNav() {
  return useContext(NavContext)
}

export function updateNav(newNav: string, setNav: any) {
  setNav((prevNav: any) => {
    return prevNav.map((item: any) => ({
      ...item,
      current: item.name === newNav ? true : false
    }))
  })
}