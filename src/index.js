import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { books } from './data'
import { Book } from './Book'

const EventExample = () => {
  const handleButtonClick = (e) => {
    alert(`button clicked ${e.target.name}`)
  }

  return (
    <form>
      <input type="text" />
      <button onClick={handleButtonClick}>click me</button>
    </form>
  )
}

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }
  return (
    <section className="booklist">
      <EventExample />
      {books.map((book, index) => (
        <Book getBook={getBook} {...book} key={book.id} index={index} />
      ))}
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
