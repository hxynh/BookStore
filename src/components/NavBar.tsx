import { useState } from "react"
import Modal from "../layout/Modal";
import BookForm from "./BookForm";
import { useAppDispatch, useAppSelector } from "../app/store";
import { login, logout } from "../features/userSlice";
// import { useAppDispatch } from "../app/store";
// import { Book, addBook } from "../features/booksSlice";

function NavBar() {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const loginStatus = useAppSelector(state => state.user.loggedIn)
    const dispatch = useAppDispatch()

    const onOpenModal = () => {
        setModalIsOpen(true);
    }

    const onCloseModal = () => {
        setModalIsOpen(false);
    }

    const handleLogin = () => {
        if(loginStatus) {
            dispatch(logout())

        }else {
            dispatch(login("nancy"))
        }
    }

  return (
    <>
        <div className="navbar bg-primary">
        
        <div className="navbar-start">
            <a className="btn btn-ghost text-xl uppercase">book<strong>s</strong>tore</a>
        </div>
        <div className="navbar-end">
            <button className="btn btn-ghost px-2"
                onClick={onOpenModal}
            >
                <svg className='h-6 w-6' viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Add-Stroke</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Add-Stroke"> <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"> </rect> <circle id="Oval" stroke="#0C0310" stroke-width="2" stroke-linecap="round" cx="12" cy="12" r="9"> </circle> <line x1="12" y1="9" x2="12" y2="15" id="Path" stroke="#0C0310" stroke-width="2" stroke-linecap="round"> </line> <line x1="9" y1="12" x2="15" y2="12" id="Path" stroke="#0C0310" stroke-width="2" stroke-linecap="round"> </line> </g> </g> </g></svg>
                    Add Book
            </button>
                   
            <button className="btn btn-ghost px-2"
            onClick={handleLogin}>
                <svg fill="#000000" className='h-6 w-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Login"> <g> <path d="M20.944,18.432a2.577,2.577,0,0,1-2.729,2.5c-2.153.012-4.307,0-6.46,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.63a1.545,1.545,0,0,0-.969-1.471,3.027,3.027,0,0,0-1.061-.095H11.755a.5.5,0,0,1,0-1c2.225,0,4.465-.085,6.688,0a2.566,2.566,0,0,1,2.5,2.67Z"></path> <path d="M15.794,12.354a.459.459,0,0,0,.138-.312A.3.3,0,0,0,15.938,12a.29.29,0,0,0-.006-.041.455.455,0,0,0-.138-.313L12.125,7.978a.5.5,0,0,0-.707.707L14.234,11.5H3.492a.5.5,0,0,0,0,1H14.234l-2.816,2.815a.5.5,0,0,0,.707.707Z"></path> </g> </g> </g></svg>
                {!loginStatus ? 'Login' : 'Logout'}
            </button>
        </div>
    </div>
    <Modal isOpen={modalIsOpen} onClose={onCloseModal}>
        <h2>Add New Book</h2>
        <BookForm closeModal={onCloseModal}  />
    </Modal>

    </>
  )
}

export default NavBar