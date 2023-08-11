import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Movie8.style.css"
import Store from "../../../Utility/ContextStore/ContextApi";

const  Movie8Content = ()=>{
    const [data] = useContext(Store)
    // console.log("DATATTATA",data);
return(
    <>
    <div className="Movie8-Container">
 
         
{data.filter((item)=>item.cat ==='Hollywood-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Movie8-Heading">!!!{d.title8}!!!</h2>
        <Link to={"/Hollywood"}><button className="Movie8-Back-Button">Let's Explore More Hollywood</button></Link> 
        <div className="Movie8-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Movie8-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Movie8-Social-Media-Logo"/>
        </div>

        <div className="Movie8-Date-Container">
        <p className="Movie8-Dimitry">Dimitry Nozhenko</p>
        <p className="Movie8-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img8} alt="Not-Found" className="Movie8-Image"/>
        <div className="Movie8-Image-Name">Image:{d.title8}</div>
        <div className="Movie8-Para-Container">
        <p>{d.hpara1}</p>
        <p>{d.hpara2}</p>
        <p>{d.hpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Movie8Content