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
    const [username, setUsername] = useState<string>("");
    const dispatch = useAppDispatch()

    const onOpenModal = () => {
        setModalIsOpen(true);
    }

    const onCloseModal = () => {
        setModalIsOpen(false);
    }

    const handleName = (event : React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handleLoginStatus = () => {
        if(loginStatus) {
            dispatch(logout())
        }
        else {
                dispatch(login(username))
                setUsername("")
        }
    }

  return (
    <>
        <div className="navbar bg-primary px-20">
        
        <div className="navbar-start">
            <a className="text-xl uppercase mx-2 ">book<strong className="text-2xl">s</strong>tore</a>
        </div>
        <div className="navbar-end">
            <button className="btn btn-ghost px-2"
                onClick={onOpenModal}
            >
                <svg className='h-6 w-6' viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Add-Stroke</title> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Add-Stroke"> <rect id="Rectangle" fillRule="nonzero" x="0" y="0" width="24" height="24"> </rect> <circle id="Oval" stroke="#0C0310" strokeWidth="2" strokeLinecap="round" cx="12" cy="12" r="9"> </circle> <line x1="12" y1="9" x2="12" y2="15" id="Path" stroke="#0C0310" strokeWidth="2" strokeLinecap="round"> </line> <line x1="9" y1="12" x2="15" y2="12" id="Path" stroke="#0C0310" strokeWidth="2" strokeLinecap="round"> </line> </g> </g> </g></svg>
                    Add Book
            </button>

            <div className="dropdown dropdown-end">   
            <button tabIndex={0} className="btn btn-ghost px-2"
            onClick={loginStatus ? handleLoginStatus : () => {} }>
                <svg fill="#000000" className='h-6 w-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Login"> <g> <path d="M20.944,18.432a2.577,2.577,0,0,1-2.729,2.5c-2.153.012-4.307,0-6.46,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.63a1.545,1.545,0,0,0-.969-1.471,3.027,3.027,0,0,0-1.061-.095H11.755a.5.5,0,0,1,0-1c2.225,0,4.465-.085,6.688,0a2.566,2.566,0,0,1,2.5,2.67Z"></path> <path d="M15.794,12.354a.459.459,0,0,0,.138-.312A.3.3,0,0,0,15.938,12a.29.29,0,0,0-.006-.041.455.455,0,0,0-.138-.313L12.125,7.978a.5.5,0,0,0-.707.707L14.234,11.5H3.492a.5.5,0,0,0,0,1H14.234l-2.816,2.815a.5.5,0,0,0,.707.707Z"></path> </g> </g> </g></svg>
                {!loginStatus ? 'Login' : 'Logout'}
            </button>
            
            {!loginStatus && <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                <div className="card-body bg-slate-300 p-5">
                <span className="font-bold text-lg">Enter your name</span>
                <input name="username" type="text" className="input items-center" value={username || ""} onChange={handleName} />
                <div className="card-actions">
                    <button onClick={handleLoginStatus} className="btn btn-primary btn-sm btn-block">Login</button>
                </div>
                </div>
            </div>}
            </div>
        </div>
    </div>
    <Modal isOpen={modalIsOpen} onClose={onCloseModal}>
        <h2 className="text-2xl mx-auto my-5 max-w-fit font-bold font-sans">Add New Book</h2>
        <BookForm closeModal={onCloseModal}  />
    </Modal>

    </>
  )
}

export default NavBar