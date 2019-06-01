import React, { Component } from 'react';
import styled from 'styled-components'

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

const ContentContainerDiv = styled.div`

`

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({tabs: tabData, cards: cardData})
  }

  changeSelected = tab => {
    this.setState({selected: tab})
  };

  filterCards = () => {
    let newCardData;
    if(this.state.selected === 'all')
    {
      newCardData = cardData;
    }
    else{
      newCardData = cardData.filter(card => 
        card.tab.toUpperCase() === this.state.selected.toUpperCase());
    }

    
    return newCardData;
  };

  render() {
    return (
      <ContentContainerDiv>
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected} />
        <Cards cards={this.filterCards()} />
      </ContentContainerDiv>
    );
  }
}
