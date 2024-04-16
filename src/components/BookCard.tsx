import { useState } from "react";
import { useAppDispatch } from "../app/store";
import { Book, deleteBook, editBook } from "../features/booksSlice"
import Modal from "../layout/Modal";

type IBook = {
  book: Book;
}
function BookCard(props: IBook) {
  const dispatch = useAppDispatch()
  const [openEditModal, setOpenEditModal] = useState<boolean>(false)
  const [values, setValues] = useState(props.book)

  const openModal = () => {
    setOpenEditModal(true)
  }
  
  const closeModal = () => {
    setOpenEditModal(false)
  }

  const handleEdit =  (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues({...values,[event.target.name] : event.target.value});
  }

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(editBook(values))
    closeModal();
  }

  const handleDelete = () => {
    dispatch(deleteBook(props.book.id))
  }

  return (
    <>
    <div className="w-80 h-80 bg-slate-100 rounded-xl" >
        {/*Delete button */}
        <div className="flex justify-end">
        <button className="btn btn-circle btn-outline btn-sm m-0 hover:bg-slate-300 mt-1 mr-1"
          onClick={handleDelete}>
            <svg className='h-5 w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
         </button>
        </div>
        <div onClick={openModal}>
          <figure className="mx-auto h-40 w-40" >
              <img src={props.book.img === "" ? "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/832px-No-Image-Placeholder.svg.png" : props.book.img } alt="Shoes" className="rounded-xl max-h-full object-fill" />
          </figure>
          <div className="items-center p-5">
              <h2 className="card-title justify-center pb-2">{props.book.name}</h2>
              <p>{props.book.category}</p>
              <p>{props.book.price}</p>
          </div>
        </div>
    </div>
    <Modal isOpen={openEditModal} onClose={closeModal}>
    <h2>Add New Book</h2>
    <form onSubmit={handleSave} className="mt-6">
        <label className="input input-bordered flex items-center gap-2 mb-4">
        *Name:
            <input name="name" type="text" className="grow" placeholder="Name" required value={values.name} onChange={ handleEdit}/>
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-4">
        *Category:
            <input name="category" type="text" className="grow" placeholder="Category" 
            required value={values.category} onChange={ handleEdit}/>
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-4">
        *Price:
            <input name="price" type="text" className="grow" placeholder="Price" required value={values.price} onChange={ handleEdit}/>
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-4">
        Image:
            <input name="img" type="text" className="grow" placeholder="Image URL" value={values.img} onChange={ handleEdit}/>
        </label>
        <label className="form-control">
            Description:
            <textarea name="description" className="textarea textarea-bordered h-24" placeholder="Description" value={values.description} onChange={handleEdit}/>
        </label>
        <button className="btn mt-3">continue</button>
    </form>
  </Modal>
  </>
  )
}

export default BookCard