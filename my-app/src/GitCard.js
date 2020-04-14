import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
`

const ProfileImage = styled.div`

`

export default function GitCard(props){
  return(
      <Container>
          <img src = {props.userImg} alt={props.id}></img>
          <h1>{props.name}</h1>
          <h2>{props.username}</h2>
          <h3>{props.link}</h3>
          <h4>{props.followers}</h4>
          <h4>{props.following}</h4>
          <p>{props.bio}</p>
      </Container>
  )
}