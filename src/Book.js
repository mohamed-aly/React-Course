export const Book = ({ title, author, img, id, getBook, index }) => {
  const getSingleBook = () => {
    getBook(id)
  }
  return (
    <article className="book">
      <dev>{index + 1}</dev>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button onClick={getSingleBook}>click me!</button>
    </article>
  )
}
