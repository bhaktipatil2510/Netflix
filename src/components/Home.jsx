import React, { useEffect, useState } from 'react'
import { getdata } from '../Api/Moviedata';
import { Button } from 'react-bootstrap';
import { WatchUrl } from '../Api/URL'

export const Home = () => {

  const [moviedata,setmoviedata]=useState([])
  const getalldata=async()=>{
    try
    {
      const res = await getdata()
      if(res.status===200)
      {
        console.log(res.data.results)
        setmoviedata(res.data.results)
      }
    }
    catch(error)
    {

    }
  }

  useEffect(()=>{
    getalldata()
  },[])


  console.log(getdata)
  return (
    
    <div className="container-fluid bg-dark min-vh-100 text-white py-4">

      <h2 className="ms-3 mb-4">Trending Movies</h2>

     <div className="row g-3">
  {
    moviedata.map((item, index) => (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3  " key={item.id}>
        <div className="card bg-dark text-white border-0 h-100 shadow-sm">
          <img 
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} 
            className="card-img-top img-fluid"
            style={{ borderRadius: "5px" }}
          />
          <div className="card-body p-2 d-flex flex-column">
            <h6 className="card-title mb-2 text-truncate" style={{ fontSize: "0.9rem" }}>
              {item.title}
            </h6>

            <a href={WatchUrl[index]} className='btn btn-danger' target='_blank'>Watch Now</a>
            
           
          </div>
        </div>
      </div>
    ))
  }
</div>

    </div>
  )
}
    



// useState = it is used to stored data
// useEffect = call function
