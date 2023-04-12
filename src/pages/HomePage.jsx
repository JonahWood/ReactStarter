import React, { useState } from "react";

export default function HomePage() {
  const [count, setCount] = useState(0)
  const [max] = useState(999)

  return (
    <div className="home-page">
      <div className="container my-3">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <button className="btn btn-success my-1" onClick={() => setCount((count) => (count*0) + (Math.ceil(Math.random() * max)))}>
                  Generate random number
                </button>
              </div>
            </div>
                <h1 className="text-primary">{count}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}