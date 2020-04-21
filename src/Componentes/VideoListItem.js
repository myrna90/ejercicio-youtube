import React from 'react';

const VideoListIItem = ({video, onVideoSelect}) => {
   const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item" onClick={() => onVideoSelect(video)}>
            <div className="video-list media">
                <div className="media-left">
                <img src="" alt="" className="media-objet" src={imageUrl}/>
                </div>
                
                <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
}

export default VideoListIItem;