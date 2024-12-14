import React from 'react'

const Card=({image,title,description})=> {
  return (
    <div className="card mt-2 " style={{ "width": "30%", "maxHeight": "400px","justifyContent":"space-between" }} id='card'>
                <img src={image} className="card-img-top" alt="..." id="card-img"/>
                <div className="card-body">
                    <h5 className="card-title">
                    {title}
                    </h5>
                    <p className="card-text">{description}</p>
                   


                </div>
            </div>

  )
}

export default Card