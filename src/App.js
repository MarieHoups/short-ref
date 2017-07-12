import React, { Component } from 'react';
import Checkbox from './components/Checkbox';
import Table from './components/Table';
import Search from './components/Search';
import AddShortcutForm from './components/AddShortcutForm';


import './App.css';
import mock from './sc-mock';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }

    this._filterTable = this._filterTable.bind(this);
  }

  componentWillMount() {
    this.data = mock;
    this.selectedTags = new Map(this.data.tags);
  }

  _filterTable(text) {
    this.setState({text});
  }

  _selectTag = (tag) => {
    this.selectedTags.has(tag[0])
    ? this.selectedTags.delete(tag[0])
    : this.selectedTags.set(...tag)
  }

  _addShortcut(shortcut) {
    console.log(shortcut)
  }

  render() {
    const { shortcuts, tags } = this.data;
    const { text } = this.state;
    return (
      <div className="app grid">
        <header>HEADER</header>
        <main className="">
          <Search filterTable={this._filterTable}/>
          <Table
            shortcuts={shortcuts} textInput={text}
            selectedTags={this.selectedTags}
          />
        </main>
        <div className="sidebar-grid">
          <AddShortcutForm addShortcut={this._addShortcut} />
          <section className="section-tags">
          {tags
            .map(t =>
              <Checkbox
                key={t}
                tag={t}
                textInput={text}
                selectTag={this._selectTag}
                filterTable={this._filterTable}
              />
            )
          }
            </section>
          </div>
          <footer>FOOTER</footer>
      </div>
    );
  }
}

export default App;
