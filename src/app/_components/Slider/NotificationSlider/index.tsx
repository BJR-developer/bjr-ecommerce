import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const tabs = [
  { name: 'All', href: '#', current: true },
  { name: 'Online', href: '#', current: false },
  { name: 'Offline', href: '#', current: false },
]
const notifications = [
  {
    name: 'John Smith',
    handle: 'johnsmith',
    href: '#',
    imageUrl: 'https://source.unsplash.com/50x50/?boy',
    status: 'online',
    notifications: [
      {
        content: 'Liked your blog post',
        link: 'Title of the Blog Post',
      },
    ],
  },
  {
    name: 'Alice Johnson',
    handle: 'alicejohnson',
    href: '#',
    imageUrl: 'https://source.unsplash.com/50x50/?boy',
    status: 'offline',
    notifications: [
      {
        content: 'Received an order',
        link: 'Order ID: #54321',
      },
    ],
  },
  {
    name: 'Ethan Brown',
    handle: 'ethanbrown',
    href: '#',
    imageUrl: 'https://source.unsplash.com/50x50/?boy',
    status: 'online',
    notifications: [
      {
        content: 'Started following you',
        link: 'Your Profile',
      },
    ],
  },
  {
    name: 'Olivia Davis',
    handle: 'oliviadavis',
    href: '#',
    imageUrl: 'https://source.unsplash.com/50x50/?boy',
    status: 'offline',
    notifications: [
      {
        content: 'Shared your product',
        link: 'Product Name',
      },
    ],
  },
  {
    name: 'Noah Wilson',
    handle: 'noahwilson',
    href: '#',
    imageUrl: 'https://source.unsplash.com/50x50/?boy',
    status: 'online',
    notifications: [
      {
        content: 'Reviewed your product',
        link: 'Product Name',
      },
    ],
  },
  {
    name: 'Sophia Martin',
    handle: 'sophiamartin',
    href: '#',
    imageUrl: 'https://source.unsplash.com/50x50/?boy',
    status: 'offline',
    notifications: [
      {
        content: 'Commented on your blog',
        link: 'Title of the Blog Post',
      },
    ],
  },
  {
    name: 'Liam Garcia',
    handle: 'liamgarcia',
    href: '#',
    imageUrl: 'https://source.unsplash.com/50x50/?boy',
    status: 'online',
    notifications: [
      {
        content: 'Liked your blog post',
        link: 'Title of the Blog Post',
      },
    ],
  },
  {
    name: 'Ava Rodriguez',
    handle: 'avarodriguez',
    href: '#',
    imageUrl: 'https://source.unsplash.com/50x50/?boy',
    status: 'offline',
    notifications: [
      {
        content: 'Received an order',
        link: 'Order ID: #98765',
      },
    ],
  },
  {
    name: 'Mia Martinez',
    handle: 'miamartinez',
    href: '#',
    imageUrl: 'https://source.unsplash.com/50x50/?boy',
    status: 'online',
    notifications: [
      {
        content: 'Started following you',
        link: 'Your Profile',
      },
    ],
  },
  {
    name: 'William Clark',
    handle: 'williamclark',
    href: '#',
    imageUrl: 'https://source.unsplash.com/50x50/?boy',
    status: 'offline',
    notifications: [
      {
        content: 'Shared your product',
        link: 'Product Name',
      },
    ],
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar_NotificationsSlider({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (value: boolean) => void
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-100" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
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
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          Recent Activities
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="absolute -inset-2.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <ul role="list" className="flex-1 divide-y divide-gray-200 overflow-y-auto">
                      {notifications.map(person => (
                        <li key={person.handle}>
                          <div className="group relative flex px-5 py-6">
                            <a href={person.href} className="-m-1 block flex-1 p-1">
                              <div
                                className="absolute inset-0 group-hover:bg-gray-50"
                                aria-hidden="true"
                              />
                              <div className="relative flex min-w-0 flex-1 items-center">
                                <span className="relative inline-block flex-shrink-0">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={person.imageUrl}
                                    alt=""
                                  />
                                  <span
                                    className={classNames(
                                      person.status === 'online' ? 'bg-green-400' : 'bg-gray-300',
                                      'absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white',
                                    )}
                                    aria-hidden="true"
                                  />
                                </span>
                                <div className="ml-4 truncate">
                                  <p className="truncate text-sm font-medium text-gray-900">
                                    {person.name}
                                  </p>
                                  {person.notifications &&
                                    person.notifications.map((notification, index) => (
                                      <p key={index} className="text-sm text-gray-500">
                                        {notification.content}{' '}
                                        <a href="#" className="font-medium text-gray-900">
                                          {notification.link}
                                        </a>
                                      </p>
                                    ))}
                                </div>
                              </div>
                            </a>
                            <p className="text-xs leading-5 text-gray-500 relative z-10">
                              1 minute ago
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
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
