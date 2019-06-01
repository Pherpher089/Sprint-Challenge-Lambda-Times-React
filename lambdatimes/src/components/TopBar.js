import React from 'react';
import styled from 'styled-components';

const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`
const ContainerDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`
const ContainerLeftDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`
const ContainerLeft_Span = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`
const ContainerCenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`
const ContainerCenter_Span = styled.span`
  cursor: pointer;
  margin-right: 5%;

  &:last-child{
    margin-right: 0;
  }

  &:hover{
    text-decoration: underline;
  }
`
const ContainerRightDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`
const ContainerRight_Span = styled.span`
  cursor: pointer;
`
const TopBar = () => {
  return (
    <TopBarDiv>
      <ContainerDiv>
        <ContainerLeftDiv>
          <ContainerLeft_Span>TOPICS</ContainerLeft_Span><ContainerLeft_Span>SEARCH</ContainerLeft_Span>
        </ContainerLeftDiv>
        <ContainerCenterDiv>
          <ContainerCenter_Span>GENERAL</ContainerCenter_Span><ContainerCenter_Span>BROWNBAG</ContainerCenter_Span><ContainerCenter_Span>RANDOM</ContainerCenter_Span><ContainerCenter_Span>MUSIC</ContainerCenter_Span><ContainerCenter_Span>ANNOUNCEMENTS</ContainerCenter_Span>
        </ContainerCenterDiv>
        <ContainerRightDiv>
          <ContainerRight_Span>LOG IN</ContainerRight_Span>
        </ContainerRightDiv>
      </ContainerDiv>
    </TopBarDiv>
  )
}

export default TopBar;