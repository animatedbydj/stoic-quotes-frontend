import React, { useEffect, useState } from "react";
import Quote from "./Quote";
function Quotes() {
  const [pageCount, setPageCount] = useState(1);
  const [isLoaded, setisLoaded] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [authorQuery, setAuthorQuery] = useState("");
  const URL = `https://stoicquotesapi.com/v1/api/quotes${authorQuery}?page=${currentPage}`;
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      fetch(URL)
        .then((response) => response.json())
        .then((body) => {
          setQuotes([...body.data]);
          setPageCount(body.last_page);

          setisLoaded(true);
        })
        .catch((error) => console.error("Error", error));
    };
    fetchQuotes();
  }, [setPageCount, currentPage, setisLoaded, isLoaded]);

  const handlePageChange = (e) => {
    setisLoaded(false);
    setAuthorQuery(e.target.value);

    setcurrentPage(1);
  };
  var pagebuttons = [];
  for (let i = 1; i < pageCount; i++) {
    pagebuttons.push(
      <button key={i} onClick={() => setcurrentPage(i)} className='px-6 mx-2'>
        {i}
      </button>
    );
  }
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div>
      <h1 className='text-2xl text-center mb-6'>
        Quotes from ancient stoic philospohers. You filter by author.
      </h1>

      <select
        value={authorQuery}
        onChange={handlePageChange}
        className='text-black font-bold text-xl mx-auto block py-2 px-4'
      >
        <option value=''>All Quotes - Select Author</option>
        <option value='/marcus%20aurelius'>Marcus Aurelius</option>
        <option value='/seneca'>Seneca</option>
        <option value='/epictetus'>Epictetus</option>
        <option value='/cato'>Cato</option>
        <option value='/zeno'>Zeno</option>
      </select>

      <ul className='quotesList'>
        {quotes.map((quote) => (
          <Quote id={quote.id} body={quote.body} author={quote.author} />
        ))}
      </ul>
      <div className='paginationButtons w-1/2 mx-auto flex justify-center my-16'>
        {isLoaded ? <>{pagebuttons}</> : <div>Nothing to display</div>}
      </div>
      <button
        className='text-6xl text-center block ml-auto mr-32 mb-6 flex flex-col justify-center'
        onClick={() => scrollToTop()}
      >
        ^<span className='text-xl block'>Back To Top</span>
      </button>
    </div>
  );
}

export default Quotes;
