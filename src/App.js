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
    this.selectedTags = new Set();
    for (let tag of this.data.tags) this.selectedTags.add(tag)
  }

  _filterTable(text) {
    this.setState({text});
  }

  _selectTag = (tag) => {
    this.selectedTags.has(tag)
    ? this.selectedTags.delete(tag)
    : this.selectedTags.add(tag)
  }

  _addShortcut(shortcut) {
    console.log(shortcut)
  }

  render() {
    const { shortcuts, tags } = this.data;
    const { text } = this.state;
    return (
      <div className="app">
        <Search filterTable={this._filterTable}/>
        <main className="main-grid">
          <div className="sidebar-grid">
            <AddShortcutForm addShortcut={this._addShortcut} />
            <section className="section-tags">
            {tags
              .map(t =>
                <Checkbox
                  key={t}
                  tagName={t}
                  textInput={text}
                  selectTag={this._selectTag}
                  filterTable={this._filterTable}
                />
              )
            }
            </section>
          </div>
          <Table
            shortcuts={shortcuts} textInput={text}
            selectedTags={this.selectedTags}
          />
        </main>
      </div>
    );
  }
}

export default App;
