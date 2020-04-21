import React from 'react';
import VideoListItem from './VideoListItem';
import VideoListIItem from './VideoListItem';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListIItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag} 
        video={video}/>
    })
    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
    }

export default VideoList;