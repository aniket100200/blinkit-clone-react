import NavBar from "./components/comp/NavBar";
import "./app.scss";
import HomeScreen from "./screens/home";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = ()=>{
  return (
   <Provider store={store}>
     <NavBar/>
     <HomeScreen/>
   </Provider>
  );
    
 
}

export default App;