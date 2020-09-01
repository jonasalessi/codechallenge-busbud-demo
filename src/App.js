import React, { useState } from 'react';
import './App.css';
import { register } from './autocomplete';
import gps from './gps.png';

const Average = ({ calls }) =>
  (<div className="average">
    Average response time {calls.sum > 0 ? Number(calls.sum / calls.times).toFixed(2) : '0'} m/s
  </div>);

const App = () => {
  const [calls, setCalls] = useState({ times: 0, sum: 0 });
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const [suggestions, setSuggestions] = useState(null);
  const [autocompleteSearchDebounced, autocompleteSearchThrottled] = register();

  const applyLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      });
    });
  };

  const changeLocation = (field) => (event) => {
    setLocation({ ...location, [field]: event.target.value });
  };

  const changeQuery = (event) => {
    setQuery(event.target.value);
    if (!event.target.value) {
      setMessage('');
      setSuggestions(null);
      return;
    }
    if (event.target.value.length < 5) {
      autocompleteSearchThrottled({ query: event.target.value, calls, location, setSuggestions, setCalls, setMessage });
    } else {
      autocompleteSearchDebounced({ query: event.target.value, calls, location, setSuggestions, setCalls, setMessage });
    }
  };

  const openMaps = (city) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${city.latitude},${city.longitude}`);
  }

  return (
    <div className="center">
      <Average calls={calls} />
      <div className="App-container">
        <img
          className="App-logo"
          src={require('./logo.png')}
          alt="Logo challenge Jonas"
        />
        <div className="App-input-container">
          <div className="App-input-search">
            <input
              placeholder="Type some city here"
              type="text"
              value={query}
              onChange={changeQuery}
            />
          </div>
          <div className="App-input-lat">
            <input
              placeholder="Latitude"
              type="text"
              value={location.latitude}
              onChange={changeLocation('latitude')}
            />
          </div>
          <div className="App-input-long">
            <input
              placeholder="Longitude"
              type="text"
              value={location.longitude}
              onChange={changeLocation('longitude')}
            />
          </div>
          <div className="App-gps">
            <img onClick={applyLocation} src={gps} alt="My Location"></img>
          </div>
        </div>
        {suggestions?.length ?
          <ol>
            {suggestions.map((s, i) => {
              return (
                <>
                  <li key={s + i} onClick={() => openMaps(s)}>
                    {s.name}
                    <span className="similarity">{Number(s.score * 100).toFixed(2)} % similarity</span>
                  </li>
                  <hr />
                </>
              );
            })}
          </ol>
          : (<div className="message" >{message}</div>)}
      </div>
    </div>
  );
};

export default App;
