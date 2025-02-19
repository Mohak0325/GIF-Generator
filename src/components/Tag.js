import React from 'react';
import { useState } from 'react';
import useGif from '../Hook/useGif';
import Spinner from './Spinner';

const Tag = () => {
    const [tag, setTag] = useState('Love');

    const {gif, loading, fetchGif} = useGif(tag);

    return (
        <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] hover:bg-blue-600 transition-all duration-200'>
            <h1 className='sm:text-sm md:text-lg lg:text-xl  2xl:text-2xl mt-[15px] uppercase underline font-bold text-white'>Random {tag} Gif</h1>
            {loading ? <Spinner/> : <img width="450" height="450" className='w-[450px] h-[350px] rounded-md shadow-lg' src={gif} alt='Random Gif'/>}

            <input type="text"
             placeholder='Enter a tag'
             className='w-10/12 bg-white sm:text-sm md:text-lg lg:text-lg 2xl:text:lg py-2 rounded-lg mb-[3px] px-4 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-200 text-center placeholder:text-center'
             value={tag}
             onChange={(e) => setTag(e.target.value)}
              />
            <button 
                onClick={() => fetchGif()}
                className='w-10/12 bg-yellow-500 sm:text-sm md:text-lg lg:text-lg 2xl:text:lg py-2 rounded-lg mb-[20px] hover:bg-yellow-600 transform hover:scale-105 transition-all duration-200 text-white font-semibold shadow-md'
            >
                Generate
            </button>
        </div>
    )
}

export default Tag;