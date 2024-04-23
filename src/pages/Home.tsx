import BookList from '../layout/BookList'
import NavBar from '../components/NavBar'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/store'
import { showBooks } from '../features/books/booksSlice';
import { useNavigate } from 'react-router';
function Home() {
  const dispatch = useAppDispatch();
  const books = useAppSelector(state => state.books)
  const user = useAppSelector(state => state.user.user)
  const isSuccess = useAppSelector (state => state.user.isSuccess)
  const navigate = useNavigate();

  useEffect(() => {
     if(!isSuccess) {
       navigate('/login')    
    }
    dispatch(showBooks())  
  }, [books, isSuccess, dispatch])

  
  return (
    <>
        <NavBar />
        <h1 className='text-3xl mx-auto my-5 max-w-fit font-semibold tracking-wide'>Welcome, { user ? user.name : 'guest'}!</h1>
        <BookList />
    </>
  )
}

export default Home