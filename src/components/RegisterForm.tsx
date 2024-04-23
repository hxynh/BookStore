import { useNavigate } from "react-router"
import { useAppDispatch, useAppSelector } from "../app/store";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { reset } from "../features/books/booksSlice";
import { register } from "../features/user/userSlice";


function RegisterForm() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {user, isSuccess, isError, message} = useAppSelector(state => state.user)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        if(isSuccess || user) {
            navigate('/')
        }
        dispatch(reset())
    }, [user, isSuccess, isError, navigate, dispatch])

    
    const handleRegister = (event:  React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        const fd = new FormData(event.currentTarget);
        const data = Object.fromEntries(fd.entries());

        if(data.password !== data.confirmPassword) {
            toast.error('Passwords do not match')
        } else {
            const userData = {
                name: data.name.toString(),
                username: data.username.toString(),
                password: data.password.toString()
            }
            dispatch(register(userData))
        }
    }

  return (
    <div className="max-w-[80%] md:max-w-[60%] lg:max-w-[50%] mx-auto my-4 px-10 py-8">
    <section className="mx-auto max-w-fit">
        <h1 className="text-5xl font-extrabold">Welcome</h1>
        <p className="text-[#828282]">Login to enjoy the world of Books!</p>
    </section>
    <form onSubmit={handleRegister} className="max-w-[90%] mx-auto">
        <label className="input input-bordered flex items-center gap-2 my-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input type="text" name="name" className="grow text-sm" placeholder="Enter your name" />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input type="text" name="username" className="grow text-sm" placeholder="Enter your username" />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" name="password" className="grow text-sm" placeholder="Enter your password" />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
            <input type="password" name="confirmPassword" className="grow text-sm" placeholder="Confirm your password" />
        </label>
        <button type="submit" className="btn mt-3 bg-primary hover:bg-secondary">Register</button>
    </form>
    </div>
  )
}

export default RegisterForm