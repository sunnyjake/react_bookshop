import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router';

class App extends Component {

  state = {
    pages: []
  };

  componentWillMount(){
    axios({
      method: 'get',
      url: '/api/campaign?page=1',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6XC9cL21pZHdpbnRlci1tYXAuY29tXC9hcGlcL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTQ4NTUwNzI4MiwiZXhwIjoxNDg2NzE2ODgyLCJuYmYiOjE0ODU1MDcyODIsImp0aSI6ImEyZDliNmE2MjQ1MjlmMWUyNDRjZWZjNGMwN2QxOGI3In0.5FV6Up3s6X__LW5qJVL7MdRnTkfOZLmBiwUCI4PjnPM'
      }
    })
      .then(response => {
        console.log(response);
        this.setState({pages: Math.ceil(response.data.campaign_array.total / response.data.campaign_array.to)});
        console.log(this.state.pages);

      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {

    let pages = [];
    for(let i = 1; i <= this.state.pages; i++){
      pages.push(<li key={i}><Link activeClassName="active" to={'/pages/'+i}>Page {i}</Link></li>);
    }

    return (
      <div className="App">
        {
          this.props.children
        }
        <ul className="pagination list-unstyled">
          {
            pages
          }
        </ul>
      </div>
    );
  }
}

export default App;
