import React from 'react';
import * as BooksAPI from './BooksAPI';

const bookStatus = [
    { status: "none-disable", title: "Move to...", key: 1 },
    { status: "currentlyReading", title: "Currently Reading", key: 2 },
    { status: "wantToRead", title: "Want to Read", key :3 },
    { status: "read", title: "Read", key: 4 },
    { status: "none", title: "None", key: 5 },
];

let varBookStatus = (bookStatusArray) => {
    return bookStatus.map ((book) => {
        if (book.status === "none-disable"){
            return <option value={book.status} disabled="disabled" key={book.key}>{book.title}</option>
        }
        else {
            return <option value={book.status} key={book.key}>{book.title}</option>
        }
    });
};

class BookShelfChanger extends React.Component {
    state = {
        shelfToChange: ''
    }

    componentWillUpdate() {
        BooksAPI.update(this.props.book, this.state.shelfToChange)
    }

    updateShelfChange = (shelfToChange) => {
        this.setState({shelfToChange: shelfToChange})
    }

    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={(e) => this.updateShelfChange(e.target.value)}>
                    {varBookStatus(bookStatus)};
                </select>
            </div>
        );
    }
};

export default BookShelfChanger;
