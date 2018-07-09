import React, { Component } from 'react';

/* 
const SearchBar = () => {
    return <input />;
}; */

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onSearchTermChange(event.target.value)} />
                <br />
                Current search term is : {this.state.term}
            </div>
        )
    };

    onSearchTermChange(term) {
        this.setState({ term });
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;