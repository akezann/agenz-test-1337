import React from 'react';
import Nav from './componenets/navbar/Nav';
import Card from './componenets/card/Card';
import SearchBar from './componenets/searchbar/SearchBar';
import Heart from './assets/images/whiteheart.png'
import HeartB from './assets/images/blackheart.png'
import Map from './componenets/map/Map';
import Hotel1 from './assets/images/one.png'
import Hotel2 from './assets/images/three.png'
import Hotel3 from './assets/images/hotelTwo.png'
import Hotel4 from './assets/images/four.png'
import './App.css';


function App() {
  return (
    <div className="container">
      <div>
          <Nav />
      </div>
      <div>
        <SearchBar />
      </div>

      <div className='main-sec'>
        <div className='map-sec'>
            <Map />
         </div>
        <div className="Announce-sec">
          <div className="Announce-filter">
            <h1>Immobilier et maisons à vendre partout au Maroc</h1>
            <div className="filter-sec">
              <div className='agent-num'>
                  <h2><span style={{fontWeight:"bolder"}}>500</span> agent listings</h2>
              </div>
              <form className='form-filter'>
                  <label htmlFor='agents'>Filter par</label>
                  <select className='agents' name="agents" id="agents">
                    <option value="Marrakech relax">Marrakech relax</option>
                    <option value="Hotel de france">Hotel de france</option>
                    <option value="ibis oujda">Ibis oujda</option>
                  </select>
              </form>
            </div>
          </div>
          <div className='cards'>
              <Card icon={Heart}  image={Hotel1} price={1101.11} days={5}/>
              <Card icon={HeartB} image={Hotel2} price={999.99} days={2}/>
              <Card icon={Heart} image={Hotel3} price={1579.99} days={3}/>
              <Card icon={HeartB} image={Hotel4} price={2000} days={10}/>
              <Card icon={Heart} image={Hotel2} price={1101.11} days={5}/>
              <Card icon={HeartB} image={Hotel3} price={999.99} days={2}/>
              <Card icon={Heart} image={Hotel1} price={1579.99} days={3}/>
              <Card icon={HeartB} image={Hotel4} price={2000} days={10}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
