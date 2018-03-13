import React, { Component } from 'react';
import BookShelfChanger from './bookShelfChanger';

class BookGrid extends Component {
    render() {
        return (
            <div>
                <ol className="books-grid">
                    {this.props.bookList.map((book)=> {
                        return ( book.shelf === this.props.id && 
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{
                                            width: 128,
                                            height: 193,
                                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                                        }}>
                                        </div>
                                        <BookShelfChanger book={book} />
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors}</div>
                                </div>
                            </li>
                        );})
                    }
                </ol>
            </div>
        );
    }
}

export default BookGrid;
