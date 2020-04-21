import React, { Component } from 'react';
import _ from 'lodash';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import YTSearch from 'youtube-api-search';
import VideoDetail from './VideoDetail';

const API_KEY = 'AIzaSyCR0aT8ZvE2DgluWIPHc3Z8cbXx5kW7nE8';

class Principal extends Component {
    constructor(props) {
        super(props);
        this.state={
            videos: [],
            selectedVideo: null
        }  
        this.videoSearch('surfboards') 
    }
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
            videos: videos,
            selectedVideo: videos[0]
            });
          })
    }
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}/>
            </div>
            
        )
    }
}

export default Principal;