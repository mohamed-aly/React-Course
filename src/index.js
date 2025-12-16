import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const title = 'The Spear Cuts Through Water'
const author = 'Simon Jimenez'

const BookList = () => {
  return (
    <section className="booklist">
      <Book job="developer" />
      <Book age={22} />
      <Book />
    </section>
  )
}

const Book = ({ job, age }) => {
  return (
    <article className="book">
      <img src="./images/book-1.jpg" alt="The Spear Cuts Through Water" />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{job}</p>
      <p>{age}</p>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
