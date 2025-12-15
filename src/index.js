import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  const title = 'The Spear Cuts Through Water'
  const author = 'Simon Jimenez'
  return (
    <article className="book">
      <img src="./images/book-1.jpg" alt="The Spear Cuts Through Water" />
      <h2>{title}</h2>
      <h3>{author}</h3>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
