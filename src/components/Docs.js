import React from "react";

function Docs() {
  return (
    <section className='w-full md:w-10/12 mx-auto pb-32'>
      <h1 className='text-3xl'>The Stoic Quotes API</h1>
      <div className='text-black p-4 mt-4'>
        <h2 className='text-2xl font-bold bg-white p-4'>
          Get quotes from ancient stoic philosophers.
        </h2>
        <p className='bg-white p-4 mt-6 mb-20 '>
          <strong>GET</strong> request to{" "}
          <a
            href='https://stoicquotesapi.com/v1/api/quotes'
            className='font-bold breakLink'
          >
            https://stoicquotesapi.com/v1/api/quotes
          </a>{" "}
          returns 10 stoic quotes in json format with pagination links, current
          page, & total records.
        </p>

        <h2 className='text-2xl font-bold bg-white p-4 mt-6'>
          Get 10 more quotes.
        </h2>
        <p className='bg-white p-4 mt-6 mb-20'>
          <strong>GET</strong> request to{" "}
          <a
            href='https://stoicquotesapi.com/v1/api/quotes?page=2'
            className='breakLink'
          >
            https://stoicquotesapi.com/v1/api/quotes<strong>?page=2</strong>
          </a>{" "}
          returns 10 more quotes.
        </p>
        <h2 className='text-2xl font-bold bg-white p-4 mt-6'>
          Get quotes by author.
        </h2>
        <p className='bg-white p-4 mt-6 mb-20'>
          Pass the authors name to get quotes by that author. There are 5
          ancient stoics in our database. Their names are{" "}
          <strong>Marcus Aurelius, Seneca, Epictetus, Cato, & Zeno.</strong>
          <br />
          <strong>GET</strong> request to{" "}
          <a
            href='https://stoicquotesapi.com/v1/api/quotes/seneca'
            className='breakLink'
          >
            https://stoicquotesapi.com/v1/api/quotes/<strong>seneca</strong>
          </a>{" "}
          returns 10 quotes from Seneca.
        </p>
        <h2 className='text-2xl font-bold bg-white p-4 mt-6'>
          Get random quote.
        </h2>
        <p className='bg-white py-4 px-2 mt-6'>
          <strong>GET</strong> request to{" "}
          <a
            href='https://stoicquotesapi.com/v1/api/quotes/random'
            className='breakLink'
          >
            https://stoicquotesapi.com/v1/api/quotes/<strong>random</strong>
          </a>{" "}
          will return a single random quote.
        </p>
      </div>
    </section>
  );
}

export default Docs;
