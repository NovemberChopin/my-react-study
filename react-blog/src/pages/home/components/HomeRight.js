import React from 'react'
import { Link } from 'react-router-dom'
import RecommendComponent from './Recommend'
import { HomeRight } from '../style'

import { Row, Col, Card, Icon } from 'antd'

export default class HomeRoght extends React.Component {
  render() {
    return (
      <HomeRight>
        <div className="card">
          <Row>
            <Col span={12}>
              <Card bordered={true}>
                <Link to="/write">
                  <p className="icon"><Icon type="form" style={{ fontSize: '20px' }} /></p>
                  <p className="title">写文章</p>
                </Link>
              </Card>
            </Col>
            <Col span={12}>
              <Card bordered={true}>
                <p className="icon"><Icon type="highlight" style={{ fontSize: '20px' }} /></p>
                <p className="title">写点滴</p>
              </Card>
            </Col>
          </Row>
        </div>
        <RecommendComponent />
      </HomeRight>
    )
  }
}