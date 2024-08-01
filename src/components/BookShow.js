import { useState} from'react';
import BookEdit from './BoodEdit';

function BookShow({book, onDelete, onEdit}){

    const [showEdit, setShowEdit] = useState(false);

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleEditSubmit =(id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
    };

    const handleDeleteClick = () => {
        onDelete(book.id);
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