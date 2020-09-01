import React, { useState, useEffect } from 'react';
import './App.css';
import {register} from './autocomplete';

const App = () => {
  const [calls, setCalls] = useState({times:0, sum: 0});
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const [suggestions, setSuggestions] = useState(null);
  const [autocompleteSearchDebounced, autocompleteSearchThrottled] = register();
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({ 
        longitude: position.coords.longitude,
        latitude: position.coords.latitude,
      });
    });
  }, []);

  const getAverages = () => 
     (<div className="average">
      Average {calls.sum > 0 ? Number(calls.sum / calls.times).toFixed(2) : '0'} m/s
    </div>);
  
  const changeLocation = (typestr) => (event) => {
    setLocation({ ...location, [typestr]: event.target.value });
  };

  const changeQuery = (event) => {
    setQuery(event.target.value);
    if (!event.target.value) {
      setMessage('');
      setSuggestions(null);
      return;
    }
    if (event.target.value.length < 5) {
      autocompleteSearchThrottled({query:event.target.value, calls, location, setSuggestions, setCalls, setMessage});
    } else {
      autocompleteSearchDebounced({query:event.target.value, calls, location, setSuggestions, setCalls, setMessage});
    }
  };

  return (
    <div className="center">
    {getAverages()}
    <div className="App-container">
      <img
        className="App-logo"
        src={require('./logo.png')}
        alt="Logo challenge Jonas"
        />
      <div className="App-input-container">
 
      <input
       className="App-input-search"
        placeholder="Type something here"
        type="text"
        value={query}
        onChange={changeQuery}
        />

      <input
        className="App-input-lat"
        placeholder="Latitude"
        type="text"
        value={location.latitude}
        onChange={changeLocation('latitude')}
        />
      <input
        className="App-input-long"
        placeholder="Longitude"
        type="text"
        value={location.longitude}
        onChange={changeLocation('longitude')}
        />
        </div>
      {suggestions?.length  ? 
      <ol>
        {suggestions.map((s, i) => {
          return (
            <>
            <li key={s + i}>
              {s.name}
              <span className="similarity">{Number(s.score * 100).toFixed(2)} % similarity</span>
            </li>
            <hr />
            </>
          );
        })}
      </ol>
      : message}
    </div>
        </div>
  );
};

export default App;
