import React, { Component } from 'react';
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
  state = {
    active: 1
  };

  componentDidMount(){
    this.props.fetchContent(this.state.active);
  }


  handleClickItem = page => {
    // if (page >= 1 && page <= (!isEmpty(this.props.pages.pagesData) ? Math.ceil(this.props.pages.pagesData.campaign_array.total / this.props.pages.pagesData.campaign_array.per_page) : [])) {
    if (page >= 1 && page <= (!isEmpty(this.props.pages.pagesData) ? this.props.pages.pagesData.total : [])) {
      this.setState({ active: page });
      console.log("test", page);
      this.props.fetchContent(page);
    }
  };

  handleClickPrev = () => {
    if (this.state.active > 1) {
      this.handleClickItem(this.state.active - 1);
    }
  };

  handleClickNext = () => {
    if (this.state.active <= (!isEmpty(this.props.pages.pagesData) ? Math.ceil(this.props.pages.pagesData.campaign_array.total / this.props.pages.pagesData.campaign_array.per_page) : [])) {
      this.handleClickItem(this.state.active + 1);
    }
  };

  getPageContent = () => {
    console.log(this.props.getPageContent());
  };

  totalPages = () => {
    // const totalPages = !isEmpty(this.props.pages.pagesData) ? this.props.pages.pagesData.campaign_array.total : [];
    const totalPages = !isEmpty(this.props.pages.pagesData) ? this.props.pages.pagesData.total : [];
    const items = [];

    for (let i = this.state.active; i <= totalPages; i++) {
      if(i < this.state.active+5){
        items.push(
          <li key={i}><Link
            to={"/pages/"+i}
            type="number"
            className={this.state.active === i ? 'active' : ''}
            onClick={this.handleClickItem.bind(null, i)}>
            {i}
          </Link>
          </li>
        );
      }
      else if(i === 5){
        items.push(
          <li key={i}>
            <span>
              ...
            </span>
          </li>
        );
      }
    }
    return items;
  }

  render() {
    console.log(this.props.pages.pagesData);
    // console.log(this.state.pagesFromState);
    // const totalPages = !isEmpty(this.props.pages.pagesData) ? Math.ceil(this.props.pages.pagesData.campaign_array.total / this.props.pages.pagesData.campaign_array.per_page) : [];
    // const totalPages = !isEmpty(this.props.pages.pagesData) ? this.props.pages.pagesData.campaign_array.total : [];
    // console.log(totalPages);

    // const items = [];
    //
    // for (let i = 1; i <= totalPages; i++) {
    //   if(i < 5){
    //     items.push(
    //       <li key={i}><Link
    //         to={"/pages/"+i}
    //         type="number"
    //         className={this.state.active === i ? 'active' : ''}
    //         onClick={this.handleClickItem.bind(null, i)}>
    //         {i}
    //       </Link>
    //       </li>
    //     );
    //   }
    //   else if(i === 5){
    //     items.push(
    //       <li key={i}>
    //         <span>
    //           ...
    //         </span>
    //       </li>
    //     );
    //   }
    // }

    // const content = [];
    // for(let i = 0; i < )

    return (
      <div className="App">
        <div id="content">
          {/* {!isEmpty(this.props.pages.pagesData) ? this.props.pages.pagesData.campaign_array.current_page : ''} */}
          {!isEmpty(this.props.pages.pagesData) ? this.props.pages.pagesData.currentPage : ''}
        </div>
        <ul className="pagination list-unstyled">
          <li><Link
            to={"/pages/"+(this.state.active-1)}
            type="prev"
            label="Previous Page"
            className={this.state.active === 1 ? 'hidden' : ''}
            onClick={this.handleClickPrev}>
            &lt;
          </Link>
          </li>
          {this.totalPages()}
          <li><Link
            to={'/pages/'+(this.state.active+1)}
            type="next"
            label="Next Page"
            className={this.state.active === this.state.pagesFromState ? 'hidden' : ''}
            onClick={this.handleClickNext}>
            &gt;
          </Link>
          </li>
        </ul>
      </div>
    );
  }
}
// export default App;

const mapStateToProps = ({pages}) => {
  return {
    pages
  }
};


export default connect(mapStateToProps, {fetchContent})(App);
