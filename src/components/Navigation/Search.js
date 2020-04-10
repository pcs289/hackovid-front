import React, { Component } from "react";

class SearchInput extends Component {
  state = {
    value: "",
  };

  render() {
    return (
      <div id="div-search-input">
        <img src="../../images/search-input.svg" alt="search-icon"></img>
        <input
          id="club-search-input"
          type="text"
          value={this.state.value}
          onChange={(ev) => this.setState({value: ev.target.value})}
          placeholder="Pots provar de trobar-ho aquí"
        />
        <span id="input-search-focus-border"></span>
      </div>
    );
  }
}

export default SearchInput;
