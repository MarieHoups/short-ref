import React, { Component } from 'react';

class Checkbox extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: true,
    };

    this._handleSelect = this._handleSelect.bind(this);
  }

  _handleSelect() {
    const { isChecked } = {...this.state};
    this.setState(prevState => ({isChecked: !prevState.isChecked}));
    this.props.selectTag(this.props.tagName);
    this.props.filterTable(this.props.textInput);
  }

  render() {
    const { tagName } = this.props;
    return (
      <label className="label-tags">
        <input type="checkbox"
          value={tagName}
          onChange={this._handleSelect}
          checked={this.state.isChecked}
        />
        <span>{tagName}</span>
      </label>
    )
  }
}

export default Checkbox;
