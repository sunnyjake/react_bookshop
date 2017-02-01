import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import Page from './components/Page';
import {fetchContent} from './actions/pageActions'
import isEmpty from 'lodash/isEmpty'

// class App extends Component {
//
//   state = {
//     pages: null,
//     visiblePages: 5,
//     active: 1
//   };
//
//   componentWillMount(){
//     axios({
//       method: 'get',
//       url: '/api/campaign?page=1',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6XC9cL21pZHdpbnRlci1tYXAuY29tXC9hcGlcL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTQ4NTUwNzI4MiwiZXhwIjoxNDg2NzE2ODgyLCJuYmYiOjE0ODU1MDcyODIsImp0aSI6ImEyZDliNmE2MjQ1MjlmMWUyNDRjZWZjNGMwN2QxOGI3In0.5FV6Up3s6X__LW5qJVL7MdRnTkfOZLmBiwUCI4PjnPM'
//       }
//     })
//       .then(response => {
//         console.log(response);
//         // this.setState({pages: Math.ceil(response.data.campaign_array.total / response.data.campaign_array.to)});
//         this.setState({pages: response.data.campaign_array.total});
//         console.log(this.state.pages);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
//
//   clickHandler = (page) => {
//     if(page >= 1 && page <= this.state.visiblePages){
//       this.setState({active: page});
//       console.log(this.state.active);
//     }
//   };
//   clickPrev = () => {
//     if(this.state.active > 1){
//       this.clickHandler(this.state.active - 1);
//     }
//   };
//   clickNext = () => {
//     if(this.state.active < this.state.visiblePages){
//       this.clickHandler(this.state.active + 1);
//     }
//   };
//   render = () => {
//     let pages = [];
//     for(let i = 1; i <= this.state.visiblePages; i++){
//       pages.push(<li key={i}><Link activeClassName="active" to={'/pages/'+i} onCLick={this.clickHandler(i)}>{i}</Link></li>);
//     }
//
//     return (
//       <div className="App">
//         <Page page={this.state.selectedPage} />
//         <ul className="pagination list-unstyled">
//           <li>
//             <Link
//               to="/pages/1"
//               disabled={this.state.active === 1}
//               onClick={this.clickPrev}>&lt;</Link>
//           </li>
//           {
//             pages
//           }
//           <li><Link to={"/pages/"+this.state.pages}>&gt;</Link></li>
//         </ul>
//       </div>
//     );
//   }
// }
//
// export default App;

class App extends Component {
  // state = {
  //   active: 1
  // };



  render() {
    // console.log(this.props.pages.pagesData);

    return (
      <div className="App">
        <div className="nav">
          <ul className="list-unstyled list-inline">
            <li><Link to="/test">Test</Link></li>
            <li><Link to="/pages/1" onClick={() => this.handleClickItem(1)}>Pages</Link></li>
          </ul>
        </div>
        {
          this.props.children
        }
      </div>
    );
  }
}
export default App;

// const mapStateToProps = ({pages}) => {
//   return {pages}
// };
//
// //9ZJDigRrzD1sTBUdnvJW
// export default connect(mapStateToProps, {fetchContent})(App);
