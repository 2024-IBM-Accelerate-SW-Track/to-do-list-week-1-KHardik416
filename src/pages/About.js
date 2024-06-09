import React, { Component } from "react";
import "./About.css";
import picture from "../assets/IMG_4637.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="split left">
          <div className="centered">
            <img
              className="profile_image"
              alt="Profile Pic"
              src={picture}
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Hardik Kolisetty</div>
            <div className="brief_description">
              Hey, my name is Hardik and I am a rising sophomore at Georgia
              Tech. I love watching basketball and football, especially cheering
              for my hometown teams from Atlanta. I also enjoy working and
              listening to music. Looking forward to working with all the IBM
              Accelerate program participants.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
