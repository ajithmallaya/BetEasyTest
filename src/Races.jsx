import React, { Component } from "react";
import "./App.css";
import axios from 'axios';

class Races extends Component {
  constructor(props) {
    super(props);

    this.state = {
      races: []
    };
  }  

  fetchRacesFirst() {
    var that = this;
  
    
    axios.get('https://beteasy.com.au/api/home/next-jumps/1,2,3').then(function (result) {
      that.setState({ races: result.data.result });
    });
  }  

  componentWillMount() {
    this.fetchRacesFirst();
} 

  render() {
    return (
        <React.Fragment>
         <div className="race__item">
             <div className="races">
                 <div className="flex race-header">
                   <div className="col-3 name-header">Event Name</div>
                   <div className="col-3 venue-header">Event Venue</div>
                   <div className="col-3 timestamp-header">Time To Start</div>
                 </div>
                 {
                  this.state.races.map((items, index) =>
                    <div key={`${items}${index}`} className="items-section">
                        <div className="flex">
                          <div className="col-3 event-name">
                            {items.EventName}
                          </div>
                          <div className="col-3 event-venue">
                            {items.Venue.Venue}
                          </div>
                          <div className="col-3 timestamp-value">
                            {items.AdvertisedStartTime}
                          </div>
                        </div>
                    </div>
                  )
                }
              </div>
         </div>
      </React.Fragment>
    );
  }
}

export default Races;