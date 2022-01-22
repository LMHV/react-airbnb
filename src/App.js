import './App.css';
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Card from './components/Card.jsx'
import data from './mock/data.js'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      
      <section className='card-section'>

        {data.map(item => (<Card item={item}/>))}

      </section>

    </div>
  );
}

export default App;
