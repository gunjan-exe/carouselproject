import './App.css';
import Carousel from './Components/carousel';
import { places } from './Helper/CarouselData';

function App() {
  return (
    <div className='TopContent'>
      <h1 align = "center">This Is India </h1>
    <div className="App">
      <div className='Inner'>
      <Carousel images = { places }/>
      </div>
    </div>
    </div>
  );
}

export default App;
