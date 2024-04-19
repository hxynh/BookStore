import BookCard from "../components/BookCard"
import { useAppSelector } from "../app/store"

function BookList() {
    const booksList = useAppSelector((state) => state.books.books)
    
  return (
    <div className={`grid grid-cols-1 ${booksList.length === 0 ? 'max-w-[60%]': 'md:grid-cols-2 lg:grid-cols-3 max-w-[80%]'} gap-4  mx-auto mt-10 justify-items-center`}>
        {booksList.length === 0 && 
            <div role="alert" className="alert alert-info">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>No books available at the moment.</span>
        </div>
        }
        {booksList.length > 0 && 
            booksList.map ( book => 
                <BookCard key={book._id} book={book}/>
            )
        }
        

    </div>

  )
}

export default BookList