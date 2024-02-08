import {Link} from "react-router-dom"



const Hero = () => {
  return (
    <>
    
    <div className="hero-section">
      <div className="hero-second">
        <img src="../src/assets/rr.png" alt="pokemon"/>
        <div className="btnContainer">
       <Link to={"/pokemon"}><button className="btn-23">
          <span className="text">Play </span>
          <span aria-hidden="" className="marquee">
            Play
          </span>
        </button></Link> 
      </div>
      </div>
      </div>
    </>
  );
};

export default Hero;
