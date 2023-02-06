import React from "react";

function BotCollection({ handleSUbmit,
  name,
  health,
  damage,
  armor,
  classes,
  catchphrase,
  image,
  created,
  update,
}) {


  return (
    <div className="card" onClick={(e)=>
      {handleSUbmit( name,
      health,
      damage,
      armor,
      classes,
      catchphrase,
      image,
      created,
      update,)}}>
      <div className="cont">

        <div className="card-container" id="card">
          <img src={image} className="" alt={name} />
          <h6 className="card-title">name: {name}</h6>
          <p className="titles">damage :{damage}</p>
          <p className="titles">HEALTH :{health}</p>
          <p className="titles">ARMOR :{armor}</p>
          <p className="titles">CLASS :{classes}</p>
          <p className="titles">CATCHPHRASE :{catchphrase}</p>
          <p className="titles"> CREATED AT:{created}</p>
          <p className="titles">UPDATED AT :{update}</p>
        </div>
      </div>
    </div>
  );
}
export default BotCollection;