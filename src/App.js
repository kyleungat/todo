import React, {useState} from 'react';
import './App.css';
import FolderContainer from './components/FolderContainer'
import TodoContainer from './components/TodoContainer'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Provider store={store}>
      <div className="App">
        <i className="fas fa-bars hamburger" onClick={() => setIsActive(!isActive)}></i>
        <FolderContainer isActive={isActive}/>
        <TodoContainer isActive={!isActive}/>
      </div>
    </Provider>
  );
}

export default App;
