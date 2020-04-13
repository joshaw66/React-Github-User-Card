import React from 'react';

export default function GitCard(props){
  return(
      <div>
          <img alt='profileImage' src = {props.userImg}/>
          <h1>{props.name}</h1>
          <h2>{props.username}</h2>
          <h3>{props.profile}</h3>
          <h4>{props.followers}</h4>
          <h4>{props.following}</h4>
          <p>{props.bio}</p>
      </div>
  )
}