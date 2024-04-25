import { useState } from "react"
import Modal from "../layout/Modal";
import BookForm from "./BookForm";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/store";  
import { logout} from "../features/user/userSlice";
import { reset } from "../features/user/userSlice";

function NavBar() {
    const [openAddModal, setOpenAddModal] = useState<boolean>(false);
    const user = useAppSelector(state => state.user.user)
    const dispatch = useAppDispatch()
    const navigate = useNavigate();

    const openModal = () => {
        setOpenAddModal(true);
    }

    const closeModal = () => {
        setOpenAddModal(false);
    }

    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }

  return (
    <>
        <div className="navbar bg-primary px-20">
        
        <div className="navbar-start">
            <Link to="/" className="text-xl uppercase mx-2">
                book<strong className="text-2xl">s</strong>tore
            </Link>
        </div>
        <div className="navbar-end">
            {/*Add button*/}
            {user && <button className="btn btn-ghost px-2"
                onClick={openModal}
            >
                <svg className='h-6 w-6' viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Add-Stroke</title> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Add-Stroke"> <rect id="Rectangle" fillRule="nonzero" x="0" y="0" width="24" height="24"> </rect> <circle id="Oval" stroke="#0C0310" strokeWidth="2" strokeLinecap="round" cx="12" cy="12" r="9"> </circle> <line x1="12" y1="9" x2="12" y2="15" id="Path" stroke="#0C0310" strokeWidth="2" strokeLinecap="round"> </line> <line x1="9" y1="12" x2="15" y2="12" id="Path" stroke="#0C0310" strokeWidth="2" strokeLinecap="round"> </line> </g> </g> </g></svg>
                    Add Book
            </button>}

            {/*Login/Logout button*/}
            <div className="dropdown dropdown-end">   
            <button tabIndex={0} className="btn btn-ghost px-2" onClick={handleLogout}
            >
                <svg fill="#000000" className='h-6 w-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Login"> <g> <path d="M20.944,18.432a2.577,2.577,0,0,1-2.729,2.5c-2.153.012-4.307,0-6.46,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.63a1.545,1.545,0,0,0-.969-1.471,3.027,3.027,0,0,0-1.061-.095H11.755a.5.5,0,0,1,0-1c2.225,0,4.465-.085,6.688,0a2.566,2.566,0,0,1,2.5,2.67Z"></path> <path d="M15.794,12.354a.459.459,0,0,0,.138-.312A.3.3,0,0,0,15.938,12a.29.29,0,0,0-.006-.041.455.455,0,0,0-.138-.313L12.125,7.978a.5.5,0,0,0-.707.707L14.234,11.5H3.492a.5.5,0,0,0,0,1H14.234l-2.816,2.815a.5.5,0,0,0,.707.707Z"></path> </g> </g> </g> </svg>
                {!user ? 'Login' : 'Logout'}
            </button>
            </div>
        </div>
    </div>
    <Modal isOpen={openAddModal} onClose={closeModal}>
        <h2 className="text-2xl mx-auto my-5 max-w-fit font-bold font-sans">Add New Book</h2>
        <BookForm closeModal={closeModal}  />
    </Modal>

    </>
  )
}

export default NavBar