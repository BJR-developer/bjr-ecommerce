import React from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

import { Page, Product } from '../../../../payload/payload-types'
import classNames from '../../../../utils/classNames'
import { RelatedProductsProps } from '../../../_blocks/RelatedProducts'
import { Media } from '../../../_components/Media'
import { Price } from '../../../_components/Price'

interface Props {
  blocks: (Page['layout'][0] | RelatedProductsProps)[]
}

const ProductList: React.FC<Props> = ({ blocks }) => {
  const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Apple Iphone 15 Pro Max | 1TB ROM',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 6,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 7,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 8,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]

  const block = blocks[0] as any
  const _products = block.populatedDocs as { value: Product }[]

  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {_products.map(item => {
        const randomStar = Math.ceil(Math.random() * 5)

        const product = item.value
        const { slug } = product

        return (
          <Link key={product.id} legacyBehavior href={`/products/${slug}`}>
            <a className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Media
                  resource={product?.meta?.image}
                  imgClassName="h-72 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="mt-4">
                <div className="flex items-center justify-between gap-6">
                  <h3 className=" text-sm text-gray-700 line-clamp-1">{product?.title}</h3>
                  <div className="flex items-center">
                    <StarIcon
                      className={classNames(
                        randomStar >= 1 ? 'text-gray-900' : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0',
                      )}
                      aria-hidden="true"
                    />
                    <p className="ml-2 text-sm text-gray-500">{randomStar}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <Price product={product} />
                <p className="mt-1 text-sm text-gray-500">Free shipping</p>
              </div>
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default ProductList
