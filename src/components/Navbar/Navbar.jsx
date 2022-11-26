import React from 'react'
import { NavLink, Link } from "react-router-dom";
import './Navbar.css';

const Navbar = ({destination}) => {

  const changeGlobeName = () => {
    switch (destination) {
      case "France":
        {
          return (
            <iframe
              src="https://my.spline.design/worldryanfrance-200d3c03ef123d038b0cd6bca85d384a/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
          );
        }
        break;
      case "Canada":
        {
          return (
            <iframe
              src="https://my.spline.design/worldryancanada-d7e1f15e2b3b94ac40f9968279a56e87/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
          );
        }
        break;
      case "Australie":
        {
          return (
            <iframe
              src="https://my.spline.design/worldryanegyptecopy-fe73c1250418490d609973a016065eed/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
          );
        }
        break;
      case "Bresil":
        {
          return (
            <iframe
              src="https://my.spline.design/worldryan-f71c4eecd1ec75de6a66ecc5af7e71ca/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
          );
        }
        break;
      case "Russie":
        {
          return (
            <iframe
              src="https://my.spline.design/worldryanrussie-e0902a94b3b92728a87f2a21bc960f8a/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
          );
        }
        break;
      case "Egypte":
        {
          return (
            <iframe
              src="https://my.spline.design/worldryanegypte-5c56022f0aca269bf6c4cfe02c20cab5/"
              frameborder="0"
              width="100%"
              height="100%"
            ></iframe>
          );
        }
        break;
      default:
        <h1 id="cityName">RIO</h1>;
        break;
    }
  };






    return (
      <div>
        <div className="navBar" >
            <Link to= "/">   
            <h1 id="mitoCard" className="navTabs">
           MITHOME
             </h1>
            </Link>
            <Link to= {`/carte/${destination}`}>
            <h1 id="mitoCard" className="navTabs">
           CARTE POSTALE
            </h1>
            </Link>
            <Link to= "/Mitoselfie">  <h1 className="navTabs" id="mitoSelfie">
         SELFIE
           </h1>
           </Link>
            <Link to= "/Mitoticket">
             <h1 className="navTabs" id="mitoTicket">
         BILLET D'AVION
            </h1> </Link>
    </div>
            <div className="planetAnim">
            {changeGlobeName()}
      </div>
    </div>
    );
}

export default Navbar;
