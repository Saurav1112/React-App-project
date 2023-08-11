import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import myImage from "../../../facebook-instagram-and-twitter-icons-editorial-icons-set-free-vector.jpg"
import "./Fitness2.style.css"
import Store from "../../../Utility/ContextStore/ContextApi";

const  Fitness2Content = ()=>{
    const [data] = useContext(Store)
    // console.log("DATATTATA",data);
return(
    <>
    <div className="Fitness2-Container">
 
         
{data.filter((item)=>item.cat ==='Fitness-Images').map((d,item)=>{
    return(
        <div key={item}>
       
        <h2 className="Fitness2-Heading">!!!{d.title2}!!!</h2>
        <Link to={"/Fitness"}><button className="Fitness2-Back-Button">Let's Explore More Fitness</button></Link> 
        <div className="Fitness2-Media-Container">
        <img src="https://w1.pngwing.com/pngs/743/500/png-transparent-circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-thumbnail.png" alt="Not-Found" className="Fitness2-Boy-Logo"/>
        <img src={myImage} alt="Not-Found"  className="Fitness2-Social-Media-Logo"/>
        </div>

        <div className="Fitness2-Date-Container">
        <p className="Fitness2-Dimitry">Dimitry Nozhenko</p>
        <p className="Fitness2-Date">Jan 28 2019 10 min read</p>
        </div>
     
        <img src={d.img2} alt="Not-Found" className="Fitness2-Image"/>
        <div className="Fitness2-Image-Name">Image:{d.title2}</div>
        <div className="Fitness2-Para-Container">
        <p>{d.bpara1}</p>
        <p>{d.bpara2}</p>
        <p>{d.bpara3}</p>
        </div>
        </div>
    )
 })}    
        
        
        
    </div>
    </>
)
}

export default Fitness2Content