import React from 'react';
import '../App.css';

// "content", "footer" and "header" ie: The components are snippets of the UI
// May be laid out in anyway way you see fit
// Allows the developer to change the content of the page without refreshing the page - very responsive
// New Component called "Content"
export class Content extends React.Component{

    render(){
        return(
            <div className="App">
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
} // end of class