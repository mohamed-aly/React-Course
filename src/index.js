import React from 'react'
import ReactDOM from 'react-dom/client'

function Greeting() {
  return (
    <>
      <h3>
        <ul>
          <li>
            <a href="https://google.com">HEllo World</a>
          </li>
        </ul>
      </h3>
    </>
  )
}

// function Greeting() {
//   return React.createElement('h2', {}, 'HEy World!')
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Greeting />)
