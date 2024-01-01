'use client'

import React from 'react'
import Link from 'next/link'

import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { Button } from '../../Button'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import classes from './index.module.scss'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={[classes.nav, user === undefined && classes.hide].filter(Boolean).join(' ')}
        >
          {navItems.map(({ link }, i) => {
            return <CMSLink key={i} {...link} appearance="none" />
          })}
          <CartLink />
          {user && <Link href="/account">Account</Link>}
          {!user && (
            <Button
              el="link"
              href="/login"
              label="Login"
              appearance="primary"
              onClick={() => (window.location.href = '/login')}
            />
          )}
          {user && <CartLink />}
        </div>
      </div>
    </nav>
  )
}
