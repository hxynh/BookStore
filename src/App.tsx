import './App.css'
import { useAppSelector } from './app/store'
import NavBar from './components/NavBar'
import BookList from './layout/BookList'

function App() {
  const name = useAppSelector(state => state.user.name)
  return (
    <div className='relative'>
      <NavBar />
      <h1 className='text-3xl mx-auto my-5 max-w-fit font-bold font-sans'>Welcome, {name}!</h1>
      <BookList />
    </div>
  )
}

export default App
