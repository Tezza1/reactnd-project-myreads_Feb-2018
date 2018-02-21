import React from 'react';
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import './App.css';
import BookShelf from './bookShelf';
import SearchBooks from './searchBar'
import * as BooksAPI from './BooksAPI';

// TODO: fixup ReadME
// TODO: Regexp for searchBar
// TODO: BookShelfChanger -> remove state, move component will update to App and upDateSheflChanger
// Returns a Promise which resolves to a JSON object containing the response data of the POST request

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
                <Route path="/search" render={() => (
                    <SearchBooks bookList={this.state.bookList}/>
                )}/>
            </div>
        )
    }
};

export default BooksApp;
