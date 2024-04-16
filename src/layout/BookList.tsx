import BookCard from "../components/BookCard"
import { useAppSelector } from "../app/store"

function BookList() {
    const booksList = useAppSelector((state) => state.books.books)
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[80%] mx-auto mt-10 justify-items-center">
        {
            booksList.map ( book => 
                <BookCard book={book}/>
            )
        }
        

    </div>

  )
}

export default BookList