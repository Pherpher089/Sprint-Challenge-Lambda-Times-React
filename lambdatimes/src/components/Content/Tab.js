import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
      
  let className;
  if(props.selectedTab.toUpperCase() === props.tab.toUpperCase())
  {
    className = 'tab active-tab';
  }
  else{
    className = 'tab';
  }

  return (
    <div className={className} onClick={() => {props.selectTabHandler(props.tab)}}>
      {props.tab.toUpperCase()}
    </div>
  )
}

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  
}

export default Tab;
