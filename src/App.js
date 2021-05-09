import logo from './logo.svg';
import './App.css';
import Blog from './components/Blog';
import Header from './components/Header';
import Counter from './components/Counter';
import Footer from './components/Footer';
function App() {
  const appjsClick=()=>{
    console.log('Click in App.js')
  }
  return (
    <div className="App" htmlFor="">
      <Header appjsClick={appjsClick}/>
      <Counter></Counter>
      <Footer></Footer>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        
          Hello World!!!
          {/* <Blog></Blog> */}

        
      {/* </header> */} 
    </div>
  );
}

export default App;
