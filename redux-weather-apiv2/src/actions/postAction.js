import { FETCH_POSTS , NEW_POST } from './types';
export const fetchData = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => 
                dispatch({
                    type : FETCH_POSTS,
                    payload : posts
                })
            );
}

export const createData = (post) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json',
            },
            body:JSON.stringify(post)
        }).then(res => res.json())
        .then(data => dispatch({
            type : NEW_POST,
            payload : data
        }));
}