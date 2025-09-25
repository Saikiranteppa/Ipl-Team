import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import "./index.css";

function Team() {
  const { id } = useParams();
  const [singleTeam, setSingleTeam] = useState(null);
  //const singleTeamArray = Array.isArray(singleTeam) ? singleTeam : [singleTeam];

  useEffect(() => {
    (async function () {
      const resp = await fetch(`https://apis.ccbp.in/ipl/${id}`);
      const singleData = await resp.json();
      console.log(singleData);
      setSingleTeam(singleData);
    })();
  }, [id]);

  return (
    <main>
      {!singleTeam ? (
        <div style={{ textAlign: "center", marginTop: 50 }}>
          <ClipLoader color="black" />
        </div>
      ) : (
        <>
          <div className="total-deatils">
            <div className="banner-img-con">
              <img src={singleTeam.team_banner_url} alt="s-img" className="banner-img" />
              <h1 className="latest-match-head">Latest Matches</h1>

              <div className="match-details">
                <div className="win-team-details">
                  <h1 className="c-head">
                    {singleTeam.latest_match_details?.competing_team}
                  </h1>
                  <p className="c-para">{singleTeam.latest_match_details?.date}</p>
                  <p className="c-para">{singleTeam.latest_match_details?.venue}</p>
                  <p className="c-para">{singleTeam.latest_match_details?.result}</p>
                </div>
                {/* <hr/> */}

                <div className="match-logo">
                  <img
                    src={singleTeam.latest_match_details?.competing_team_logo}
                    alt="tesm"
                    className="team-logo"
                  />
                </div>

                <div>
                  <h1 className="f-head">First Innigs</h1>
                  <p className="s-para">
                    {singleTeam.latest_match_details?.first_innings}
                  </p>
                  <h1 className="f-head">Second Innigs</h1>
                  <p className="s-para">
                    {singleTeam.latest_match_details?.second_innings}
                  </p>
                  <h1 className="f-head">Man Of The Match</h1>
                  <p className="s-para">
                    {singleTeam.latest_match_details?.man_of_the_match}
                  </p>
                  <h1 className="f-head">umpires</h1>
                  <p className="s-para">
                    {singleTeam.latest_match_details?.umpires}
                  </p>
                </div>
              </div>
            </div>

            {/* <div>
            <img key={index} src={singleTeam.recent_matches?.[0]?.competing_team_logo} 
            alt="all-teams"/>
          </div> */}

            <div className="matches-logo">
              {singleTeam?.recent_matches?.map((match, index) => (
                <div className="single-img-con">
                  <img
                    key={index}
                    src={match.competing_team_logo}
                    className="single-img"
                    alt={`team-${index}`}
                  />
                  <h1 className="won-team-head">{match.competing_team}</h1>
                  <p className="won-team-para">{match.result}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
export default Team;
