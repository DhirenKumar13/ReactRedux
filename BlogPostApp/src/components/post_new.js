import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

class NewPost extends Component {

  renderTextFields(field) {
    return (
      <div className="form-group">
        <label>{field.label} :</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    )
  }

  renderTextAreaFields(field) {
    return (
      <div  className="form-group">
        <label>{field.label} :</label>
        <textarea
          rows="5"
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    );
  }

  onSubmit(values) {
    console.log('Values from Form are ', values);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <div className="text-xs-right" >
          <Link className="btn btn-primary" to="/">
            Back To Blogs ..
          </Link>
        </div>
          <form onSubmit = {handleSubmit(this.onSubmit.bind(this))} >
            <Field name="title" component={this.renderTextFields} label="Title" />
            <Field name="category" component={this.renderTextFields} label="Categories" />
            <Field name="description" component={this.renderTextAreaFields} label="Description" />
            <button type="submit" className="btn btn-success">SUBMIT</button>
          </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};
  if (!values.title || values.title.length < 3) {
    errors.title = "Please enter a title with at least 3 characters"
  }
  if (!values.category) {
    errors.category = "Please enter a category at least you can add multiple also"
  }
  if (!values.description) {
    errors.description = "Please enter a description"
  }
  return errors;
};

export default reduxForm({
  validate,
  form: 'NewBlogsForm'
})(NewPost);