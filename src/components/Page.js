import React, {Component} from 'react';
import {connect} from 'react-redux';
import {testFun} from '../actions/testPage'

class Page extends Component{
  render(){
    // console.log(this.props.route.test);
    // console.log(this.props);
    return(
      <h1>Page {this.props.page}</h1>
    )
  }
}

// export default Page;

const mapStateToProps ({page}) => {
  return {page}
};

export default connect(mapStateToProps, {testFun})(Page);
