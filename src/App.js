import React,{useState,useEffect} from 'react';
import  {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import './App.css';
import Games from './components/Games';
import Softwares from './components/Softwares';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import { createClient } from 'pexels';


function App() {
//   const client = createClient('563492ad6f91700001000001677d3782bd1f45a2856535a8a2d367b6');
//   const [getImages,setImages]= useState({
//     image:[],
//   });
//   const imagesShow=()=>{
//     client.photos.search({ query:"Nature", per_page: 1 }).then(photos => {
//     setImages({
//       image:photos
//     })
//     })
// }
  // useEffect(()=>{
  //   imagesShow()
  //   console.log(getImages)
      
  // },[])
  return (
   <Router>
   <div className="App">
   <Nav />
        <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/games" component={Games} />
       <Route path="/softwares" component={Softwares} />
       <Route path="/gallery" component={Gallery} />
       <Route path="/about" component={About} />
     </Switch>
     </div>
   </Router>
  );
}
const Home=()=>{
  return(
    <div>
    <h1>Home page</h1>  
    </div>
  );
}

export default App;
