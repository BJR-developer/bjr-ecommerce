import { Fragment, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { FaceFrownIcon, GlobeAmericasIcon } from '@heroicons/react/24/outline'
interface Blog {
  id: number
  name: string
  category: string
  url: string
}

interface Product {
  id: number
  name: string
  category: string
  url: string
}
const blogs: Blog[] = [
  { id: 1, name: 'Traveling the World', category: 'Blogs', url: '#' },
  { id: 2, name: 'Healthy Living', category: 'Blogs', url: '#' },
  { id: 3, name: 'Tech Trends', category: 'Blogs', url: '#' },
  { id: 4, name: 'Culinary Adventures', category: 'Blogs', url: '#' },
  { id: 5, name: 'Fitness Journey', category: 'Blogs', url: '#' },
  { id: 6, name: 'Financial Insights', category: 'Blogs', url: '#' },
  { id: 7, name: 'Art & Design Showcase', category: 'Blogs', url: '#' },
  { id: 8, name: 'DIY & Crafts', category: 'Blogs', url: '#' },
  { id: 9, name: 'Entertainment Buzz', category: 'Blogs', url: '#' },
  { id: 10, name: 'Home Improvement Tips', category: 'Blogs', url: '#' },
]

const products: Product[] = [
  { id: 1, name: 'Smartphone X', category: 'Products', url: '#' },
  { id: 2, name: 'Fitness Tracker', category: 'Products', url: '#' },
  { id: 3, name: 'Wireless Earbuds', category: 'Products', url: '#' },
  { id: 4, name: 'Portable Blender', category: 'Products', url: '#' },
  { id: 5, name: 'Yoga Mat', category: 'Products', url: '#' },
  { id: 6, name: 'Smartwatch', category: 'Products', url: '#' },
  { id: 7, name: 'Laptop Stand', category: 'Products', url: '#' },
  { id: 8, name: 'Indoor Plants Set', category: 'Products', url: '#' },
  { id: 9, name: 'Digital Camera', category: 'Products', url: '#' },
  { id: 10, name: 'Graphic Design Software', category: 'Products', url: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface Props {
  open: boolean
  setOpen: (value: boolean) => void
}

export default function Navbar_SearchBarPopup({ open, setOpen }: Props) {
  const [query, setQuery] = useState('')

  const filteredBlogs: Blog[] =
    query === '' ? [] : blogs.filter(blog => blog.name.toLowerCase().includes(query.toLowerCase()))

  const filteredProducts: Product[] =
    query === ''
      ? []
      : products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))

  const blogGroups: { [key: string]: Blog[] } = filteredBlogs.reduce(
    (groups: { [key: string]: Blog[] }, blog: Blog) => {
      return { ...groups, [blog.category]: [...(groups[blog.category] || []), blog] }
    },
    {},
  )

  const productGroups: { [key: string]: Product[] } = filteredProducts.reduce(
    (groups: { [key: string]: Product[] }, product: Product) => {
      return { ...groups, [product.category]: [...(groups[product.category] || []), product] }
    },
    {},
  )

  return (
    <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')} appear>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="mx-auto max-w-xl transform overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox onChange={(item: any) => (window.location = item.url)}>
                <div className="relative outline-none">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 outline-none w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={event => setQuery(event.target.value)}
                  />
                </div>

                {query === '' && (
                  <div className="border-t border-gray-100 px-6 py-14 text-center text-sm sm:px-14">
                    <GlobeAmericasIcon
                      className="mx-auto h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <p className="mt-4 font-semibold text-gray-900">Search for items</p>
                    <p className="mt-2 text-gray-500">
                      Quickly access items by running a global search.
                    </p>
                  </div>
                )}

                {filteredBlogs.length > 0 && (
                  <Combobox.Options
                    static
                    className="max-h-80 scroll-pb-2 scroll-pt-11 space-y-2 overflow-y-auto pb-2"
                  >
                    {Object.entries(blogGroups).map(([category, items]) => (
                      <li key={category}>
                        <h2 className="bg-gray-100 px-4 py-2.5 text-xs font-semibold text-gray-900">
                          {category}
                        </h2>
                        <ul className="mt-2 text-sm text-gray-800">
                          {items.map(item => (
                            <Combobox.Option
                              key={item.id}
                              value={item}
                              className={({ active }: any) =>
                                classNames(
                                  'cursor-default select-none px-4 py-2',
                                  active && 'bg-indigo-600 text-white',
                                )
                              }
                            >
                              {item.name}
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </Combobox.Options>
                )}

                {query !== '' && filteredBlogs.length === 0 && (
                  <div className="border-t border-gray-100 px-6 py-14 text-center text-sm sm:px-14">
                    <FaceFrownIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                    <p className="mt-4 font-semibold text-gray-900">No results found</p>
                    <p className="mt-2 text-gray-500">
                      We couldn’t find anything with that term. Please try again.
                    </p>
                  </div>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
