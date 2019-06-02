import React, { Component } from 'react';
import { carouselData } from '../../data'
import styled from 'styled-components'

const CarouselDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;

  @media (min-width: 1200px) {
    width: 1200px;
  }
`
const LeftDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  top: 50%;
  left: 25px;
  transform: translate(0, -50%);

  &:hover{
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`
const RightDiv = styled.div`  
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  top: 50%;
  right: 25px;
  transform: translate(0, -50%);

  &:hover{
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`

const Carousel_Img = styled.img`
  width: 100%;
  display: none;
`

// Complete this Carousel 

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentImageIndex: 0
    }
  }

  componentDidMount(){

  }

  leftClick = () => {
    let prevIndex = this.state.currentImageIndex;
    if(prevIndex === 0)
    {
      this.setState({currentImageIndex: 3})
    }
    else{
      this.setState({currentImageIndex: prevIndex - 1})
    }
  }

  rightClick = () => {
    let prevIndex = this.state.currentImageIndex;
    if(prevIndex === 3)
    {
      this.setState({currentImageIndex: 0})
    }
    else{
      this.setState({currentImageIndex: prevIndex + 1})
    }
  }

  selectedImage = () => {
    return <Carousel_Img src={carouselData[this.state.currentImageIndex]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <CarouselDiv>
        <LeftDiv onClick={this.leftClick}>{"<"}</LeftDiv>
        {this.selectedImage()}
        <RightDiv onClick={this.rightClick}>{">"}</RightDiv>
      </CarouselDiv>
    )
  }
}