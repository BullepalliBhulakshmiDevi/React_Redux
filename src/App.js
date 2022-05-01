import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/cakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import {Provider} from 'react-redux';
import store from './redux/store'
import IceCreamContainer from './components/iceCreamContainer';
import NewCakeContainer from './components/newCakeContainer';
import ItemContainer from './components/itemContainer';
import UserContainer from './components/userContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer/>
         {/* <ItemContainer cake/>
        <ItemContainer/>
        <HookCakeContainer/>
        <CakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/>  */}
      </div>
    </Provider>
  );
}

export default App;
