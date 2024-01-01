'use client'
import React, { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

import { Header } from '../../../../payload/payload-types'
import classNames from '../../../../utils/classNames'
import { useAuth } from '../../../_providers/Auth'
import { author_profile_navigations } from '../../../_utilities/staticLinks'
import MainLogo from '../../icons/Avatar/MainLogo'
import Navbar_SearchBarPopup from '../../Popup/SearchBarPopup'
import SliderCart from '../../Slider/CartSlider'
import SliderNavbar, { Navbar_PublishingButton } from '../../Slider/NavbarSlider'
import Navbar_NotificationsSlider from '../../Slider/NotificationSlider'
// import { Avatar } from './LetterAvatar'

const new_navigation = [
  { name: 'News', href: '/news', current: false },
  { name: 'Products', href: '/products', current: false },
]

const Navbar = ({ header }: { header: Header }) => {
  const [openSlideCart, setOpenSlideCart] = React.useState(false)
  const [openNavbarSlider, setOpenNavbarSlider] = React.useState(false)
  const [openNotifications, setOpenNotifications] = useState(false)
  const [showLogoutSuccess, setShowLogoutSuccess] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)
  const { user } = useAuth()

  const router = useRouter()
  const currentPath = usePathname()

  return (
    <nav className="flex h-16 justify-between">
      <SliderNavbar
        setShowLogoutSuccess={setShowLogoutSuccess}
        open={openNavbarSlider}
        setOpen={setOpenNavbarSlider}
      />
      <div className="flex">
        <div className="flex flex-shrink-0 items-center">
          <Link legacyBehavior href={'/'}>
            <a>
              <MainLogo width={40} height={40} />
            </a>
          </Link>
        </div>
        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
          {new_navigation.map(item => (
            <Link key={item.name} href={item.href} legacyBehavior>
              <a
                className={classNames(
                  currentPath == item.href
                    ? 'border-indigo-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                )}
                aria-current={currentPath == item.href ? 'page' : undefined}
              >
                {item.name}
              </a>
            </Link>
          ))}
          <Navbar_PublishingButton />
        </div>
      </div>
      <SliderCart open={openSlideCart} setOpen={setOpenSlideCart} />
      <div className="hidden sm:ml-6 sm:flex sm:items-center gap-3">
        <Navbar_SearchBarPopup open={openSearch} setOpen={setOpenSearch} />
        <Navbar_NotificationsSlider open={openNotifications} setOpen={setOpenNotifications} />
        <button
          onClick={() => setOpenSearch(true)}
          type="button"
          className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">search</span>
          <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        {user ? (
          ''
        ) : (
          <div className="flex flex-1 items-center justify-end gap-x-6">
            <Link legacyBehavior href="/login">
              <a className="text-sm font-semibold leading-6 text-gray-900">Log in</a>
            </Link>
            <Link legacyBehavior href="/create-account">
              <a className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Sign up
              </a>
            </Link>
          </div>
        )}

        {user && (
          <>
            <button
              type="button"
              onClick={() => setOpenNotifications(true)}
              className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            <button
              onClick={() => setOpenSlideCart(true)}
              type="button"
              className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View cart slider</span>
              <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  {/* <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <Avatar size="SMALL" /> */}
                  <img src="https://i.pravatar.cc/300" className="h-8 w-8 rounded-full" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {author_profile_navigations.map(item => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <Link legacyBehavior href={item.href}>
                          <a
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            )}
                          >
                            {item.name}
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                  <Menu.Item>
                    <Link legacyBehavior href="/logout">
                      <a className="block px-4 py-2 text-sm text-gray-700">Logout</a>
                    </Link>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </>
        )}
      </div>

      <div className="-mr-2 flex items-center gap-2 sm:hidden">
        <button
          onClick={() => setOpenSearch(true)}
          type="button"
          className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Search</span>
          <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        {user && (
          <button
            onClick={() => setOpenSlideCart(true)}
            type="button"
            className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        )}
        <button
          onClick={() => {
            setOpenNavbarSlider(true)
          }}
          className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="absolute -inset-0.5" />
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar

// 'use client'

// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'

// import { Header } from '../../../../payload/payload-types'
// import { noHeaderFooterUrls } from '../../../constants'
// import { Gutter } from '../../Gutter'
// import { HeaderNav } from '../Nav'

// import classes from './index.module.scss'

// const HeaderComponent = ({ header }: { header: Header }) => {
//   const pathname = usePathname()
// }

// return (
//   <nav
//     className={[classes.header, noHeaderFooterUrls.includes(pathname) && classes.hide]
//       .filter(Boolean)
//       .join(' ')}
//   >
//     <Gutter className={classes.wrap}>
//       <Link legacyBehavior href="/">
//         <Image src="/logo-black.png" alt="logo" width={50} height={50} />
//       </Link>

//       <HeaderNav header={header} />
//     </Gutter>
//   </nav>
// )

// export default HeaderComponent
