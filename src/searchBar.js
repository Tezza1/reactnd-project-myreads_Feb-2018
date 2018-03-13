import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookShelfChanger from './bookShelfChanger';

class SearchBooks extends Component {
    state = {
        query: '',
        bookList: []
    }
    
    searchValue = false
    
    searchTerms = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS']
    
    capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    updateQuery = (query) => {
        this.setState({query: query.trim()});
    }

    render () {
        if (this.state.query) {
            this.searchValue = this.searchTerms.some((elem) =>{
                return elem === this.capitalize(this.state.query);
            });

            if(this.searchValue){
                BooksAPI.search(this.state.query).then((bookList) => {
                    this.setState({bookList});
                });
            }
        }

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
                                                <BookShelfChanger book={book} onChange={this.changeBookShelf}/>
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

export default SearchBooks;
