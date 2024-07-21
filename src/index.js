import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style/home/home.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//const menu = document.querySelector(".menu");
//const menuItems = document.querySelectorAll(".menuItem");
//const hamburger= document.querySelector(".hamburger");
//const closeIcon= document.querySelector(".fa-xmark");
//const menuIcon = document.querySelector(".fa-bars");
const mybutton = document.getElementById("myBtn");

//function toggleMenu() {
  //if (menu.classList.contains("showMenu")) {
    //menu.classList.remove("showMenu");
    //closeIcon.style.display = "none";
    //menuIcon.style.display = "block";
  //} else {
    //menu.classList.add("showMenu");
    //closeIcon.style.display = "block";
    //menuIcon.style.display = "none";
  //}
//}

//hamburger.addEventListener("click", toggleMenu)

//menuItems.forEach( 
    //function(menuItem) { 
      //menuItem.addEventListener("click", toggleMenu);
    //}
//)



  
  mybutton.addEventListener("click", (e) => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }
);