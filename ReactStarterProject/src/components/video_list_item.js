import React from 'react';

const VideoListItemOld = (props) => {
    return (
        <li> {props.video.snippet.title} </li>
    );
};

const VideoListItem = ({video, onVideoSelection}) => {
    let imageURL = video.snippet.thumbnails.default.url;
    let videoTitle = video.snippet.title;
    return (
        <li onClick = {() => onVideoSelection(video)} className = "list-group-item">
            <div className = "video-list media">
                <div className = "media-left">
                    <img className = "media-object" src={imageURL} />
                </div>
                <div className = "media-body">
                    <div className = "media-object">
                        {videoTitle}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;