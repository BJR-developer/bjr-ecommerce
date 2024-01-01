import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookOpenIcon,
  ChartBarIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  FolderOpenIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import classNames from '../../../../utils/classNames'
import MainLogo from '../../icons/Avatar/MainLogo'

const new_navigation = [
  { name: 'News', href: '/news', current: false },
  { name: 'Products', href: '/products', current: false },
]

interface Props {
  open: boolean
  setOpen: (value: boolean) => void
  setShowLogoutSuccess: (value: boolean) => void
}

export default function SliderNavbar({ open, setOpen, setShowLogoutSuccess }: Props) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-70" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-xl flex items-center gap-2 font-semibold leading-6 text-gray-900">
                          <MainLogo />
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 ">
                      <MobileNavbar setShowLogoutSuccess={setShowLogoutSuccess} setOpen={setOpen} />
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

const MobileNavbar = ({ setOpen, setShowLogoutSuccess }) => {
  const currentPath = usePathname()

  return (
    <div className="sm:hidden">
      <div className="space-y-1 pb-3 pt-2">
        {new_navigation.map(item => (
          <Link legacyBehavior href={item.href} key={item.name}>
            <a
              onClick={() => setOpen(false)}
              className={classNames(
                currentPath === item.href
                  ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                  : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
              )}
              aria-current={currentPath === item.href ? 'page' : undefined}
            >
              {item.name}
            </a>
          </Link>
        ))}
        <Navbar_PublishingButton_Mobile setOpenSlider={setOpen} />
      </div>
      <div className="border-t border-gray-200 pb-3 pt-4">
        <div className="mt-3 space-y-1">
          <div className="px-4 py-2">
            <Link legacyBehavior href={'/auth/create-account'}>
              <a
                onClick={() => setOpen(false)}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create an account
              </a>
            </Link>
            <p className="mt-4 text-center text-sm text-gray-500">
              Existing customer?{' '}
              <Link legacyBehavior href={'/auth/signin'}>
                <a
                  onClick={() => setOpen(false)}
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Sign in
                </a>
              </Link>
            </p>
          </div>
          <div className="px-4 py-2">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Selling
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const publishing = [
  {
    name: 'Analytics',
    description: 'Get valuable insights from your data',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Blogs',
    description: 'Connect with your audience through written content',
    href: '#',
    icon: BookOpenIcon,
  },
  {
    name: 'Archive',
    description: 'Store and organize your content for future reference',
    href: '#',
    icon: FolderOpenIcon,
  },
  {
    name: 'Seller Dashboard',
    description:
      'Effortlessly manage products, discounts, and orders for a seamless e-commerce experience.',
    href: '/admin',
    icon: ChartPieIcon,
  },
]

export const Navbar_PublishingButton = () => {
  return (
    <div>
      <Popover.Group className="hidden sm:flex py-5 mt-1">
        <Popover className="relative z-50">
          {({ open, close }) => (
            <>
              <Popover.Button className="flex outline-none items-center gap-x-1 text-sm font-medium text-gray-500">
                Publishing
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {publishing.map(item => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link legacyBehavior href={item.href}>
                            <a
                              onClick={() => close()}
                              className="block font-semibold text-gray-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                          </Link>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </Popover.Group>
    </div>
  )
}

export const Navbar_PublishingButton_Mobile = ({
  setOpenSlider,
}: {
  setOpenSlider: (value: boolean) => void
}) => {
  const publishing = [
    {
      name: 'Analytics',
      description: 'Get valuable insights from your data',
      href: '#',
      icon: ChartBarIcon,
    },
    {
      name: 'Blogs',
      description: 'Connect with your audience through written content',
      href: '/publishing/blogs',
      icon: BookOpenIcon,
    },
    {
      name: 'Archive',
      description: 'Store and organize your content for future reference',
      href: '/publishing/archive',
      icon: FolderOpenIcon,
    },
    {
      name: 'Seller Dashboard',
      description:
        'Effortlessly manage products, discounts, and orders for a seamless e-commerce experience.',
      href: '/dashboard',
      icon: ChartPieIcon,
    },
  ]

  return (
    <Disclosure as="div" className="-mx-4">
      {({ open, close }) => (
        <>
          <Disclosure.Button
            className={classNames(
              open ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'bg-white',
              'flex ml-4 w-full items-center justify-between font-medium py-2 pl-3 pr-4 border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 border-l-4 ',
            )}
          >
            Publishing
            <ChevronDownIcon
              className={classNames(
                open ? 'rotate-180' : '',
                'h-5 w-5 flex-none text-gray-600 mr-6',
              )}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 space-y-2 mx-4">
            {publishing.map(item => (
              <Link key={item.name} legacyBehavior href={item.href}>
                <Disclosure.Button
                  as="a"
                  onClick={() => {
                    close()
                    setOpenSlider(false)
                  }}
                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Disclosure.Button>
              </Link>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
