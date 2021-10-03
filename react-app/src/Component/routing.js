import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './Newspage/Home';
import post from './posts/post';
import postdetails from './posts/postdetails';
import profile from './Profile/profile';


const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/post" component={post} />
            <Route path="/post/:id" component={postdetails} />
            <Route path="/profile" component={profile} />
            <Footer year="2021" month="Dec." />
        </BrowserRouter>
    )
}

export default Routing;