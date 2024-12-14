import React from 'react'
import Image1 from "../assets/bank1.jpeg";
import Image2 from "../assets/bank2.jpeg";
import Image3 from "../assets/bank3.jpeg";

function Carousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Image1} className="d-block w-100 " style={{"max-height":"580px","objectFit":"contain !important"}}alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{"z-index":"10"}}>
      <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success bg-success " type="submit">Search</button>
    </form>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Image2} className="d-block w-100 "style={{"max-height":"700px","width":"700px"}} alt="..."/>
      <div class="carousel-caption d-none d-md-block" style={{"z-index":"10"}}>
      <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Image3} className="d-block w-100 "style={{"max-height":"700px","width":"700px"}} alt="..."/>
      <div class="carousel-caption d-none d-md-block " style={{"z-index":"10"}}>
      <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
      </div>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  )
}

export default Carousel