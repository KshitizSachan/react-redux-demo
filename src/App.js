import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './components/CakeContainer';

// Tracking the working of this application

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    {/* Step 1: sending control to src/Component/CakeContainer */}
     <CakeContainer/>    
    </div>
    </Provider>
  );
}

export default App;
