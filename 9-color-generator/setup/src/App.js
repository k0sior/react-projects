import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#aadddd').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error);
    }
  }
  return (
    <>
      <section className='container'>
        <h3>color generator
        <form onSubmit={handleSubmit}>
            <input type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="#aaaaaa"
              className={`${error ? "error" : null}`} />
            <button className="btn" tpye="submit">
              submit
            </button>
          </form>
        </h3>
      </section>
      <section className="colors">
        {list.map((color, i) => {
          const hex = color.hex;
          return <SingleColor
            key={i}
            {...color}
            index={i}
            hexColor={hex} />
        })}

      </section>
    </>
  )
}

export default App
