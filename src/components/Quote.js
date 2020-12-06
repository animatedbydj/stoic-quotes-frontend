function Quote(props) {
  return (
    <li
      className='w-10/12 md:w-1/2 mx-auto mt-20 bg-white p-6 md:p-10 text-black'
      key={props.id}
    >
      <h1 className='font-span text-2xl md:text-3xl tracking-wide'>
        "{props.body}"
      </h1>
      <p className='text-lg md:text-xl mt-8 ml-auto mr-8 w-1/2 text-right'>
        - {props.author}
      </p>
    </li>
  );
}

export default Quote;
