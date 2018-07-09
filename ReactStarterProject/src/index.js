import React, { Component } from "react";
import ReactDOM from "react-dom";
import Youtube from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const YOUTUBE_API_KEY = 'AIzaSyAru7semsTu3zH8Wkg3rJrhx4WoGFOZP7I';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            videos : [],
            selectedVideo : null
        };
        this.videoSearch('Anushka Sharma Jab Tak He Jaan');
    }

    videoSearch(term) {
        Youtube({ key: YOUTUBE_API_KEY, term }, (videos) => {
            this.setState( {
                videos,
                selectedVideo:videos[0]
             } );
        });
    }
    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term);
        }, 300);
        return (
            <div className= "container">
                <h2 className="search-bar">
                    Dhiren : Here is the Youtube Video Player ...
                </h2>
                <SearchBar onSearchTermChange = {videoSearch} />
                <VideoDetail video = {this.state.selectedVideo} />
                <VideoList  videos = {this.state.videos}
                            onVideoSelection = { selectedVideo => this.setState( {selectedVideo} ) }
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector(".container"));