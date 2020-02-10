import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, CarouselWrapper, ListWrapper} from './style'
import { createActions } from './store'

import ListComponent from './components/List'
import CarouselComponent from './components/Carousel'
import HomeRight from './components/HomeRight'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <CarouselWrapper>
            <CarouselComponent />
          </CarouselWrapper>
          <ListWrapper>
            <ListComponent />
          </ListWrapper>
        </HomeLeft>
        
        <HomeRight />
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.getHomeData()
  }
}

const mapDispatchToProps = (dispatch) => ({
  getHomeData: () => {
    const action = createActions.getHomeData()
    dispatch(action)
  }
})
export default connect(null, mapDispatchToProps)(Home)