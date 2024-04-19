import BookList from '../layout/BookList'
import NavBar from '../components/NavBar'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/store'
import { showBooks } from '../features/books/booksSlice';
function Home() {
  const dispatch = useAppDispatch();
  const books = useAppSelector(state => state.books)
  
  useEffect(() => {
    dispatch(showBooks())  
  }, [books, dispatch])

  return (
    <>
        <NavBar />
        <h1 className='text-3xl mx-auto my-5 max-w-fit font-semibold tracking-wide'>Welcome, Nancy!</h1>
        <BookList />
    </>
  )
}

export default Home