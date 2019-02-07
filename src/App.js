import React, { Component } from 'react';
import "isomorphic-fetch";
import Article from '../src/components/Article';

class App extends Component {

    render() {
        return (
            <Article />
        );
    }
}

export default App;