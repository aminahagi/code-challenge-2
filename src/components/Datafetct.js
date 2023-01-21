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
//   console.log(bots);

  return (
    <div >
      {bots.map((botsObj) => {
        // console.log(botsObj);
       return(<BotCollection key={botsObj.id}
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
