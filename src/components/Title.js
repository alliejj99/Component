import { Component } from "../core/modules";
import messageStore from "../store/message";

export default class Title extends Component {
  constructor() {
    super({ tagName: "h1" });
  }
  render() {
    this.el.textContent = `Title: ${messageStore.state.message}`;
  }
}
