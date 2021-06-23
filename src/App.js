import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Main from './Component/Main';
import AllCountries from './Component/AllCountries';
import Afrique from './Component/Afrique';
import Asie from './Component/Asie';
import Amerique from './Component/Amerique';
import Europe from './Component/Europe';
import Oceanie from './Component/Oceanie';
import axios from 'axios';
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
function App() {
  const [data, setData] = useState([null])
  useEffect( async() => {
    const result = await axios("https://api.quarantine.country/api/v1/summary/latest")
    // console.log(result.data.data.regions)
    const myArray = Object.values(result.data.data.regions)
    setData(myArray)
    // console.log(myArray)
}, [])
// ICI USEEFFETCT POUR RECUPERER LES DATAS


  return (
    <div >
     <Router>
       <Header />
       <Main/>
       <Switch>
         <Route path="/afrique">
           <Afrique data={data}/>
         </Route>
         <Route path="/asie">
           <Asie data={data}/>
         </Route>
         <Route path="/amerique">
           <Amerique data={data}/>
         </Route>
         <Route path="/europe">
           <Europe data={data}/>
         </Route>
         <Route path="/oceanie">
           <Oceanie data={data}/>
         </Route>
         <Route path="/">
          <AllCountries data={data}/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
