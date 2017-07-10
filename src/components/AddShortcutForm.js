import React, { Component } from 'react';

class AddShortcutRef extends Component {
  createShortcut(e) {
    e.preventDefault();
    const shortcut = {
    description: this.description.value,
    shortcutKey: this.shortcutKey.value,
    appName: this.appName.value,
    category: this.category.value
  };
  this.props.addShortcut(shortcut);
}

  render() {
    return (
      <form className="form-shortcut" onSubmit={(e) => this.createShortcut(e)}>
        <label className="label-new-sc" htmlFor="">
          <input className="input-shortcut" type="text" placeholder="Description" required
            ref={input => this.description = input}
          />
        </label>
        <label className="label-new-sc">
          <input className="input-shortcut" type="text" placeholder="Keys" required
            ref={input => this.shortcutKey = input}/>
        </label>
        <label className="label-new-sc">
          <input className="input-shortcut" type="text" placeholder="App name" required
            ref={input => this.appName = input}/>
        </label>
        <label className="label-new-sc">
          <input className="input-shortcut" type="text" placeholder="Category"
            ref={input => this.category = input}/>
        </label>
        <button type="submit">Add shortcut</button>
      </form>
      )
  }
}

export default AddShortcutRef;
