import React from "react";
import ReactDOM from "react-dom";
import TextareaAutosize from "react-textarea-autosize";
import {
  Divider,
  Container,
  Form,
  Header,
  Message,
  Segment
} from "semantic-ui-react";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    
    this.setState({value: event.target.value});  
  }
  
    handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Form>
        <Form.Field
        control={TextareaAutosize}
        label="About"
        placeholder="Tell us more about you..."
        onChange={e => this.setState({ value: e.target.value })}
        useCacheForDOMMeasurements
        value={this.state.value}
        />

        <Form.Button
        content="Clear"
        onClick={() => this.setState({ value: "" })}
        />
        <h2>{this.state.value}</h2>
    </Form>
    );
  }
}
export default PostForm