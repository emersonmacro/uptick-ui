import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import { FaGithub, FaTwitter } from 'react-icons/fa'

import InfoBox from '../components/InfoBox'
import Spacer from '../components/Spacer'

import './Home.css'
import liquidityChart from '../assets/dai-liquidity-chart.png'

const Home = () => {
  
  const infoBoxData = [
    {
      title: 'Single-token deposits',
      icon: 'coin', // BiCoin
      text: 'Deposit and withdraw a single token. The vault will handle conversion and liquidity management on Uniswap.',
    },
    {
      title: 'Stable pairs',
      icon: 'exchange', // FaExchangeAlt
      text: 'Your deposit is added to stable pairs on Uniswap - less risk of impermanent loss, fewer active management requirements.',
    },
    {
      title: 'Concentrated liquidity',
      icon: 'center-chart', // RiBarChart2Line
      text: 'Stable pairs means your liquidity can be kept in a narrow range, increasing capital efficiency.',
    },
    {
      title: 'Auto-compounding',
      icon: 'upward-chart', // BiBarChartAlt
      text: 'Fees are collected and added to your position regularly, allowing for auto-compounding returns.',
    }
  ]

  return (
    <Container>
      <Row>
        <Col>
          <Spacer />
        </Col>
      </Row>
      <Row className="page-row">
        <Col className="align-self-center">
          <h5>
            Simple vaults on Uniswap V3
          </h5>
        </Col>
        <Col>
          <img className="img-fluid liquidity-chart" src={ liquidityChart } />
        </Col>
      </Row>
      <Row>
        <Col>
          <Spacer includeTopMargin />
        </Col>
      </Row>
      <Row className="page-row row-cols-2 row-cols-sm-2 row-cols-md-4">
        {
          infoBoxData.map((data) => (
            <Col>
              <InfoBox
                title={ data.title }
                icon={ data.icon }
                text={ data.text }
              />
            </Col>
          ))
        }
      </Row>
      <Row>
        <Col>
          <Spacer includeTopMargin />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="text-center">Coming Soon</h3>
          <p className="text-center"><br />Contracts are under active development.</p>
          <p className="text-center"><br /><a href="/docs">Read more about how Uptick works</a></p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Spacer includeTopMargin />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="text-center">
            <span className="icon-spacer"><FaGithub size="3em" /></span>
            <span className="icon-spacer"><FaTwitter size="3em" /></span>
          </div>
        </Col>
      </Row>
    </Container>
  )

}

export default Home