import React { Component } from 'react'

class  Book extends Component {
  constructor() {
    super(props);
  }
  let submitBook = (e) => {
    // alert("submitted");
    e.preventDefault();
    var input = {
      title: titleInput.value
    };
    alert("submitted");
    e.target.reset();
  }

  render(){
    let title;

    let books = this.props.books.map((b,i) => {
      return(
        <li key={i}>{b.title}</li>
      )
    });

    return(
      <div>
        <h3>Books</h3>
        <ul>
          {books}
        </ul>
        <div>
          <h3>Books form</h3>
          <form onSubmit={this.submitBook}>
            <input type="text" name="title" ref={node => titleInput = node}/>
            <input type="submit" value="Add book"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Book;
