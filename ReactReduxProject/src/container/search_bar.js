import React,{ Component } from 'react';

export default class SearchBar extends Component {e

    constructor(props) {
        super(props);
        this.state = {
            term : ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            term:event.target.value
        });
        console.log('State returned ', this.state.term);
    };

    onFormSubmit(event) {
        event.preventDefault();
    };
    render() {
        return (
            <form  onSubmit={this.onFormSubmit} className="input-group">
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