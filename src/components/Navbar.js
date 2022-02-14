import React from 'react'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
        <a className=" navbar-brand" href="/"><img src="/images/logo.png" alt="" style={{width:"15%",height:"15%"}} /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/"style={{color:"white"}}>Help</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/"style={{color:"white"}}>About</a>
          </li>
          </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}
