import { useEffect, useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
//import Team from "../Team";

function DashBoard() {
  const [Board, setBoard] = useState(null);

  useEffect(() => {
    (async function () {
      const resp = await fetch("https://apis.ccbp.in/ipl");
      const data = await resp.json();
      setBoard(data.teams);
    })();
  }, []);

  return (
    <>
      <div>
        <div>
          {Board === null ? (
            <div style={{textAlign:"center",marginTop:50}}>
              <ClipLoader color="white"/>
            </div>
          ) : (
            <>
              <div className="teams-container">
                {Board.map((item) => {
                  return (
                    <div className="team-and-name-container" key={item.id}>
                      <Link to={`team/${item.id}`}>
                        <div className="ipl-image-container">
                          <div>
                            <img
                              src={item.team_image_url}
                              alt="srh"
                              className="srh-class"
                            />
                          </div>
                          <div>
                            <h1 className="item-name">{item.name}</h1>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default DashBoard;
