import React, { Component } from 'react';
import "./Search.css";

class Search extends Component {
    constructor() {
        super()
        this.state = {
            title: 'React App',
            keyword: 'User Text Here'
        }
    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({ keyword: event.target.value ? event.target.value : 'User Text Here' })
        this.props.userText(event.target.value)

    }

    render() {
        return (
            <div>
                <header>
                    <hr />
                    <div className="logo"><h3>{this.state.title}</h3></div>
                    <center>
                        <div className="input">
                            <input onChange={this.handleChange} placeholder="Text" />
                        </div>
                        <div><h5>{this.state.keyword}</h5></div>
                    </center>
                    <hr />
                </header>
            </div>

        )
    }

}

export default Search;
