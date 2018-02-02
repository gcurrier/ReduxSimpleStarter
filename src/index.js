import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YT_KEY from './youtube_key';

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('.container'));