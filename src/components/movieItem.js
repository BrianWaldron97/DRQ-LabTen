import React from 'react';
import Card from 'react-bootstrap/Card'; // when using a card, you have to import this
import Button from 'react-bootstrap/Button'; // importing button
import axios from 'axios'; // importing axios - http client

export class MovieItem extends React.Component {

    // Constructor
    constructor(){
        // Invoke parent constructor
        super();

        // Must "bind" "this"
        this.DeleteMovie = this.DeleteMovie.bind(this);
    }

    // DeleteMovie Method
    DeleteMovie(e){
        // Prevents firing on start
        e.preventDefault();

        // URL of where we want to delete (note extra '/' at end of movies) - creating new URL 
        axios.delete('http://localhost:4000/api/movies/'+this.props.mymovie._id)
        .then(()=>{
            this.props.ReloadData(); // Passing method all the way from read.js
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                {/* Displaying each movie */}
                {/* <h3> {this.props.mymovie.Title}</h3>
                <p>{this.props.mymovie.Year}</p>
                <img src={this.props.mymovie.Poster} width="200" height="300"></img> */}

                <Card>
                    <Card.Header>{this.props.mymovie.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.mymovie.poster} width="200" height="300"></img>
                            <footer className="blockquote-footer">
                                {this.props.mymovie.year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Button variant="danger" onClick={this.DeleteMovie}>Delete</Button>
                </Card>

            </div>
        );
    }
}