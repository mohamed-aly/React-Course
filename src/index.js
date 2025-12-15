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
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img src="./images/book-1.jpg" alt="The Spear Cuts Through Water" />
)
const Title = () => <h2>The Spear Cuts Through Water</h2>
const Author = () => <h3>Simon Jimenez</h3>

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
