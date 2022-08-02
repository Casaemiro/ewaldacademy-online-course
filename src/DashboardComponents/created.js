import './created.css'
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebaseconfig';

const Created = ({ prog, id }) => {
    const deletePost = async (id) => {
        const userPost = doc(db, "posts", id)
        await deleteDoc(userPost).then(console.log('Deleted'))
    }
    return (
        <div className="created m-2 p-2">
            <div className="nameEvt col-5">{prog}</div>
            <a href='dashboard'><div className="bg-warning mx-1 px-2 round" onClick={() => { deletePost(id) }}>delete</div></a>
            <div className="bg-success mx-1 px-2 round">edit</div>
        </div>
    );
}

export default Created;