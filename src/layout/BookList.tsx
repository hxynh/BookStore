import BookCard from "../components/BookCard"

function BookList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[80%] mx-auto mt-10 justify-items-center">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />

    </div>

  )
}

export default BookList