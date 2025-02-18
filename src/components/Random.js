import React from 'react';
import Spinner from './Spinner';
import useGif from '../Hook/useGif';

const Random = () => {
    const {gif, loading, fetchGif} = useGif();

    return (
        <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='sm:text-sm md:text-lg lg:text-xl  2xl:text-2xl mt-[15px] uppercase underline font-bold'>A Random Gif</h1>

            {loading ? <Spinner/> : <img width="450" height="450" className='w-[450px] h-[350px]' src={gif} alt='Random Gif'/>}
            <button 
                onClick={() => fetchGif()}
                className='w-10/12 bg-yellow-500 sm:text-sm md:text-lg lg:text-lg 2xl:text:lg py-2 rounded-lg mb-[20px]'
            >
                Generate
            </button>
        </div>
    )
}

export default Random;