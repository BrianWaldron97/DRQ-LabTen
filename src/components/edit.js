import React from 'react';
import axios from 'axios'; // axios imported

export class Edit extends React.Component {

    // Constructor for movie information inputs
    // bind - borrowing, "this" key-word sets to the provided value
    constructor(){
        super();
        this.onChangeMovieTitle = this.onChangeMovieTitle.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangeMoviePoster = this.onChangeMoviePoster.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // state - Title, Year and Poster 
        this.state = {
            Title:'',
            Year:'',
            Poster:''
        }
    }

    // Component Life Cycle Hook
    componentDidMount() {
        // Pulling ID out of URL
        console.log("Load "+this.props.match.params.id);
        axios.get('http://localhost:4000/api/movies/'+this.props.match.params.id)
        .then((response)=>{
            this.setState({
                // Values to update
                _id:response.data._id,
                Title: response.data.title,
                Year: response.data.year,
                Poster: response.data.poster
            })
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    // setting the movie Title
    onChangeMovieTitle(e){
        this.setState({
            Title:e.target.value
        })
    }

    // setting the movie Year
    onChangeMovieYear(e){
        this.setState({
            Year:e.target.value
        })
    }

    // setting the movie Poster
    onChangeMoviePoster(e){
        this.setState({
            Poster:e.target.value
        })
    }

    // alert to show the movie information has been added
    onSubmit(e){

        alert("Movie Edited " 
        + this.state.Title + " " + 
        this.state.Year + " " +
        this.state.Poster);

        // Object being sent up - title, year and poster are lowercase as they are set that way in the server.js
        const newMovie = {
            title: this.state.Title,
            year: this.state.Year,
            poster: this.state.Poster
        }
        // PUT request
        axios.put('http://localhost:4000/api/movies/'+this.state._id, newMovie)
        .then((res)=>{
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    // render method
    render() {

        return (
            <div>
                <h3>Hello from the Create component</h3>

                {/* Form that allows user to input the title, year and poster of a movie*/}
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Add Movie Title: </label>
                        <input
                        type="text"
                        className="form-control"
                        value={this.state.Title}
                        onChange={this.onChangeMovieTitle}
                        ></input>
                    </div>

                    <div className="form-group">
                        <label>Add Movie Year: </label>
                        <input
                        type="text"
                        className="form-control"
                        value={this.state.Year}
                        onChange={this.onChangeMovieYear}
                        ></input>
                    </div>

                    <div className="form-group">
                        <label>Add Movie Poster: </label>
                        <input
                        type="text"
                        className="form-control"
                        value={this.state.Poster}
                        onChange={this.onChangeMoviePoster}
                        ></input>
                    </div>

                    {/* Button (submit) that which calls onSubmit alert */}
                    <div>
                        <input
                        type="submit"
                        value="Edit Movie">                            
                        </input>
                    </div>


                </form>

            </div>
        );
    }

}