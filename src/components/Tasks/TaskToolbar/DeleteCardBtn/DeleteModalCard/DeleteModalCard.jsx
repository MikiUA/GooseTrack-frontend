
const DeleteModalCard = ({ onClose, handleDelete, id }) => {
    
    const deleteTask = () => {
        handleDelete(id);
    }

    return (
        <>
            <h1>Do you really want to delete this task?</h1>
            <div >
                <button onClick={deleteTask}>
                Delete
                </button>
                <button onClick={onClose}>
                Cancel
                </button>
            </div>
        </>
    )
}

export default DeleteModalCard