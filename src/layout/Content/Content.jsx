import React, { memo } from 'react'

import ContentTop from '@/components/ContentTop/ContentTop'
import ContentMain from '@/components/ContentMain/ContentMain'

import './Content.css'
const Content = memo(() => {
  return (
    <div className="main-content">
      <ContentTop />
      <ContentMain />
    </div>
  )
})

export default Content