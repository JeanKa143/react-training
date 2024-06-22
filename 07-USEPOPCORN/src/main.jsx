import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { StarRating } from './StarRating'
// import App from './App.jsx'
// import './index.css'

function Test() {
  const [movieRating, setMovieRating] = useState(0)

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']} />
    <StarRating color="red" size={24} defaultRating={3} />
    <Test />
  </React.StrictMode>
)
