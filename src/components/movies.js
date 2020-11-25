import React from 'react';
import { MovieItem } from './movieItem'; // importing component "MovieItem"

export class Movies extends React.Component {

    render() {
        // for every object in the array, a new item is created (call back)
        // key is a unique identifier for each item
        return this.props.mymovies.map((movie)=> {
            return <MovieItem mymovie={movie} ReloadData={this.props.ReloadData} key={movie._id}></MovieItem>
        })
        
        //(
        //<div>
        //    <h3>Hello from Movies</h3>
        //    <MovieItem></MovieItem>
        //    {/* Accesses the values from the parent to the child, props */}
        //    {console.log(this.props.mymovies)}
        //</div>
        //);
    }
    
}