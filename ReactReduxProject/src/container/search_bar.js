import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            term: event.target.value
        });
    };

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    };
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    value={this.state.term}
                    onChange={this.handleChange}
                    className="form-control"
                    placeholder="Enter your city to get the forecast ..."
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">SUBMIT</button>
                </span>
            </form>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);