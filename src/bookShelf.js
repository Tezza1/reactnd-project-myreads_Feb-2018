import React from 'react';
import BookGrid from './bookGrid'

class BookShelf extends React.Component {
    render() {

        const shelfCategories = [
            { id: "currentlyReading", title: "Currently Reading", key: 1},
            { id: "wantToRead", title: "Want to Read", key: 2},
            { id: "read", title: "Read", key: 3}
        ];

        return (
            <div className="list-books-content">
                {shelfCategories.map((category) => {
                    return (
                        <div className="bookshelf" key={category.key}>
                            <h2 className="bookshelf-title">{category.title}</h2>
                            <div className="bookshelf-books">
                                <BookGrid id={category.id} bookList={this.props.bookList} />
                            </div>
                        </div>
                    );
                })};
            </div>
        );
    }
};

export default BookShelf;
