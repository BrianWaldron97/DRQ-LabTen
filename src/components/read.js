import React from 'react';
import axios from 'axios'; // importing axios - promise-based HTTP client

import { Movies } from './movies'; // importing component "Movies"
export class Read extends React.Component {

    // State holds the data of the movies JSON array
    // Hard coded movie details removed from array, instead an API is retrieved in componentDidMount()
    state = {
        movies: []
    };

    // API Retrieved
    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
        .then(response =>{
            this.setState({ movies:response.data.Search});
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    // Render method
    render() {
        return (
            <div>
                <h3>Hello from the Read component</h3>
                {/* Passes the movies array into Movies from read.js */}
                <Movies mymovies={this.state.movies}></Movies>
            </div>
        );
    }
}