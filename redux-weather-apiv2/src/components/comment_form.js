import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createData } from '../actions/postAction';

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "title" : '',
            "body" : ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        const post = {
            title : this.state.title,
            body : this.state.body
        }
        this.props.createData(post);
    }
  render() {
    return (
      <div>
        <h1>Dhiren Create a from here..</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Title : </label>
                <br/>
                <input value= {this.state.title} type="text" name="title" onChange={this.onChange}/>
            </div>
            <div>
            <br/>
                <label>Comment Here : </label>
                <br/>
                <textarea value= {this.state.body} name="body" onChange={this.onChange}/>
            </div>
            <br/>
            <button type="submit">SUBMIT</button>
            <br/>
        </form>
      </div>
    )
  }
}

export default connect(null, {createData})(CommentForm);