import React from 'react'
import { books } from '../data.js'
import Book from './Book'
const BookList = () => {

  return (
   <>
   <h1>Books List are: total {books.length} found</h1>
   
    {
        books.map((item)=><Book {...item}/>)
      }
   
   </>
  )
}

export default BookList