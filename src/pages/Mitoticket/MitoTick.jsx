import React, { useState } from "react";
import "./mitoticket.css";
const Mitoticket = ({  destination }) => {
  console.log(destination, "destination");
  const [cityName, setCityName] = useState("");
  const [cityCode, setCityCode] = useState("");
  const [dissapear, setDissapear] = useState(false);
  const changeCityName = () => {


    console.log(destination, "ticket");
    switch (destination) {
      case "France":
        {
          return <h1 id="cityName">PARIS</h1>;
        }
        break;
      case "Canada":
        {
          return <h1 id="cityName">OTTAWA</h1>;
        }
        break;
      case "Australie":
        {
          return <h1 id="cityName">SYDNEY</h1>;
        }
        break;
      case "Bresil":
        {
          return <h1 id="cityName">RIO</h1>;
        }
        break;
      case "Egypte":
        {
          return <h1 id="cityName">Le Caire</h1>;
        }
        break;
      case "Russie":
        {
          return <h1 id="cityName">Moscou</h1>;
        }
        break;
      default:
        return <h1 id="cityName">RIO</h1>;
        break;
    }
  };
  const changeTicketCity = () => {
    switch (destination) {
      case "France":
        {
          return <img src="/Ticket-Paris.png" alt="2" id="ticket" />;
        }
        break;
      case "Canada":
        {
          return <img src="/Ticket-Ottawa.png" alt="2" id="ticket" />;
        }
        break;
      case "Australie":
        {
          return <img src="/Ticket-Sydney.png" alt="2" id="ticket" />;
        }
        break;
      case "Bresil":
        {
          return <img src="/Ticket-Rio.png" alt="2" id="ticket" />;
        }
        break;
      case "Egypte":
        {
          return <img src="/Ticket-Cairo.png" alt="2" id="ticket" />;
        }
        break;
      case "Russie":
        {
          return <img src="/Ticket-Moscou.png" alt="2" id="ticket" />;
        }
        break;
      default:
        return <h1 id="cityName">RIO</h1>;
        break;
    }
  };
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
  const addCityName = (e) => {
    if (e.key === "Enter") {
      setDissapear(true);
    }
    addCityCode();
  };
  const addCityCode = (e) => {
    switch (cityName) {
      case "Paris":
        setCityCode("PAR");
        break;
      case "Dakar":
        setCityCode("DKR");
        break;
      case "Barcelone":
        setCityCode("BAR");
        break;
      case "New York":
        setCityCode("NYC");
        break;
      default:
        setCityCode("MIL");
        break;
    }
  };
  return (
    <div className="ticketContainer">
      {changeCityName()}

      <div className="ticketCard">
        <input
          type="text"
          onChange={(e) => setCityName(e.target.value)}
          onKeyDown={(e) => addCityName(e)}
          style={{ display: dissapear ? "none" : "block" }}
        />{" "}
        <h3 id="cityTicket" style={{ display: dissapear ? "block" : "none" }}>
          {cityName}{" "}
        </h3>
        <h1 id="cityCode" style={{ display: dissapear ? "block" : "none" }}>
          {cityCode}
        </h1>
        {changeTicketCity()}
      </div>
    </div>
  );
};

export default Mitoticket;
