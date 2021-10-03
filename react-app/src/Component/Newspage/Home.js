import React, { Fragment, Component } from 'react';
import Search from './SearchBar';
import JSON from './db.json';
import NewsList from './NewsList';

class Home extends Component {
    constructor() {
        super()

        this.state = {
            news: JSON,
            filtered: JSON
        }
    }

    filterNews = (keyword) => {
        const output = this.state.news.bookings.filter((data) => {
            return data.name.indexOf(keyword) > -1
        });
        this.setState({ filtered: {bookings: output} })


    }

    render() {
        console.log(this.state.news);
        return (
            <div>
                <Fragment>
                    <Search userText={(userinput) => { this.filterNews(userinput) }} />
                    <NewsList newsdata={this.state.filtered} />
                    
                </Fragment>
            </div>

        )
    }
}

export default Home;
