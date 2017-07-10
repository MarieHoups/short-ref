import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this._handleTextInput = this._handleTextInput.bind(this);
  }

  _handleTextInput(e) {
    this.props.filterTable(this.searchInput.value)
  }

  render() {
    return (
      <form>
        <input className="input-search" type="search" placeholder="search"
          value={this.props.textInput}
          ref={input => this.searchInput = input}
          onChange={this._handleTextInput}
        />
      </form>
      )
  }
}

export default Search;
