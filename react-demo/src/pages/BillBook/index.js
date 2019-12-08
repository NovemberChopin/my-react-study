import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, Input, Button, Table, Divider, Select, DatePicker } from 'antd'
import * as createActions from './store/createActions'

class BillBook extends Component {
  render() {
    const Option = Select.Option
    const { 
      income, outcome, balance, tampReason, tampMoney, recordList,
      handleInputChange, handleSlectChange, handleAddRecordes, handleDeleteRecord, handleDateChange
     } = this.props
    const columns = [{
      title: '日期',
      dataIndex: 'date',
      key: 'date',
      width: '20%'
    }, {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      width: '20%'

    }, {
      title: '缘由',
      dataIndex: 'reason',
      key: 'reason',
      width: '20%'
    }, {
      title: '金额',
      dataIndex: 'money',
      key: 'money',
      width: '20%'

    }, {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: '20%',
      render: (text, operation, index) => (
        <div>
          <Button type="primary">编辑</Button>
          <Divider type="vertical" />
          <Button type="danger" onClick={() => { handleDeleteRecord(operation.key)}}>删除</Button>
        </div>
      )
    }];

    return (
      <Fragment>
        <div style={{ background: '#ECECEC', padding: '25px 25px 0' }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="收入" bordered={true}>{income}</Card>
            </Col>
            <Col span={8}>
              <Card title="支出" bordered={true}>{outcome}</Card>
            </Col>
            <Col span={8}>
              <Card title="盈余" bordered={true}>{balance}</Card>
            </Col>
          </Row>
          <Row gutter={16} style={{padding: '16px 0 32px'}}>
            <Col span={5}><DatePicker onChange={handleDateChange} style={{ width: "100%"}} /></Col>
            <Col span={5}>
              <Select defaultValue="income" style={{ width: "100%" }} onChange={handleSlectChange}>
                <Option value="income">收入</Option>
                <Option value="outcome">支出</Option>
              </Select>
            </Col>
            <Col span={5}><Input id="tampReason" value={tampReason} onChange={handleInputChange} placeholder="缘由" /></Col>
            <Col span={5}><Input id="tampMoney" value={tampMoney} onChange={handleInputChange} placeholder="金额" /></Col>
            <Col span={4}><Button type="primary" onClick={handleAddRecordes}>添加记录</Button></Col>
          </Row>
        </div>
        <div style={{ background: '#ECECEC', padding: '0 25px' }}>
          <Table columns={columns} dataSource={recordList} pagination={{ pageSize: 50 }} scroll={{ y: 260 }} />
        </div>
        
      </Fragment>
    )
  }
  componentDidMount() {
    this.props.getRecordList()
  }
}

const mapStateToProps = (state) => {
  return {
    income: state.BillReducer.income,
    outcome: state.BillReducer.outcome,
    balance: state.BillReducer.balance,

    tampDate: state.BillReducer.tampDate,
    tampType: state.BillReducer.tampType,
    tampReason: state.BillReducer.tampReason,
    tampMoney: state.BillReducer.tampMoney,

    recordList: state.BillReducer.recordList
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleInputChange(e) {
    const action = createActions.getInputAction(e.target.value, e.target.id)
    dispatch(action)
  },
  handleSlectChange: (value) => {
    const action = createActions.getSlectAction(value)
    dispatch(action)
  },
  handleDateChange: (date, dateString) => {
    const action = createActions.getDateAction(dateString)
    dispatch(action)
  },
  handleAddRecordes : () => {
    const action = createActions.getAddAction()
    dispatch(action);
  },
  getRecordList: () => {
    const action = createActions.getRecordList()
    dispatch(action)
  },
  handleDeleteRecord: (key) => {
    const action = createActions.deleteRecordList(key)
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BillBook)