import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  &:hover{
    text-decoration: underline;
  }
`
//Is there a way abstract these components together?
const ActivTabDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  background-color: #fff;
  color: #333;
  border: 2px solid #333;

  &:hover{
    text-decoration: underline;
  }
`

const Tab = props => {
      
  if(props.selectedTab.toUpperCase() === props.tab.toUpperCase())
  {
    return (
      <ActivTabDiv onClick={() => {props.selectTabHandler(props.tab)}}>
        {props.tab.toUpperCase()}
      </ActivTabDiv>
    )
  }

  return (
    <TabDiv onClick={() => {props.selectTabHandler(props.tab)}}>
      {props.tab.toUpperCase()}
    </TabDiv>
  )
}

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func,
}

export default Tab;
