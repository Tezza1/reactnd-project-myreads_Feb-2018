import React from 'react';
import {Link} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelfChanger from './bookShelfChanger'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'

const searchTerms = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']

let searchValue = false

class SearchBooks extends React.Component {
    state = {
        query: '',
        bookList: []
    }

    componentWillUpdate() {
        searchValue = searchTerms.some((elem) =>{
            return elem === this.state.query
        })

        if(searchValue){
            BooksAPI.search(this.state.query).then((bookList) => {
                this.setState({bookList})
            })
        }
    }

    updateQuery = (query) => {
        this.setState({query: query.trim()})
    }

    render () {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(e) => this.updateQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.query !== '' && (
                            this.state.bookList.map ((book) => {
                                return(
                                    <li key={book.id}>
                                        <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                                                }}>
                                                </div>
                                                <BookShelfChanger book={book}/>
                                            </div>
                                            <div className="book-title">{book.title}</div>
                                            <div className="book-authors">{book.authors}</div>
                                        </div>
                                    </li>
                                );
                            })
                        )}
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchBooks
