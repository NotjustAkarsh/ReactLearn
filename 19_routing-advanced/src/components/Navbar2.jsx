import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const navigate = useNavigate()

    return (
        <div className='py-2 px-5 bg-cyan-800 text-white'>
            <button onClick={() => {
                navigate('/')
            }
            } className='bg-amber-500 font-bold rounded px-8 py-4 m-2 cursor-pointer active:scale-95' >Return to HomePage</button>

            <button onClick={() => {
                navigate(-1)
            }
            } className='bg-amber-500 font-bold rounded px-8 py-4 m-2 cursor-pointer active:scale-95' >Back</button>
        </div>
    )
}

export default Navbar2
