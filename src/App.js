import { Provider } from 'react-redux';
import './App.css';
import store from './components/utils/appStore';
import Body from './components/Body';

function App() {
  return (
    <Provider store={store}>
    <>
    {/* <MainContainer/> */}
    <Body/>
    </>
    </Provider>
      
  );
}

export default App;
