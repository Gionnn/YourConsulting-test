import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className='home-container'>
      <button className='home-btn'>
        <Link to='/persoane'>Persoane</Link>
      </button>
      <button className='home-btn'>
        <Link to='/masini'>Masini</Link>
      </button>
    </div>
  );
};

export default Home;
