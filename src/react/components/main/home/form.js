import React, { Component } from "react";
import { input } from "../../../../shared";
import { get } from "./get/index";
import { SearchContainer, Input, Button } from "../../../styles";

const localState = "Form";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { state, updateState } = this.props;
    event && event.preventDefault();
    const value = state[localState] && state[localState][input.name];
    get(value, updateState, localState);
  }

  render() {
    const { updateState, state } = this.props;
    const { name } = input;
    return (
      <SearchContainer onSubmit={this.handleSubmit}>
        <Input
          {...input}
          value={(state[localState] && state[localState][name]) || ""}
          onChange={e =>
            updateState({
              [localState]: {
                [name]: e.target.value,
                loading: null,
                error: null
              }
            })
          }
        />
        <Button type="submit" value={name} />
      </SearchContainer>
    );
  }
}