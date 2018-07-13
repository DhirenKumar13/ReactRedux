import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/postAction';

class comments extends Component {

    componentWillMount (){
        this.props.fetchData();
    }

    componentWillReceiveProps (nextProps) {
        if(nextProps.newComments) {
            this.props.comments.unshift(nextProps.newComments);
        }
    }
  render() {
      const totalComments = this.props.comments.map((comment) => {
        return ( <div key={comment.id}>
                    <h2>{comment.title}</h2>
                    <p>{comment.body}</p>
            </div>
        )
      });
     return (
       <div>
         <h1>Dhiren Your Comments Are :</h1>
         { totalComments }
       </div>
     )
  }
}

function mapStateToProps(state) {
    return {
        comments : state.posts.items,
        newComments : state.posts.item
    }
};

export default connect(mapStateToProps , {fetchData})(comments);