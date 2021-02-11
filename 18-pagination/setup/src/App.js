import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {

  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return
    setFollowers(data[page])
  }, [loading, page])

  const handlePage = (index) => {
    setPage(index);
  }

  const nextPage = () => {
    setPage((page) => {
      let newPage = page + 1;
      if (newPage > followers.length - 1) {
        newPage = 0
      }
      return newPage
    })
  }

  const prevPage = () => {
    setPage((page) => {
      let newPage = page - 1;
      if (newPage < 0) {
        newPage = followers.length - 1;
      }
      return newPage
    })
  }

  return <main>
    <div className="section-title">
      <h1>{loading ? 'loading...' : 'pagination'}</h1>
      <div className="underline"></div>
    </div>
    <section className="followers">
      <div className="container">
        {followers.map((follower) => {
          return <Follower key={follower.id} {...follower} />
        })}
      </div>
      {!loading && <div className="btn-container">
        <button className="prev-btn" onClick={prevPage}>
          prev
        </button>
        {followers.map((_, i) => {
          return <button
            key={i}
            className={`page-btn ${i === page ? 'active-btn' : null}`}
            onClick={() => handlePage(i)}
          >
            {i + 1}
          </button>
        })}
        <button className="next-btn" onClick={nextPage}>
          next
        </button>
      </div>}
    </section>
  </main>
}

export default App
