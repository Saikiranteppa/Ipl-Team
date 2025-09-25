import DashBoard from "../IplDashBoard";
import "./index.css"
function Home() {
  return (
    <>
      <div className="ipl-back-img">
        <div className="logo-and-ipl-container">
            <div>
                <img src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl-logo" className="ipl-logo"/>
            </div>
            <div>
                <h1 className="ipl-dashboard">IPL Dashboard</h1>
            </div>
        </div>
        <DashBoard/>
      </div>
    </>
  );
}
export default Home;
