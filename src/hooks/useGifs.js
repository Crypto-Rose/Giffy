import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

function useGifs({ keyword } = { keyword: null }) {
    const [gifs, setGifs] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      setLoading(true);
      const keywordToUse = keyword || localStorage.getItem('lastKeyword')
      console.log('keywordToUse', keywordToUse);
      getGifs({ keyword:keywordToUse }).then((response) => {
        setGifs(response);
        setLoading(false);
        localStorage.setItem('lastKeyword', keyword)
      });
    }, [keyword]);

    return {loading, gifs}
}

export default useGifs;
