import { useAppDispatch } from "../app/store";
import { Book, addBook, editBook } from "../features/booksSlice";
import { useState } from "react";


type formProp = {
    closeModal: () => void,
    book?: Book
}

function BookForm({closeModal, book}: formProp) {
    const dispatch = useAppDispatch();
    const [values, setValues] = useState(book ? book : {id: "", name: "", category: "", price: 0, img:"", description: ""})
    
    const handleEdit =  (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues({...values,[event.target.name] : event.target.value});
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(book) {
            dispatch(editBook(values))
            closeModal();
        }
        else {
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
            dispatch(addBook(book))
        }
        closeModal()
    }
  return (
    <form onSubmit={handleSubmit} className="mt-6">
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
        <input name="price" type="number" step="0.01" className="grow" placeholder="Price" required value={values.price} onChange={ handleEdit}/>
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
  )
}

export default BookForm