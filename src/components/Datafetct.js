
import axios from "axios";

import BotCollection from "./BotCollection";
import React, { useEffect, useState } from "react";
const URL = "https://vercel1-smoky.vercel.app/bots";


export default function DataFetching() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    axios.get(URL).then((res) => {
      setBots(res.data);
    });
  }, []);

  function handleSUbmit( name,health,damage,armor,classes,catchphrase,image,created,update){
    let BortArmy = document.querySelector("#bort")
    let BortCard = document.createElement("div")

     BortCard.innerHTML = `
     <img src=${image} className="" alt=${name} />
     <h6 className="">name: ${name}</h6>
     <p className="titles">damage :${damage}</p>
     <p className="titles">HEALTH :${health}</p>
     <p className="titles">ARMOR :${armor}</p>
     <p className="titles">CLASS :${classes}</p>
     <p className="titles">CATCHPHRASE :${catchphrase}</p>
     <p className="titles"> CREATED AT:${created}</p>
     <p className="titles">UPDATED AT :${update}</p>
     `
     BortArmy.appendChild(BortCard)
  }

  return (
    <div className="Cont">
      {bots.map((botsObj) => {
       return(<BotCollection key={botsObj.id}
          handleSUbmit = {handleSUbmit}
          name ={botsObj.name}
          health ={botsObj.health}
          damage ={botsObj.damage}
          armor ={botsObj.armor}
          classes ={botsObj.bot_class}
          catchphrase={botsObj.catchphrase}
          image ={botsObj.avatar_url}
          created={botsObj.created_at}
          update={botsObj.updated_at}
        />)
      })}
    </div>
  );
}
