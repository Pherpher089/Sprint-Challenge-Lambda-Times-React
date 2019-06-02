import React from 'react';
import Content from './Content/Content.js';
import Header from './Header.js';
import TopBar from './TopBar.js';
import styled from 'styled-components'

const AppDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif; 
`

class ContentPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <AppDiv>
                <TopBar />
                <Header />
                <Content />
            </AppDiv>
        );
    }
}

export default ContentPage;