import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

function page() {
  const loggedIn = { firstName:"Siddharth"}

  return (
    <div className='home'>
      <div className="home-content">
        <header className='home-header'>
          <HeaderBox 
          type="greeting"
          title="Welcome"
          user={loggedIn?.firstName || "Guest"}
          subtext="Access and manage your account and transactions efficiently" />

          <TotalBalanceBox
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {12834.34}
          />
        </header>
      </div>
    </div>
  )
}

export default page