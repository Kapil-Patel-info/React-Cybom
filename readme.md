##-----Tuesday-------------------25-04-25------------------------->

-To install react - npm install -g create react app
-React 
-use to create ui(user Interfaces) elements
-single page application
-javascript Library
-created by facebook
-work on view layer only (forntend only)

framework has predefined rules and things
Library we can use things what we need 


-bable is complier which converts jsx code to machine code
-react Fragment -so the extra node will not create <> </>



#-------------saturday-------------------29-March-25------------------------->

-two types functional and class 
class component has state management
functional component has hooks to manage states

-props
-pass form parent to child 
app.jsx parent      <data name = "kapil patel"/>
data.jsx child      <h1 fun({name})  {name}>

#------------Tuesday-------------------01-April-25------------------------->

react-router | react-router-dom

-folder pages
-layout.jsx  import {Links,Outlit} form react-router-dom
-  <Link to="/home">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>

<Outlit> //to display content


-app.jsx import { BrowserRouter, Routes, Route } from "react-router-dom";

<BrowserRouter>
      <Routes >
        <Route path="/" element={<Layout />}>
        <Route index element={<About />} />   //to make page defalut
        
        <Route path="about" index element={<About />} />
          <Route path="home"  element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>


#------------Wednesday-------------------02-April-25------------------------->

 <h1 style={{color :"red",textAlign:"center",textDecoration:"underline"}}>this is app.jsx</h1>

-use camel notation

-styles passing usijng
const obj = {
  color:"red",
  
}

const App = () => {
  return (
    <>
     

<h1 style={obj}>welcome to cybrom</h1>



#------------Thursday-------------------03-April-25------------------------->

import img1 from "./images/download.jpeg";
<img src={img1} alt="img1" />

-pass palenthasis





