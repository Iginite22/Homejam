import React from "react";

export default function Card() {
  return (
    <div>
      <div className="container" style={{ marginTop: "100px" }}>
        <div
          className="container"
          style={{ color: "white", cursor: "pointer" }}
        >
          <h2>Upcoming Events </h2>
          <hr />
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
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="row" style={{marginLeft:"70px"}}>
          <div className="col-sm-4">
            <div
              className="card"
              style={{
                width: "18rem",
                margin: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/175658/pexels-photo-175658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="..."
                style={{ boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)" }}
              />
              <div className="card-body">
                <h5 className="card-title">Title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="card"
              style={{
                width: "18rem",
                margin: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/358010/pexels-photo-358010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="..."
                style={{ boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)" }}
              />
              <div className="card-body">
                <h5 className="card-title">Title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="card"
              style={{
                width: "18rem",
                margin: "10px",
                boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
              }}
            >
              <img
                src="https://images.pexels.com/photos/2188012/pexels-photo-2188012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="card-img-top"
                alt="..."
                style={{ boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)" }}
              />
              <div className="card-body">
                <h5 className="card-title">Title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
