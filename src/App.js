import React from 'react';
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import './App.css';
import BookShelf from './bookShelf';
import SearchBooks from './searchBar'
import * as BooksAPI from './BooksAPI';

// TODO: delete this once done
console.log(BooksAPI);

class BooksApp extends React.Component {
    state = {
        bookList: [],
    }

    componentDidMount() {
        BooksAPI.getAll().then((bookList) => {
            this.setState({bookList})
        })
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <BookShelf bookList={this.state.bookList}/>
                        <div className="open-search">
                            <Link
                                to="/search"
                            > Add a book
                            </Link>
                        </div>
                    </div>
                )}/>
                <Route path="/search" component={SearchBooks}/>
            </div>
        )
    }
};

export default BooksApp;
