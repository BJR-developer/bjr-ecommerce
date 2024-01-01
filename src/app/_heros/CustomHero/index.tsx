/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react'

import { Page } from '../../../payload/payload-types'
import { Gutter } from '../../_components/Gutter'
import { CMSLink } from '../../_components/Link'
import { Media } from '../../_components/Media'
import RichText from '../../_components/RichText'

import classes from './index.module.scss'

export const CustomHero: React.FC<Page['hero']> = ({ richText, media, links }) => {
  const mediaUrl =
    media &&
    typeof media !== 'string' &&
    `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${media.filename}`
  return (
    <div className="relative bg-white mx-auto max-w-7xl">
      <div className="mx-auto lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <RichText content={richText} />
            <div className="mt-6">
              {Array.isArray(links) && links.length > 0 && (
                <ul className={classes.links}>
                  {links.map(({ link }, i) => {
                    return (
                      <li key={i}>
                        <CMSLink {...link} />
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src={mediaUrl}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

// <section className={classes.hero}>
//   <div className={classes.heroWrapper} style={{ backgroundImage: `url(${mediaUrl})` }}>
//     <div className={classes.heroTextBox}>
//       <RichText content={richText} />

//       {Array.isArray(links) && links.length > 0 && (
//         <ul className={classes.links}>
//           {links.map(({ link }, i) => {
//             return (
//               <li key={i}>
//                 <CMSLink {...link} />
//               </li>
//             )
//           })}
//         </ul>
//       )}
//     </div>
//   </div>
// </section>
