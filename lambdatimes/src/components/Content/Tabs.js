import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TabsDiv = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`
const TopicsDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`
const TitleSpan = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`
const Tabs = props => {
  return (
    <TabsDiv>
      <TopicsDiv>
        <TitleSpan>TRENDING TOPICS:</TitleSpan>
        {props.tabs.map(tab=>(
          <Tab tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler}/>
        ))}
      </TopicsDiv>
    </TabsDiv>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object),
}
export default Tabs;
