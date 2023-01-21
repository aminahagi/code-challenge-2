import React from "react";

export default function BotCollection({
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
  console.log(name);
  console.log(image);
  return (
    <div className="cont">
      <div className="content">
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

    //     <div  className="card">
    //
    //   <div>
    //     <h5 className="card-title">Card title</h5>
    //     <p className="titles">
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </p>
    //     <a href="/" className="btn btn-primary">
    //       Go somewhere
    //     </a>
    //   </div>
    //     </div>
  );
}
