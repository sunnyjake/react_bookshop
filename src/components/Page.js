import React, {Component} from 'react';

class Page extends Component{
  render(){
    console.log(this.props.route.test);
    console.log(this.props);
    return(
      <h1>Page {this.props.params.page}</h1>
    )
  }
}

export default Page;