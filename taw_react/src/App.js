import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import img1 from "./imgs/img1.png"
function App() {

function randNum(min, max){
return Math.floor((Math.random() * (max -min) + min))
}




let min = 0, 
    max = 90; 

let BackdropImgSet = () =>{

  return (<>      
<div class ="img1" id = "img" style = {{left: `${randNum(min, max)}vw`, top: `${randNum(min-25, max+1)}vh`}}></div>
<div class ="img2" id = "img" style = {{right: `${randNum(min, max)}vw`, top: `${randNum(min-25, max+1)}vh`}}></div>
<div class ="img3" id = "img" style = {{left: `${randNum(min, max)}vw`, top: `${randNum(min-25, max+1)}vh`}}></div>
<div class ="img4" id = "img" style = {{right: `${randNum(min, max)}vw`, top: `${randNum(min-25, max+1)}vh`}}></div>
<div class ="img5" id = "img" style = {{left: `${randNum(min, max)}vw`, top: `${randNum(min-25, max+1)}vh`}}></div>
<div class ="img6" id = "img" style = {{right: `${randNum(min, max)}vw`, top: `${randNum(min-25, max+1)}vh`}}></div>
<div class ="img7" id = "img" style = {{left: `${randNum(min, max)}vw`, top: `${randNum(min-25, max+1)}vh`}}></div>
</>);

}

/*

useEffect(() =>{
  document.getElementById("img").style.right = `${randNum(10, 50)}rem`;
  document.getElementById("img").style.bottom = `${randNum(10, 50)}rem`;
}, [backdropImgSet])

/** */

  return (
    <div className="App">
      <div class = "backdropImgs">
      <BackdropImgSet/>
      <BackdropImgSet/>
      <BackdropImgSet/>
      <BackdropImgSet/>
      <BackdropImgSet/>
      <BackdropImgSet/>
      <BackdropImgSet/>
      <BackdropImgSet/>
      <BackdropImgSet/>
      <BackdropImgSet/>
      <BackdropImgSet/>
      <BackdropImgSet/>
      </div>

      <div class = "restContent">
             <h1>Teacher Appreciation Week</h1>
             <div class = "env_triangle"></div>




      </div>
 
    </div>
  );
}

export default App;
