'use client'
import React, { Fragment, useState } from 'react'

import { Page } from '../../../payload/payload-types'
import { ArchiveBlock } from '../../_blocks/ArchiveBlock'
import { CallToActionBlock } from '../../_blocks/CallToAction'
import { ContentBlock } from '../../_blocks/Content'
import { MediaBlock } from '../../_blocks/MediaBlock'
import { RelatedProducts, RelatedProductsProps } from '../../_blocks/RelatedProducts'
import RichText from '../../_components/RichText'
import ProductList from './ProductList'
import { Pagination } from '../../_components/Pagination'

const blockComponents = {
  cta: CallToActionBlock,
  content: ContentBlock,
  mediaBlock: MediaBlock,
  archive: ArchiveBlock,
  relatedProducts: RelatedProducts,
}
interface Props {
  blocks: (Page['layout'][0] | RelatedProductsProps)[]
}

const ProductsPage: React.FC<Props> = ({ blocks }) => {
  const [page, setPage] = useState(1)

  const block = blocks[0] as any
  const introContent = block.introContent as any

  console.log(blocks)

  return (
    <div>
      <div className="mx-auto max-w-primary mt-10">
        <RichText content={introContent} />
      </div>
      <div>
        <ProductList blocks={blocks} />
      </div>
      {/* <Pagination page={page} onClick={setPage} totalPages={2} /> */}
    </div>
  )
}

export default ProductsPage
