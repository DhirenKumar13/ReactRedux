import React from 'react';
import axios from 'axios';

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=Dhiren1993&&Anushka1987"

export const FETCH_TYPE = 'fetch_blogs';

export function fetchBlogs() {

    const response = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return({
        type : FETCH_TYPE,
        payload : response
    });
}