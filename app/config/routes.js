import React from "react";
import {  Router , Route , hashHistory} from "react-router";
import Home from "../component/home.js";
import Main from "../component/main.js";
import Contact from "../component/contact.js";
import AllProducts from "../component/AllProducts.js";
import Cart from "../component/cart.js";
import What from "../component/whatismatcha.js";
import Recipes from "../component/recipes.js";
import Health from "../component/healthbenefits.js";
import input from "../component/querypro.js";
import loginr from "../component/loginp/loginr.js";

const routes = (
  
     <Router  history = {hashHistory}>

        <Route path = "/" component = {Home} /> 
        
        <Route path = "/regi" component = {loginr} />
        <Route path = "/Main" component = {Main} /> 
        <Route path = "/input" component = {input} />
         
        <Route path = "/Contact" component = {Contact} />
        <Route path = "/AllProducts" component = {AllProducts} /> 
        <Route path = "/What" component = {What} />
        <Route path = "/Recipes" component = {Recipes} />
        <Route path = "/Health" component = {Health} />
        <Route path = "/Cart" component = {Cart} />
          
     </Router>
  
);

export default routes;

