import {
    Link
  } from "react-router-dom";
const Main =(props) =>{
    // console.log(props.data)
    const myArray = Object.values(props.data)
    console.log(myArray)
    let sumCovid = 0
    let sumDeces = 0
    myArray.forEach((test) =>{
        // console.log(test)
        if(test !== null){
          sumCovid+= test.total_cases 
          sumDeces+= test.deaths
        }else{
        <p>No results</p>
        }   
    })
    console.log("somme covid",sumCovid)
    console.log("somme deces",sumDeces)
    
    
    return(
        <div className="container">
            <h2 id="coronavirus">Le monde</h2>
            <div className="graphic">        
                <div className="casCovid">

                <div><img src="https://res.cloudinary.com/e-bureau/image/upload/v1624001721/kisspng-chart-portable-network-graphics-computer-icons-dia--5b6ee9669e2d83.8590197315339953666479_cymlu9.png"/></div>
                    <p className="">Population mondial</p>
                    <p className="somme">7,873,191,432</p>
                </div>
                <div className="casCovid">
                <div><img src="https://res.cloudinary.com/e-bureau/image/upload/v1624002569/kisspng-business-statistics-average-economic-statistics-green-rising-bar-chart-and-arrow-image-5aa6ff8e45a5f5.3559800315208938382853_t3pfqf.png"/></div>
                    <p className="">Nombre de cas de covid 19 dans le monde</p>
                    <p className="somme">{sumCovid}</p>
                </div>
                <div className="casCovid">
                    <div><img src="https://res.cloudinary.com/e-bureau/image/upload/v1624002143/graphs-37717_960_720_vzvcdn.png"/></div>
                    <p className="">Décès due au covid 19</p>
                    <p className="somme">{sumDeces}</p>
                </div>
            </div>
            <h2 id="country">Tableau de bord</h2>
            <nav className="navCountry">
                <ul>
                    <li><Link to="/">All</Link></li>
                    <li><Link to="/afrique">Afrique</Link></li>
                    <li><Link to="/asie">Asie</Link></li>
                    <li><Link to="/amerique">Amérique</Link></li>
                    <li><Link to="/europe">Europe</Link></li>
                    <li><Link to="/oceanie">Océanie</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Main