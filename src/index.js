import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    id: 1,
    title: 'Piranesi',
    author: 'Susanna Clarke',
    img: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1609095173i/50202953.jpg',
  },
  {
    id: 2,
    title: 'The Spear Cuts Through Water',
    author: 'Simon Jimenez',
    img: './images/book-1.jpg',
  },
]

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book {...book} key={book.id} />
      ))}
    </section>
  )
}

const Book = ({ title, author, img }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
