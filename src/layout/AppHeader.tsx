"use client";

import { useState, useEffect } from 'react';

import { useNav } from '@/context/NavStateContext';
import { usePathname, useRouter } from 'next/navigation';
//import Button from '@mui/material/Button';
import IconButton from '@mui/joy/IconButton';
import Button from '@mui/joy/Button';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ');
}



export default function AppHeader() {

  const { nav, setNav } = useNav();
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter();
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault() 
    console.log('Navigating to:', href);
    setNav((prevNav: any) => {
      return prevNav.map((item: any) => ({
        ...item,
        current: item.href === href
      }))
    })
    router.push(href)
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
    {/* desktop */}
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 hidden md:flex">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img src="Iskandar.jpg" 
              alt="" 
              className="inline-block size-16 rounded-full ring-1 ring-gray-900 outline -outline-offset-1 outline-white/10" 
            />          
          </a>
        </div>
        
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-6">
            {nav.map((item : any) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                onClick={(e) => handleClick(item.href, e)}
                className={classNames(
                  item.current ? 'text-indigo-400 underline underline-offset-8 decoration-indigo-500' : 'text-gray-300 hover:text-indigo-400',
                  'rounded-md px-3 py-2 text-2xl font-bold',
                )}                
              >
                {item.name}
              </a>
            ))}
            {/* <IconButton aria-label="Contact Me" color="primary" size="lg"  sx={{"--Button-gap": "32px" }}>
              <FavoriteBorder />
              Contact Me
            </IconButton> */}
            <Button color="primary" variant="plain" size="lg" sx={{"--Button-size": "64px" }} startDecorator={<FavoriteBorder />}>
              <span className="text-2xl font-bold">Contact Me</span>
            </Button>
          </div>
        </div>     
      </nav>
      {/* Mobile Button */}
        <button
          className="md:hidden absolute top-4 right-4 z-50 rounded-md p-2 text-white hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          onClick={() => setIsOpen(!isOpen)}
        >
           <span className="text-2xl">☰</span>  
        </button>

      {/* mobile */}
      {
        isOpen && (
          <div className="md:hidden">
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
              <div className="fixed right-0 justify-between">                
                <IconButton aria-label="delete" color="primary" onClick={() => setIsOpen(false)}>
                  <DeleteIcon />
                </IconButton>              
              </div>
              <div className="mt-10 flex flex-col items-center justify-center gap-y-6">
                <a href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img src="Iskandar.jpg" 
                    alt="" 
                    className="inline-block size-16 rounded-full ring-1 ring-gray-900 outline -outline-offset-1 outline-white/10" 
                  />          
                </a>
                {nav.map((item : any) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    onClick={(e) => handleClick(item.href, e)}
                    className={classNames(
                      item.current ? 'text-indigo-400 underline underline-offset-8 decoration-indigo-500' : 'text-gray-300 hover:text-indigo-400',
                      'rounded-md px-3 py-2 text-xl font-bold',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
                <Button color="primary" variant="plain" size="lg" sx={{"--Button-size": "64px" }} startDecorator={<FavoriteBorder />}>
                  <span className="text-2xl font-bold">Contact Me</span>
                </Button>
              </div>
            </div>
          </div>
        )
      }

    </header>
  )
};

