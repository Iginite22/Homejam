import './App.css';
import Navbar from './components/Navbar';
import Center from './components/Center';
import Card from './components/Card';
import Upround from './components/Uround';
import Review from'./components/Review';
import Slider from './components/Slider';
// import Content from './components/Content';
function App() {
  return (
    <div>
      <Navbar />
      <div className="container" style={{margin:"50px",display:"flex",justifyContent:"center"}}>
      <Center/>
      </div>
      <Upround></Upround>
      <Slider></Slider>
      <Card></Card>
      <Review></Review>
    </div>
  );
}

export default App;
