import React from 'react';
import './App.css';
import axios from 'axios';
import GitCard from './GitCard'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
    user: '',
    followers: []
    };
  }

  componentPage(){
    axios
    .get('https://api.github.com/users/joshaw66')
    .then(res1=>{
      axios
      .get(res1.data.followers_url)
      .then(res2=>{
        this.setState({
          user: res1.data,
          followers: res2.data
        })
      })
    })
  }

  render(){
    return(
      <div className = 'main div'>
        <h1>Github Usercards</h1>
        <GitCard 
          userImg = {this.state.user.avatar_url}
          name = {this.state.user.name}
          username = {this.state.user.login}
          profile = {this.state.user.url}
          followers = {this.state.user.followers}
          following = {this.state.user.following}
          bio = {this.state.user.bio}
          />
          <h2>My Followers</h2>
        {
        this.state.followers.map(user=>{
          return <GitCard 
          userImg = {user.avatar_url}
          name = {user.name}
          username = {user.login}
          profile = {user.url}
          followers = {user.followers}
          following = {user.following}
          bio = {user.bio}
          />
        })
        }
      </div>
    )
  }
}
export default App;