import React from 'react'

import classNames from '../../../utils/classNames'
import serialize from './serialize'

import classes from './index.module.scss'

const RichText: React.FC<{ className?: string; content: any }> = ({ className, content }) => {
  if (!content) {
    return null
  }

  return (
    <div className={classNames(classes.richText, className, 'prose prose-lg')}>
      {serialize(content)}
    </div>
  )
}

export default RichText
