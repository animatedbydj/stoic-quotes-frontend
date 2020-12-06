import React from "react";
import RandomQuote from "./RandomQuote";
import { Link } from "react-router-dom";
function Home() {
  return (
    <section>
      <RandomQuote />
      <div className='cta-section w-9/12 mx-auto flex flex-wrap justify-evenly mt-20 pb-20'>
        <p className='mb-6'>
          Refresh this page / press <kbd>F5</kbd> for a random quote from a
          stoic philosopher.
        </p>
        <div className='cta-buttons w-1/2 flex flex-wrap justify-evenly'>
          <Link to='/docs' className='btn mb-2 md:mb-0'>
            Documentation
          </Link>
          <Link to='/quotes' className='btn btn-primary'>
            All Quotes
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
