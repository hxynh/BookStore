import BookList from '../layout/BookList'
import NavBar from '../components/NavBar'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/store'
import { reset, showBooks } from '../features/books/booksSlice';
import { useNavigate } from 'react-router';
function Home() {
  const dispatch = useAppDispatch();

  const {isError, isSuccess, message} = useAppSelector(state => state.user)
    const {user } = useAppSelector(state => state.user)
    const navigate = useNavigate()

    useEffect(() => {
        if(isError) {
            console.log("Please sign in to view books")
        }
        if(!user){
            navigate('/login')
            dispatch(reset())
        }
        if(isSuccess){
          dispatch(showBooks())
        }
    }, [user, navigate, isError, message, dispatch])
    
  return (
    <>
        <NavBar />
        <h1 className='text-3xl mx-auto my-5 max-w-fit font-semibold tracking-wide'>Welcome, { user ? user.name : 'guest'}!</h1>
        <BookList />
    </>
  )
}

export default Home