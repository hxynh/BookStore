import { useState } from "react"
import Modal from "../layout/Modal";
import { useAppDispatch } from "../app/store";
import { Book, addBook } from "../features/booksSlice";

function NavBar() {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const onOpenModal = () => {
        setModalIsOpen(true);
    }

    const onCloseModal = () => {
        setModalIsOpen(false);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const data = (Object.fromEntries(formData.entries()))
        const {name, category, price, img, description} = data
        const book: Book = {
            id: '002',
            name: name.toString(),
            category: category.toString(),
            price: Number(price),
            img: img.toString(),
            description: description.toString()
        }
        console.log("Data: ", data.name)
        dispatch(addBook(book))
        onCloseModal()
    }

  return (
    <>
        <div className="navbar bg-primary">
        
        <div className="navbar-start">
            <a className="btn btn-ghost text-xl uppercase">book<strong>s</strong>tore</a>
        </div>
        <div className="navbar-end">
            <button className="btn btn-ghost"
                onClick={onOpenModal}
            >
                <svg className='h-6 w-6' viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Add-Stroke</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Add-Stroke"> <rect id="Rectangle" fill-rule="nonzero" x="0" y="0" width="24" height="24"> </rect> <circle id="Oval" stroke="#0C0310" stroke-width="2" stroke-linecap="round" cx="12" cy="12" r="9"> </circle> <line x1="12" y1="9" x2="12" y2="15" id="Path" stroke="#0C0310" stroke-width="2" stroke-linecap="round"> </line> <line x1="9" y1="12" x2="15" y2="12" id="Path" stroke="#0C0310" stroke-width="2" stroke-linecap="round"> </line> </g> </g> </g></svg>
                    Add Book
            </button>
                   
            <button className="btn btn-ghost btn-circle">
                <svg className="h-6 w-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 201.865 201.865" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M200.65,105.892l-21.763-19.709V39.168c0-2.026-1.643-3.665-3.665-3.665h-19.158 c-0.973,0-1.908,0.383-2.598,1.074c-0.691,0.691-1.077,1.625-1.066,2.602l0.05,23.059l-47.466-42.993 c-1.389-1.256-3.482-1.267-4.889-0.032L1.247,106.278c-1.263,1.109-1.61,2.924-0.841,4.42c0.759,1.485,2.434,2.28,4.066,1.908 l21.971-4.96v67.758c-0.021,0.591-0.032,3.647,2.18,5.944c0.981,1.009,2.738,2.222,5.569,2.222c5.282,0,49.027-0.054,49.027-0.054 c2.029,0,3.661-1.643,3.665-3.665l0.057-40.509c-0.036-0.472,0.05-1.671,0.537-2.205c0.329-0.351,1.034-0.433,1.557-0.433h20.353 c0.913,0,2.147,0.147,2.781,0.805c0.698,0.716,0.687,1.961,0.676,2.154l-0.093,40.058c0,0.97,0.379,1.904,1.07,2.598 c0.687,0.687,1.632,1.081,2.598,1.081h48.003c3.264,0,5.268-1.378,6.363-2.527c2.559-2.663,2.473-6.313,2.459-6.564V106.54 l24.111,5.64c1.643,0.39,3.307-0.39,4.091-1.868C202.225,108.834,201.896,107.019,200.65,105.892z M159.744,42.836h11.817v36.705 l-11.76-10.651L159.744,42.836z M170.409,98.344c-1.081-0.258-2.24,0-3.11,0.698c-0.873,0.694-1.389,1.754-1.389,2.874v72.486 c0,0.394-0.143,1.12-0.419,1.403c-0.225,0.222-0.762,0.251-1.07,0.251h-44.328l0.079-36.129c0.032-0.44,0.218-4.366-2.609-7.401 c-1.356-1.435-3.858-3.153-8.181-3.153H89.029c-3.654,0-5.83,1.557-7.011,2.859c-2.516,2.788-2.473,6.524-2.409,7.573 l-0.057,36.383c-10.629,0.011-41.017,0.05-45.366,0.05c-0.132,0-0.215-0.007-0.268-0.007c-0.007,0-0.018,0-0.025,0 c-0.068-0.147-0.118-0.426-0.118-0.676v-72.493c0-1.113-0.515-2.169-1.381-2.867c-0.873-0.694-2.015-0.948-3.096-0.712 l-12.433,2.806l85.613-75.406l49.986,45.269v0.218h0.236l32.51,29.447L170.409,98.344z"></path> </g> </g></svg>
            </button>
            <button className="btn btn-ghost btn-circle">
                <svg fill="#000000" className='h-6 w-6' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Login"> <g> <path d="M20.944,18.432a2.577,2.577,0,0,1-2.729,2.5c-2.153.012-4.307,0-6.46,0a.5.5,0,0,1,0-1c2.2,0,4.4.032,6.6,0,1.107-.016,1.589-.848,1.589-1.838V5.63a1.545,1.545,0,0,0-.969-1.471,3.027,3.027,0,0,0-1.061-.095H11.755a.5.5,0,0,1,0-1c2.225,0,4.465-.085,6.688,0a2.566,2.566,0,0,1,2.5,2.67Z"></path> <path d="M15.794,12.354a.459.459,0,0,0,.138-.312A.3.3,0,0,0,15.938,12a.29.29,0,0,0-.006-.041.455.455,0,0,0-.138-.313L12.125,7.978a.5.5,0,0,0-.707.707L14.234,11.5H3.492a.5.5,0,0,0,0,1H14.234l-2.816,2.815a.5.5,0,0,0,.707.707Z"></path> </g> </g> </g></svg>
            </button>
        </div>
    </div>
    <Modal isOpen={modalIsOpen} onClose={onCloseModal}>
        <h2>Add New Book</h2>
        <form onSubmit={handleSubmit} className="mt-6">
            <label className="input input-bordered flex items-center gap-2 mb-4">
            *Name:
                <input name="name" type="text" className="grow" placeholder="Name" required />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-4">
            *Category:
                <input name="category" type="text" className="grow" placeholder="Category" 
                required/>
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-4">
            *Price:
                <input name="price" type="text" className="grow" placeholder="Price" required />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-4">
            Image:
                <input name="img" type="text" className="grow" placeholder="Image URL" />
            </label>
            <label className="form-control">
                Description:
                <textarea name="description" className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
            </label>
            <button className="btn mt-3">continue</button>
        </form>
    </Modal>

    </>
  )
}

export default NavBar