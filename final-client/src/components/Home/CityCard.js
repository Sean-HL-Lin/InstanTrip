import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../../styles/Home.css";
import DeleteCity from '../../helpers/DeleteCity'

export default function CityCard(props) {

    const style = {
      backgroundImage: `url(${props.city.c_picture})`,
      position: 'relative'
    }
  return (
    <div>
      <div className="city-card" style = {style}>
        <div>
          <Link to={"/" + props.city.city} style={{color: 'white'}}><b>{props.city.city}</b></Link>
        </div>
        <button
            className="btn btn-light"
            style={{ position: 'absolute', zIndex: '1', top:'0px', right: '0px',borderRadius:'15px', backgroundColor:"rgba(0,0,0,0)", color:"white", fontWeight: 'bold', border: '0px'}}
            onClick={() => {
              const id = props.city.id
              DeleteCity(id).then(() => {
                //update city
                props.setCities(prev => {
                  let newCities = [...prev];
                  newCities = newCities.filter((city) => {
                    return city.id !== id
                  })
                  return newCities
                })

                //update places
                props.setUserData(prev => {
                  let newData = [...prev]
                  newData = newData.filter((place) => {
                    return place.city_id !== id
                  })
                  return newData;
                })
              })
            }}
          >
            X
          </button>
      </div>
    </div>      
  )
}