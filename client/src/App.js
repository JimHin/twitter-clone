import React, { useEffect, useState } from 'react';

import Content from './components/Content/Content';
import Header from './components/Header/Header';
import './style.css';



function App() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    fetch('https://api.yourein.space/feed')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTweets(data);
      });
  }, []);

  return (
    <div className="main">
      <Header />
      <Content tweets={tweets} />
    </div>
  );
}

export default App;
