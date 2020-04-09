import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a>
          <div>
            1
            <a> Дата</a>
            <input placeholder={"Date"}/>
          </div>
          <div>2
            <a> Тип тренировки</a>
            <input placeholder={"Training type"}/>
          </div>
          <div>3
            <a> Дистанция</a>
            <input placeholder={"Distance"}/>
          </div>
          <div>3
            <a> Комментарий</a>
            <input placeholder={"Comment"}/>
          </div>
        </a>
        <div>
          <button>Добавить</button>
        </div>
      </header>
    </div>
  );
}

export default App;
