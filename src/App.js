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
  state = {
    active: 1
  };

  componentWillUpdate(nextProps, nextState){
    console.log('this', this.props);
    console.log('next', nextProps);
    // if (this.props.params.page !== nextProps.params.page) {
    //   this.props.fetchContent(nextProps.params.page)
    //   this.setState({
    //     active: nextProps.params.page
    //   })
    // }

  }
  componentDidMount(nextProps) {
    // console.log(this.state.active);
    this.props.fetchContent(this.props.params.page);
  }

  handleClickItem = page => {
    // if (page >= 1 && page <= (!isEmpty(this.props.pages.pagesData) ? Math.ceil(this.props.pages.pagesData.campaign_array.total / this.props.pages.pagesData.campaign_array.per_page) : [])) {
    if (page >= 1 && page <= (!isEmpty(this.props.pages.pagesData) ? this.props.pages.pagesData.total : [])) {
      // this.setState({active: page});
      // console.log("test", page);
      this.props.fetchContent(page);
    }
  };

  handleClickPrev = (prev) => {
    if (prev === 1) {
      this.handleClickItem(1);
      return;
    }
    else if (prev > 1) {
      this.handleClickItem(this.state.active - 1);
    }
  };

  handleClickNext = (next) => {
    if (next === this.props.pages.pagesData.total) {
      this.handleClickItem(next);
      return;
    }
    if (this.state.active <= (!isEmpty(this.props.pages.pagesData) ? this.props.pages.pagesData.total : this.state.active-1)) {
      this.handleClickItem(this.state.active + 1);
    }
  };

  totalPages = () => {
    // const totalPages = !isEmpty(this.props.pages.pagesData) ? this.props.pages.pagesData.campaign_array.total : [];
    const totalPages = !isEmpty(this.props.pages.pagesData) ? this.props.pages.pagesData.total : 0;
    const items = [];

    // for (let i = this.state.active !== 1 ? this.state.active-1:this.state.active; i <= totalPages; i++) {
    for (let i = +this.props.pages.pagesData.id !== 1 ? +this.props.pages.pagesData.id-1 : +this.props.pages.pagesData.id; i <= totalPages; i++) {

      // if (i < this.state.active + 3) {
      if (i < +this.props.pages.pagesData.id + 3) {
        items.push(
          <li key={i}>
            <Link
              to={"/pages/" + i} type="number"
              // className={this.state.active === i ? 'active' : ''}
              className={this.props.pages.pagesData.id == i ? 'active' : ''}
              onClick={this.handleClickItem.bind(null, i)}>
              {i}
            </Link>
          </li>
        );
      }
      // else if (i === this.state.active + 3 && this.props.pages.pagesData.total > this.state.active+6) {
      else if (i === +this.props.pages.pagesData.id + 3 && this.props.pages.pagesData.total > +this.props.pages.pagesData.id+6) {
        items.push(
          <li key={i}>
            <span>
              ...
            </span>
          </li>
        );
      }
      // else if(i === this.state.active + 7){
      else if(i === +this.props.pages.pagesData.id + 7){
        items.push(
          <li key={i}>
            <Link
              to={"/pages/" + i}
              // className={this.state.active === i ? 'active' : ''}
              className={+this.props.pages.pagesData.id === i ? 'active' : ''}
              onClick={this.handleClickItem.bind(null, i)}>
              {i}
            </Link>
          </li>
        );
      }
    }
    return items;
  }

  render() {
    console.log(this.props.pages.pagesData);

    return (
      <div className="App">
        <div className="nav">
          <ul className="list-unstyled list-inline">
            <li><Link to="/test">Test</Link></li>
            <li><Link to="/pages/1" onClick={this.handleClickItem.bind(null, 1)}>Pages</Link></li>
          </ul>
        </div>
        <div id="content">
          {/* {!isEmpty(this.props.pages.pagesData) ? this.props.pages.pagesData.campaign_array.current_page : ''} */}
          {!isEmpty(this.props.pages.pagesData) ? this.props.pages.pagesData.currentPage : ''}
        </div>
        <ul className="pagination list-unstyled">
          <li>
            <Link
              to={"/pages/" + 1}
              // className={this.state.active === 1 ? 'hidden' : ''}
              className={+this.props.pages.pagesData.id === 1 ? 'hidden' : ''}
              onClick={this.handleClickPrev.bind(null, 1)}>
              &lt;&lt;
            </Link>
          </li>
          <li>
            <Link
              // to={"/pages/" + (this.state.active - 1)}
              to={"/pages/" + (+this.props.pages.pagesData.id - 1)}
              // className={this.state.active === 1 ? 'hidden' : ''}
              className={+this.props.pages.pagesData.id === 1 ? 'hidden' : ''}
              // onClick={this.handleClickPrev.bind(null, this.state.active-1)}>
              onClick={this.handleClickPrev.bind(null, +this.props.pages.pagesData.id-1)}>
              &lt;
            </Link>
          </li>
          {this.totalPages()}
          <li>
            <Link
              // to={'/pages/' + (this.state.active + 1)}
              to={'/pages/' + (+this.props.pages.pagesData.id + 1)}
              // className={this.state.active === this.props.pages.pagesData.total ? 'hidden' : ''}
              className={+this.props.pages.pagesData.id === this.props.pages.pagesData.total ? 'hidden' : ''}
              // onClick={this.handleClickNext.bind(null, this.state.active + 1)}>
              onClick={this.handleClickNext.bind(null, +this.props.pages.pagesData.id + 1)}>
              &gt;
            </Link>
          </li>
          <li>
            <Link
              to={'/pages/' + (this.props.pages.pagesData.total)}
              // className={this.state.active === this.props.pages.pagesData.total ? 'hidden' : ''}
              className={+this.props.pages.pagesData.id === this.props.pages.pagesData.total ? 'hidden' : ''}
              onClick={this.handleClickNext.bind(null, this.props.pages.pagesData.total)}>
              &gt;&gt;
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
// export default App;

const mapStateToProps = ({pages}) => {
  return {pages}
};

//9ZJDigRrzD1sTBUdnvJW
export default connect(mapStateToProps, {fetchContent})(App);
