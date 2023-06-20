import React from 'react'
import Spinner from "react-spinkit";
const Loading = () => {
  return (
    <div>
          <div
             style={{
                display: "flex",
                marginTop: "200px",
                justifyContent: "space-between",}}>
             <Spinner name="double-bounce" style={{ width: 100, height: 100 }} />
             <Spinner name="circle" style={{ width: 100, height: 100 }} />
             <Spinner name="cube-grid" style={{ width: 100, height: 100 }} />
             <Spinner name="wave" color="coral" style={{ width: 100, height: 100 }} />
             <Spinner name="three-bounce" style={{ width: 100, height: 100 }} />
             <Spinner name="wandering-cubes" style={{ width: 100, height: 100 }} />
             <Spinner name="chasing-dots" style={{ width: 100, height: 100 }} />
             <Spinner name="rotating-plane" style={{ width: 100, height: 100 }} />
             <Spinner name="wordpress" style={{ width: 100, height: 100 }} />
             <Spinner name="ball-grid-beat" style={{ width: 100, height: 100 }} />
          </div>
          </div>
       );
             }

export default Loading;
