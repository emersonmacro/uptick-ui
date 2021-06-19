import React from 'react'
import { Row, Col, Container } from 'reactstrap'

import Spacer from '../components/Spacer'

import './Docs.css'
import daiChart from '../assets/dai-liquidity-chart.png'
import ethChart from '../assets/eth-liquidity-chart.png'
import wbtcChart from '../assets/wbtc-liquidity-chart.png'

const Docs = () => {

  return (
    <Container>
      <Row>
        <Col>
          <Spacer />
        </Col>
      </Row>
      <Row className="page-row margin-bottom">
        <Col>
          <h5>How it works</h5>
        </Col>
      </Row>
      <Row className="page-row">
        <Col sm="7">
          <p>Deposit a base token into a vault...</p>
          <p className="secondary-text text-right">e.g. You deposit 1,000 DAI into the Uptick DAI vault</p>
          <p>The vault converts 50% of your deposit into a similar token...</p>
          <p className="secondary-text text-right">50% of your DAI deposit is converted to USDC</p>
          <p>And adds both tokens to a pooled liquidity position on a Uniswap V3 pair...</p>
          <p className="secondary-text text-right">500 DAI, 500 USDC added to DAI-USDC pool</p>
          <p>Since this is a stable pair, liquidity can be added in a narrow range...</p>
          <p className="secondary-text text-right">e.g. range position +/- 1% of current market price</p>
          <p>And your fees are collected and added to your position on every deposit, withdrawal, or periodically via a keeper mechanism...</p>
          <p className="secondary-text text-right">If your position earns 5 DAI/USDC per month in fees, those are added to your position regularly, allowing for auto-compounding returns</p>
          <p>When you are ready to withdraw, your liquidity and accumulated fees are removed, your similar token balance is converted to the base token, and your total balance of the base token is returned to you</p>
          <p className="secondary-text text-right">e.g. If you withdraw and your current position is 520 DAI, 520 USDC, your liquidity is removed, your 520 USDC are converted to DAI, and 1,040 DAI are returned to your wallet</p>
        </Col>
        <Col sm="1"></Col>
        <Col sm="4">
          <img className="img-fluid liquidity-chart" src={ daiChart } />
          <img className="img-fluid liquidity-chart" src={ ethChart } />
          <img className="img-fluid liquidity-chart" src={ wbtcChart } />
        </Col>
      </Row>
      <Row>
        <Col>
          <Spacer />
        </Col>
      </Row>
    </Container>
  )

}

export default Docs