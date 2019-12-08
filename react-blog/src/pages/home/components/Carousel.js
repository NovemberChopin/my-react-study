import React, { Component } from 'react'
import { Carousel } from 'antd'
import { CarouselItem } from '../style'
export default class CarouselComponent extends Component {
  render() {
    return (
      <Carousel autoplay>
        <CarouselItem><h3>1</h3></CarouselItem>
        <CarouselItem><h3>2</h3></CarouselItem>
        <CarouselItem><h3>3</h3></CarouselItem>
        <CarouselItem><h3>4</h3></CarouselItem>
      </Carousel>
    )
  }
}