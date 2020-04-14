import React from 'react';
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
      <div className = 'mainContainer'>
        <h1>Github Usercards</h1>
        <GitCard 
          userImg = {this.state.user.avatar_url}
          name = {this.state.user.name}
          username = {this.state.user.login}
          link = {this.state.user.url}
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
          link = {user.url}
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