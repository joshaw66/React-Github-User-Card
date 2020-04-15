import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  
`
const Name = styled.div`
  font-size: 1.5rem;
  margin: 3%;
`

export default function GitCard(props){
  return(
      <Container>
          <img src = {props.userImg} alt={props.id}></img>
          <Name>{props.name}</Name>
          <h2>{props.username}</h2>
          <h3>{props.link}</h3>
      </Container>
  )
}