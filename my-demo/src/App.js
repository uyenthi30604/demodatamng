import './App.css';
import Content from './components/Content'
import Banner  from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-custom-gradient overflow-hidden'>
      <Banner />
      {/* <div className='text-end'>
        <h1>Hello</h1>
        <p style={{color:"grey", fontSize:"13px"}}>Inspired by Cristian Mihai</p>
      </div> */}
      <Content />
      <Footer />
      <div className='text-end pr-2'>
        <p style={{color:"grey", fontSize:"13px"}}>Developed by Uyen Thi</p>
      </div>
    </div>
  );
}

export default App;
