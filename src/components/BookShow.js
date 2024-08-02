import {useState} from'react';
import BookEdit from './BoodEdit';

import useBooksContext from '../hooks/use-books-context';

function BookShow({book}){

    const [showEdit, setShowEdit] = useState(false);

    const {deleteBookById} = useBooksContext();


    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleEditSubmit =() => {
        setShowEdit(false);
    };

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };

    let content = <h3>{book.title}</h3>
    if(showEdit){
        content = <BookEdit onSubmit = {handleEditSubmit} book={book}/>;
    }


    return (
        <div className="book-show">
            <img 
            alt= "books"
            src = {`https://picsum.photos/seed/${book.id}/200/300`}/>
            <div>{content}</div>
            <div className="actions">
            <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
        
    )
};
export default BookShow;