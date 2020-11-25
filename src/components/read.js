import React from 'react';
import axios from 'axios'; // importing axios - promise-based HTTP client

import { Movies } from './movies'; // importing component "Movies"
export class Read extends React.Component {

    // Constructor
    constructor(){
        super();
        // Must "bind" "this"
        this.ReloadData = this.ReloadData.bind(this);
    }

    // State holds the data of the movies JSON array
    // Hard coded movie details removed from array, instead an API is retrieved in componentDidMount()
    state = {
        movies: []
    };

    // Reload Page once ID is deleted - get latest movies
    ReloadData(){
        axios.get('http://localhost:4000/api/movies')
        .then(response =>{
            this.setState({ movies:response.data});
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    // API Retrieved
    // API from jsonblob replaced with my own - server.js
    // Front-end talking to Back-end
    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
        .then(response =>{
            this.setState({ movies:response.data});
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
                {/* Passes the ReloadData into Movies from read.js */}
                <Movies mymovies={this.state.movies} ReloadData={this.ReloadData}></Movies>
            </div>
        );
    }
}