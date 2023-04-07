import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
    {/* Method 1 using hooks */}
    <HooksCakeContainer />
    
    {/* Method 2 using connect function */}
     <CakeContainer/>
    </div>
    </Provider>
  );
}

export default App;
