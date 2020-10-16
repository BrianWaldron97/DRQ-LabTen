import React from 'react';
import '../App.css';

// New Component called "Header"
export class Header extends React.Component{

    render(){
        return(
            <div className="App">
                <h1>My Header in another component</h1>
            </div>
        );
    }
} // end of class