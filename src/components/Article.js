import React, { Component } from 'react';
import "isomorphic-fetch";
import Page from './Page';

const API = 'https://raw.githubusercontent.com/bbc/news-coding-test-dataset/master/data/';

class App extends Component {
    constructor(props) {
        super(props);

        this.changePage = this.changePage.bind(this)

        this.state = {
            articleNumber: 1, //default is the 1st article
            article: null,
            isLoading: false,
            error: null, //When an error occurs gives to the end-user an indication about the error
        };
    }

    componentDidMount() {
        this.loadArticle();
    }

    /**
     * display new article until you reach the last one
     * @param  prevProps 
     * @param  prevState 
     */
    componentDidUpdate(prevProps, prevState) {
        if(prevState.articleNumber !== this.state.articleNumber && this.state.articleNumber < 6) {
            this.loadArticle();
        }
    }

    /**
     * method that is fetching each article
     */
    loadArticle() {
        this.setState({ isLoading: true });
        const articleUrl = API + `article-${this.state.articleNumber}.json`
        fetch(articleUrl)
            //throwing an error when the response doesn’t match the expected data
            .then(response => {
                if (response.ok) {
                return response.json();
                } else {
                throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ article: data, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false })); 
    }

    /**
     * change page according to article
     * @param pageNumber 
     */
    changePage(pageNumber) {
        this.setState({ articleNumber: pageNumber});
    }

    render() {
        const { articleNumber, article, isLoading, error } = this.state;

        if (!article) {
            return <p>No data to display yet ...</p>
        }

        //show the error message as conditional rendering again
        if (error) {
          return <p>{error.message}</p>
        }

        //display a loading indicator 
        if (isLoading) {
          return <p>Loading ...</p>
        }

        return (
            <React.Fragment>
                <Page article={article} changePage={this.changePage} articleNumber={articleNumber}/>
            </React.Fragment>
        );
    }
}

export default App;
