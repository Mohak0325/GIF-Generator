import React from "react";
import { useState , useEffect} from 'react';
import axios from 'axios';

const API_KEY = 'PI12WODuiucIaLqYuke5iK06n6Cop1yj';

function useGif(tag){
    const [gif, setGif] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchGif = async () => {
        try{
            setLoading(true);
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
            const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
            const imageSource = data.data.images.downsized_large.url;
            setGif(imageSource);
            setLoading(false);
        } 
        catch(error){
            console.log(error);
            setGif(null);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGif();
    }, []);

    return {gif, loading, fetchGif};
}

export default useGif;
