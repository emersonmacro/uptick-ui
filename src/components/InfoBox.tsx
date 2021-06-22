import React from 'react'
import { BiBarChartAlt, BiCoin } from 'react-icons/bi'
import { FaExchangeAlt } from 'react-icons/fa'
import { RiBarChart2Line } from 'react-icons/ri'

import './InfoBox.css'

const InfoBox = ({ title, icon, text }) => {
  return (
    <div className="info-box-container h-100">
      <h6 className="text-center"><b>{ title }</b></h6>
      <div className="text-center icon-line">{ getIcon(icon) }</div>
      <p className="small">{ text }</p>
    </div>
  )
}

export default InfoBox

function getIcon(icon: string) {
  switch (icon) {
    case 'coin':
      return <BiCoin size="2em" />
    case 'exchange':
      return <FaExchangeAlt size="2em" />
    case 'center-chart':
      return <RiBarChart2Line size="2em" />
    default:
      return <BiBarChartAlt size="2em" />
  }
}