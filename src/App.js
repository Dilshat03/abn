import React from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import HomePage from "./components/HomePage";
import Pages from "./components/Pages";
import Footer from "./components/Footer";
// import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";

const App = () => {
    return (
        <div>
            <Header />
            <HomePage />
            <Pages />
            <Form />
            <Footer />
        </div>
    );
};

export default App;