import { useState } from "react";
import { useAppDispatch } from "../app/store";
import { Book, removeBook } from "../features/books/booksSlice"
import Modal from "../layout/Modal";
import BookForm from "./BookForm";

type IBook = {
  book: Book;
}
function BookCard(props: IBook) {
  const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  });
  const dispatch = useAppDispatch()
  const [openEditModal, setOpenEditModal] = useState<boolean>(false)

  const openModal = () => {
    setOpenEditModal(true)
  }
  
  const closeModal = () => {
    setOpenEditModal(false)
  }

  const handleDelete = () => {
    dispatch(removeBook(props.book._id))
  }

  return (
    <>
    <div className="w-80 h-80 bg-slate-100 rounded-xl" >
        {/*Delete button */}
        <div className="flex justify-end">
        <button className="btn btn-circle btn-outline btn-sm m-0 hover:bg-slate-300 mt-1 mr-1"
          onClick={handleDelete}>
            <svg className='h-5 w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
         </button>
        </div>
        <div className="hover:cursor-pointer" onClick={openModal}>
              <img src={props.book.img === "" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png" : props.book.img } alt="Shoes" className="rounded-xl mx-auto h-40 w-30" />
          <div className="items-center p-5">
              <h2 className="card-title justify-center pb-2">{props.book.name}</h2>
              <p>Category: {props.book.category}</p>
              <p>Price: {formatter.format(props.book.price)}</p>
          </div>
        </div>
    </div>
    <Modal isOpen={openEditModal} onClose={closeModal}>
    <h2 className="text-3xl mx-auto my-5 max-w-fit font-bold font-sans">Update <i>{props.book.name}</i> book</h2>
    <BookForm closeModal={closeModal} book={props.book}/>
  </Modal>
  </>
  )
}

export default BookCard