import React from 'react';
import AllPlaceItem from './AllPlaceItem';
import SchedulePlaceItem from './SchedulePlaceItem';
import "../../styles/City.css";
import CityPlace from './CityPlace'

export default function ScheduleList (props) {
  // console.log('props.places-1-1-1-1-1')
  // console.log(props.places)
  // console.log(props.schedules)
  // setCurrentSchedule
  return (
    <>
      <nav>
        {/* <div
          style={{ position: 'relative', zIndex: '1' }}
        >
          {props.foundPlaces.map((place) => {
            // to rebuild
            return <CityPlace
                    place={place}
                    key={place.placeId}
                    city={props.city}
                    user={props.user}
                    setCities={props.setCities}
                    />
          })}
        </div> */}
        <div className="nav nav-tabs" id="nav-tab" role="tablist">

          <a className="nav-item nav-link active"
              id="nav-home-tab" data-toggle="tab" 
              href="#nav-home" role="tab" 
              aria-controls="nav-home" 
              aria-selected="true"
             
              aria-selected="false"
              onClick={() => {
                props.setMegaSteps([])
                props.setSteps([])
                props.setCurrentSchedule({id: 'All', city_id: '', start_place: null, end_place: null, transit: null})
              }}
              >All</a>
             
          {props.schedules.map((schedule) => {
            return <a  
              key={schedule.id}className="nav-item nav-link" 
              id={`nav-schedule-tab-${schedule.id}`} 
              data-toggle="tab" 
              href={`#nav-schedule-${schedule.id}`} 
              role="tab" 
              aria-controls={`nav-schedule-${schedule.id}`} 
              aria-selected="false"
              onClick={() => {
                props.setMegaSteps([])
                props.setSteps([])
                props.setCurrentSchedule(schedule)

              }}
              >schedule {schedule.id}</a>
          })}
          {props.foundPlaces.length ? 
            <a  
              key='foundPlace'
              className="nav-item nav-link" 
              id={`nav-schedule-tab-foundPlace`} 
              data-toggle="tab" 
              href={`#nav-schedule-foundPlace`} 
              role="tab" 
              aria-controls={`nav-schedule-foundPlace`} 
              aria-selected="true"
              onClick={() => {
                props.setMegaSteps([])
                props.setSteps([])
              }}
              >Found Places</a> : <></>}
          
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <div className='scroll-all'>
          {props.places.map((place) => {
            return <AllPlaceItem
              key={place.id}
              place={place}
              schedules={props.schedules}
              setUser={props.setUser}
            />
          })}
          </div>
        </div>

        {props.schedules.map((schedule) => {
            return <div 
                      key={schedule.id}
                      className="tab-pane fade" 
                      id={`nav-schedule-${schedule.id}`} 
                      role="tabpanel" 
                      aria-labelledby="nav-schedule-tab">
              {props.places.filter((place) => {
                return place.schedule_id == schedule.id
              })
              .map((place) => {
                return <SchedulePlaceItem
                        key={place.id}
                        place={place}
                        setUser={props.setUser}
                        />
              })
              }
              </div>
          })}

        <div 
          key='foundPlaces'
          className="tab-pane fade" 
          id={`nav-schedule-foundPlace`} 
          role="tabpanel" 
          aria-labelledby="nav-schedule-tab">
            {props.foundPlaces.map((place) => {

              // to rebuild
              return <CityPlace
                      place={place}
                      key={place.placeId}
                      city={props.city}
                      user={props.user}
                      setCities={props.setCities}
                      />
            })}
        </div>
        
        
      </div>
    </>
  )
}
