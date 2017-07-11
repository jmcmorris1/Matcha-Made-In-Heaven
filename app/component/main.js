import React from "react";
import Header from "./section/header.js";
import Footer from "./section/footer.js";
import {Carousel} from "antd";



class Main extends React.Component{
	render(){	
		     return(
		       <div>

                 <h1 className="header"><a href="#/main"> A Matcha Made in Heaven</a></h1>

		       	<Header SelectedMenu="Main"/>
		        
		          

		           <Carousel autoplay className="carousel">
    					<div className= "myImages">
    						<img src="../images/cup.jpg" alt="cup of matcha" />
    					</div>
    					<div className= "myImages">
    						<img src="../images/japan.jpg" alt="matcha" />
    					</div>
    					<div className= "myImages">
    						<img src="../images/mat.png" alt="powder" />
    					</div>		
  					</Carousel>

		           <div className="intro">
            	   		<h1 className="intro-matcha">Introducing Matcha</h1>
            				<p className="intro-mat">
                			Matcha (抹茶) is a type of green tea originated in China and brought over to Japan in 1191. 
                			The evolution of matcha and its making has been intertwined with the history of Japanese tea ceremony and Zen Buddhism over the past 400 years. 
                			Unlike any other types of tea, matcha is a finely ground powder made from stone-grinding green tea leaves grown under unique conditions. 
                			Brewing matcha involves whisking it into warm water, as opposed to simply steeping. 
                			Thus, the entire leaf is consumed, carrying with it a more sophisticated flavour profile as well as greater nutritional properties than any other types of tea. 
                			
                			</p>
            			<div className="video">
                			<iframe width="560" height="315" src="https://www.youtube.com/embed/Vy6slu-D0v8" frameborder="0" allowfullscreen></iframe>
            			</div>
        			</div>

		         <Footer /> 

		       </div>
		     );
    }
} 
  
export default Main;