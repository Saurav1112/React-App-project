import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Movie3.style.css"
import Store from "../../../Utility/ContextStore/ContextApi";

const  Movie3Content = ()=>{
    const [data] = useContext(Store)
    // console.log("DATATTATA",data);
return(
    <>
    <div className="Movie3-Container">
 
         
{data.filter((item)=>item.cat ==='Hollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Movie3-Heading">!!!{d.title3}!!!</h2>
        <Link to={"/Hollywood"}><button className="Movie3-Back-Button">Let's Explore More Hollywood</button></Link> 
        <div className="Movie3-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Movie3-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Movie3-Social-Media-Logo"/>
        </div>

        <div className="Movie3-Date-Container">
        <p className="Movie3-Dimitry">Dimitry Nozhenko</p>
        <p className="Movie3-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img3} alt="Not-Found" className="Movie3-Image"/>
        <div className="Movie3-Image-Name">Image:{d.title3}</div>
        <div className="Movie3-Para-Container">
        <p>{d.cpara1}</p>
        <p>{d.cpara2}</p>
        <p>{d.cpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Movie3Content