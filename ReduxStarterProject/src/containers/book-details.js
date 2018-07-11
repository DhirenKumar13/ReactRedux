import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetails extends Component {

    renderBook(book) {
        if (!book) {
            return (
            <div className="container">
                    NOTE ====>>>>> Select a book to get started
            </div>
            );
        }else {
            return (
                <div className="container">
                    Title : {book.title}
                    <br/>
                    Author : {book.author}
                </div>
            );
        }
    }
    render() {
            return (
                <div className="well">
                    {this.renderBook(this.props.selectedBook)}
                </div>
            );
    }
}

function mapStateToProps(state) {
    return ({
        selectedBook: state.selectedBook
    });
}

export default connect(mapStateToProps)(BookDetails);