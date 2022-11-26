import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./Mitocard.css"

const responsive = {
  /* Responsive du carousel */

  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    partialVisibilityGutter: 40,
  },
};

const Mitocard = ({ handleDestination, destination }) => {
  const { id } = useParams();

  useEffect(() => {
    handleDestination(id);
  }, [id]);

  const[displayCarousel, setCarousel]= useState(true);
  const [displayCarte, setDisplayCarte] = useState(false);
  const[cart, setCart]= useState("");

  console.log(destination,"carte");

  const handleMouseOver = (event) => {
    setCart(event.target.alt);
  }

  const handleClick = () => {
    setCarousel(false);
    setDisplayCarte(true);
  }


  return (
    <div>
      <Navbar destination={destination} />
      {displayCarousel && <div className="carouselCart">
      <h1 className="carteTitre"> Choisis ta mitocarte </h1>
          <Carousel responsive={responsive} >
            <img onMouseOver={(event)=>handleMouseOver(event)}
                  onClick={handleClick}
            className="postcard"    
            src={`/Cartes/${destination}/${destination}1.jpeg`}
            alt = {`${destination}1`}
            /> 
                <img onMouseOver={(event)=>handleMouseOver(event)}
                  onClick={handleClick}
            className="postcard"    
            src={`/Cartes/${destination}/${destination}2.jpeg`}
            alt = {`${destination}2`}
            /> 
                 <img onMouseOver={(event)=>handleMouseOver(event)}
                  onClick={handleClick}
            className="postcard"    
            src={`/Cartes/${destination}/${destination}3.jpeg`}
            alt = {`${destination}3`}
            />  
               <img onMouseOver={(event)=>handleMouseOver(event)}
                  onClick={handleClick}
            className="postcard"    
            src={`/Cartes/${destination}/${destination}4.jpeg`}
            alt = {`${destination}4`}
            />  
           <img onMouseOver={(event)=>handleMouseOver(event)}
                  onClick={handleClick}
            className="postcard"    
            src={`/Cartes/${destination}/${destination}5.jpeg`}
            alt = {`${destination}5`}
            />  
          </Carousel>
          </div>}
          {displayCarte && <div>
          <h1 className="carteTitre"> Ecris ta mito carte </h1>
            <div className="customCart">
            <div>
            <img 
            className="postcard"    
            src={`/Cartes/${destination}/${cart}.jpeg`}
            alt = {cart}
            />  
            </div>
          <div className ="cartecontainer">
          <img className ="verso" src="/cartepostale.png" alt="verso"/>
          <textarea placeholder=" coucou c'est moi" className="textleft" />
          <textarea placeholder="Ryan le mitho"className="textright" />
          <textarea placeholder="Pimpon la fougère" className="textright2" />
          <textarea className="textright3" />
          </div> 
          </div> 
          </div>}
    </div>
  );
};

export default Mitocard;
