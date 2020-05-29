import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const embedUrl = process.env.REACT_APP_OCM_EMBED_URL

const Splash = () => {
  return <div className="Splash-header">
    <img src={logo} className="Splash-logo" alt="logo" />
    <p>
      Non-zone loading...
 </p>
  </div>
}

const Map = () => {
  return <iframe src={embedUrl} title="Open Communty Map" allow="geolocation" style={{ borderWidth: 0 }}
    width="100%" height="100%" />

}

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => setTimeout(() => setLoading(false), 2000), []);

  return (
    <div className="App">
      {loading ? <Splash /> : <Map />}
    </div>
  );
}

export default App;
