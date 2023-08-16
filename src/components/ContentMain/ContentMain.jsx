import React, { memo } from 'react'

import Card from '@/components/Card/Card'
import Transactions from '@/components/Transactions/Transactions'
import Report from '@/components/Report/Report'
import Budget from '@/components/Budget/Budget'
import Subscriptions from '@/components/Subscriptions/Subscriptions'
import Savings from '@/components/Savings/Savings'
import Loans from '@/components/Loans/Loans'
import Financial from '@/components/Financial/Financial'

import './ContentMain.css'
const ContentMain = memo(() => {
  return (
    <div className="main-content-holder">
        <div className="content-grid-one">
            <Card />
            <Transactions />
            <Report />
        </div>

        <div className="content-grid-two">
          <Budget />
          <div className="grid-two-item">
            <div className="subgrid-two">
              <Subscriptions />
              <Savings />
            </div>
          </div>

          <div className="grid-two-item">
            <div className="subgrid-two">
                <Loans />
                <Financial />
            </div>
          </div>
        </div>
    </div>
  )
})

export default ContentMain