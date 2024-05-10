import { Provider } from 'react-redux';
import './App.css';
import MainContainer from './components/MainContainer';
import store from './components/utils/appStore';

function App() {
  return (
    <Provider store={store}>
    <>
    <MainContainer/>
    </>
    </Provider>
      
  );
}

export default App;
