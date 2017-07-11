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
    this.props.selectTag(this.props.tag);
    this.props.filterTable(this.props.textInput);
  }

  render() {
    const { tag, color } = this.props;
    return (
      <div>
        <input type="checkbox"
          value={tag}
          id={tag[0]}
          onChange={this._handleSelect}
          checked={this.state.isChecked}
        />
        <label htmlFor={tag[0]} className="label-tags" style={{color: tag[1]}}>
          <span className="label-tags-text">{tag[0]}</span>
        </label>
      </div>
    )
  }
}

export default Checkbox;
