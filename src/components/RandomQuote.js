import { useEffect, useState } from "react";
import axios from "axios";
import marcusaureliusimg from "../img/marcusaurelius.png";
import senecaimg from "../img/seneca.png";
import epictetusimg from "../img/epictetus.png";
import catoimg from "../img/cato.png";
import zenoimg from "../img/zeno.png";
function RandomQuote() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const fetchQuote = async () => {
      const { data } = await axios.get(
        "http://localhost:8000/api/quotes/random"
      );

      setQuote(data);
    };
    fetchQuote();
  }, []);

  return (
    <div className='w-8/12 mx-auto mt-2 md:mt-32'>
      <div className='quote'>
        <h1 className='font-span text-4xl md:text-6xl'>"{quote.body}"</h1>
        <p className='text-2xl md:text-4xl mt-8 ml-auto w-1/2 text-right'>
          - {quote.author}
        </p>

        {quote.author_id === 1 ? (
          <img src={marcusaureliusimg} className='mx-auto' alt='' />
        ) : quote.author_id === 2 ? (
          <img src={senecaimg} className='mx-auto' alt='' />
        ) : quote.author_id === 3 ? (
          <img src={epictetusimg} className='mx-auto' alt='' />
        ) : quote.author_id === 4 ? (
          <img src={catoimg} className='mx-auto' alt='' />
        ) : quote.author_id === 5 ? (
          <img src={zenoimg} className='w-3/12 md:w-1/12 mx-auto' alt='' />
        ) : null}
      </div>
    </div>
  );
}

export default RandomQuote;
