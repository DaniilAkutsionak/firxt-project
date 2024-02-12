import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
   <div className='App'>
    {/*<Accordian></Accordian>*/}
    {/*<RandomColor></RandomColor>*/}
    {/*<StarRating noOfStars={10}></StarRating>*/}
    {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'4'}></ImageSlider>*/}
    <LoadMoreData></LoadMoreData>
   </div>
  );
}

export default App;
