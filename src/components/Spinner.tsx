import  { MoonLoader}  from 'react-spinners'
type Props = {
    isLoading?: boolean
}

function Spinner({isLoading = true}: Props) {
  return (
    <>
        <div>
            <MoonLoader
                color = 'gray'
                loading = {isLoading}
                aria-label = 'Loading Spinner'
                data-testid = 'loader'
                className='fixed top-[50%] left-[50%] translate-x-[-1/2] translate-y-[-1/2]'
                />
        </div>
    </>
  )
}

export default Spinner