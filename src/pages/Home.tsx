import React from 'react'
import { Row, Col, Container } from 'reactstrap'

import liquidityChart from '../assets/liquidity-chart.png'

const Home = () => {
  
  return (
    <Container>
      <Row>
        <Col>
          <h5>
            Simple vaults on Uniswap V3
          </h5>
        </Col>
        <Col>
          <img src={ liquidityChart } />
        </Col>
      </Row>
    </Container>
  )

}

export default Home