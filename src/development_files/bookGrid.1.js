import React from 'react';
// import React, { Component } from 'react';
import BookShelfChanger from './bookShelfChanger';

let varBookGrid = (propBookList, propShelfID) => {
    return propBookList.map((book) => {
        if (book.shelf === propShelfID){
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
                            <BookShelfChanger book={book} />
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                    </div>
                </li>
            );
        }
        else {
            return false;
        }
    });
};

class BookGrid extends React.Component {
    render() {
        return (
            <div>
                <ol className="books-grid">
                    {varBookGrid(this.props.bookList, this.props.id)}
                    {console.log(this.props.theTest)}
                </ol>
            </div>
        );
    }
}

export default BookGrid;
