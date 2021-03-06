import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import { FaGithub, FaTwitter } from 'react-icons/fa'

import QnA from '../components/QnA'
import Spacer from '../components/Spacer'

import './Docs.css'
import daiChart from '../assets/dai-liquidity-chart.png'
import ethChart from '../assets/eth-liquidity-chart.png'
import wbtcChart from '../assets/wbtc-liquidity-chart.png'

const Docs = () => {

  const qnaData = [
    {
      question: 'What is Uptick?',
      answerText: 'Uptick is building a series of simple vaults on Uniswap V3. The initial vaults will take single-token deposits and deploy liquidity to stable pairs. See \'How it works\' for more information.',
    },
    {
      question: 'What is Uniswap V3?',
      answerText: 'Uniswap is an automated market maker (AMM) protocol. Uniswap V3, which launched in May 2021, has some exciting new features, such as concentrated liquidity. See <a href="https://uniswap.org/" target="_blank">https://uniswap.org</a> to learn more.',
    },
    {
      question: 'What vaults are available?',
      answerText: 'Uptick vaults are currently under active development. The initial launch plan includes three vaults: ETH vault (which will likely supply liquidity to the ETH-sETH pair), DAI vault (which will likely supply liquidity to the DAI-USDC pair), and WBTC vault (which will likely supply liquidity to the WBTC-renBTC pair). Areas that are being explored for future vaults include vaults that supply liquidity to multiple trading pairs and vaults that supply liquidity on higher-fee volatile pairs.',
    },
    {
      question: 'Why wouldn\'t I just provide liquidity on Uniswap V3 myself?',
      answerText: 'You certainly can! However, some users aren\'t comfortable providing liquidity on Uniswap themselves (and doing so is a lot more complicated on Uniswap V3). In addition, you would have to manage the position range yourself while watching out for impermanent loss, and pay all gas fees yourself. If you don\'t want to worry about all of that yourself, you can use Uptick vaults to manage your position for you.',
    },
    {
      question: 'Does Uptick charge fees?',
      answerText: 'The exact mechanics of the protocol are still being finalized. The smart contracts will likely include a variable called <code>protocolFee</code>, which would take a small percentage of <i>profits</i> (i.e. trading fees earned from the Uniswap pools) as a protocol fee. The protocol fee might be set to 0 at launch.',
    },
    {
      question: 'Is there a token?',
      answerText: 'There is no Uptick token at this time.',
    },
  ]

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
          <p className="secondary-text text-right">If you withdraw and your current position is 520 DAI, 520 USDC, your liquidity is removed, your 520 USDC are converted to DAI, and 1,040 DAI are returned to your wallet</p>
          <br />
          <br />
          <h5 className="margin-bottom">FAQ</h5>
          {
            qnaData.map((data) => (
              <QnA
                question={ data.question }
                answerText={ data.answerText }
              />
            ))
          }
        </Col>
        <Col sm="1"></Col>
        <Col sm="4">
          <img className="img-fluid liquidity-chart" src={ daiChart } alt="DAI Chart" />
          <img className="img-fluid liquidity-chart" src={ ethChart } alt="ETH Chart" />
          <img className="img-fluid liquidity-chart" src={ wbtcChart } alt="WBTC Chart" />
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
            <a
              href="https://github.com/emersonmacro/uptick-contracts"
              target="_blank"
              rel="noreferrer"
              className="logo-link"
            >
              <span className="icon-spacer"><FaGithub size="3em" /></span>
            </a>
            <a
              href="https://twitter.com/UptickVaults"
              target="_blank"
              rel="noreferrer"
              className="logo-link"
            >
              <span className="icon-spacer"><FaTwitter size="3em" /></span>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  )

}

export default Docs
