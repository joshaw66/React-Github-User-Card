import React from 'react';
import axios from 'axios';
import GitCard from './GitCard'
import styled from 'styled-components';
import './App.css';

const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  margin-top: 5%;
  margin-bottom: 3%;
  font-size: 2.5rem;
  padding-bottom: 2%;
`

const FollowersTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  padding-bottom: 2%;
  font-size: 2rem;
  margin-top: 8%;
  margin-bottom: 1%;

`

const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  margin-left: 25%;
  border: solid grey;
  border-radius: 10px;
  margin-top: 3%;
  margin-bottom: 3%;
  background-color: lightgrey;
`

class App extends React.Component{
  constructor(){
    super();
    this.state = {
    user: '',
    followers: []
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/joshaw66")
   .then(res=>{
    console.log(res.data)
       this.setState({
           user:res.data
       })
   })
      .catch(err => console.log(err));
    axios
      .get("https://api.github.com/users/joshaw66/followers")
       .then(res=>{
           console.log(res.data)
           this.setState({
               followers:res.data
           })
       })
       .catch(err => console.log(err));
  }


  render(){
    return(
      
      <CardMain className = 'mainContainer'>
        <MainTitle>Github User-Cards</MainTitle>
        <GitCard 
          userImg = {this.state.user.avatar_url}
          name = {this.state.user.name}
          username = {this.state.user.login}
          link = {this.state.user.url}
          followers = {this.state.user.followers}
          />
          <FollowersTitle>My Followers:</FollowersTitle>
        {
        this.state.followers.map(user=>{
          return <GitCard 
          userImg = {user.avatar_url}
          name = {user.name}
          username = {user.login}
          link = {user.url}
          followers = {user.followers}
          />
        })
        }
      </CardMain>
    )
  }
}

export default App;