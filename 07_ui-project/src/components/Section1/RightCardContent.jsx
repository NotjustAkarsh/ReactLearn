import React from 'react'

const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-10 w-10 flex justify-center items-center text-xl font-semibold'>{props.id+1}</h2>
            <div>
                <p className='text-xl text-shadow-2xs leading-relaxed font-semibold text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deserunt libero expedita, distinctio ratione quos.</p>
                <div className='flex justify-between'>
                    <button style={{backgroundColor: props.color}} className='text-white font-medium px-7 py-3 rounded-full'>{props.tag}</button>
                    <button style={{backgroundColor: props.color}} className='text-white font-medium px-4 py-3 rounded-full'><i className='ri-arrow-right-line'></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
