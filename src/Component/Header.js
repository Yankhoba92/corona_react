import {
    Link
  } from "react-router-dom";
  const Header = () =>{
    return(
        <div>
            <div className="navbarHeader">
            <header>
                <div className="logo">
                    <Link to="/"><img src="https://res.cloudinary.com/e-bureau/image/upload/v1624999410/picto-covid-19_b1uirn.png" alt="" title="logo"/></Link>
                </div>
                <nav>
                    <ul>
                        <li><a href="#coronavirus">Coronavirus</a></li>
                        <li><a href="#country">Dashboard</a></li>
                    </ul>
                </nav>
            </header>
            
        </div>
        <div className="background">
            </div>
        </div>
        
    )
}
export default Header