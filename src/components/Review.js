import React from 'react'

export default function Review() {
  return (
    <div>
        <div className="container"style={{marginTop:"100px",color:"white"}}>
            <h1>
                Reviews
            </h1>
            <hr />
        </div>
        <div className="container" style={{ marginBottom: "50px" }}>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                  <a class="page-link" href="/">
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    4
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    5
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="/">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        <div className="container" style={{marginTop:"100px",marginLeft:"70px",marginBottom:"150px"}}>
            <div className="row"style={{marginLeft:"70px"}}>
                <div className="col-sm-4">
                <div class="card" style={{width:"18rem",boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)"}}>
                    <div class="card-body">
                        <h5 class="card-title">Jameson</h5>
                        <h6 class="card-subtitle mb-2 text-muted">&#9733;&#9733;&#9733;&#9733;</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" class="card-link">Full review</a>
                        <a href="/" class="card-link">Profile</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4">
                <div class="card" style={{width:"18rem",boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)"}}>
                    <div class="card-body">
                        <h5 class="card-title">Alia</h5>
                        <h6 class="card-subtitle mb-2 text-muted">&#9733;&#9733;&#9733;&#9733;&#9733;</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" class="card-link">Full Review</a>
                        <a href="/" class="card-link">Profile</a>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4">
                <div class="card" style={{width:"18rem",boxShadow: "12px 12px 2px 1px rgba(0, 0, 255, .2)"}}>
                    <div class="card-body">
                        <h5 class="card-title">Alex</h5>
                        <h6 class="card-subtitle mb-2 text-muted">&#9733;&#9733;&#9733;&#9733;</h6>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/" class="card-link">Full review</a>
                        <a href="/" class="card-link">Profile</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
