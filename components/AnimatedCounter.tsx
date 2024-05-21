'use client'

import React from 'react'
import CountUp from 'react-countup'

function AnimatedCounter({end=12345.67}:{end:number}) {
  return (
    <div className="w-full">
        <CountUp end={end} decimal='.' prefix='₹' duration={2.5} decimals={2}/>
    </div>
  )
}

export default AnimatedCounter