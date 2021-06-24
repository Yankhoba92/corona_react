import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from "react";
const Oceanie = (props)=>{
    const [countriesOceanie, setcountriesOceanie] = useState(null)
    useEffect( async() => {
      const result = await axios("https://restcountries.eu/rest/v2/region/europe")
    //   console.log(result.data)
      const myArray = Object.values(result.data)
      const myArrayArray = myArray.map((test) =>{
        return(test.name)
    })
      setcountriesOceanie(myArrayArray)
  }, [])

//   console.log("props donné",props.data)
//   console.log("oceanie countries",countriesOceanie)
  let newArray = null
    if(countriesOceanie && props.data  ){
         newArray = props.data.filter((el) => {
            if(el == null){
                <p>No Result</p>
             }else{
                 return (
                    countriesOceanie.indexOf(el.name) !== -1
                    )
             }
    })
    }
    // console.log("array filtré",newArray)
    return(
        <div>
            
            <section className="containerTableau">
                <table class="table table-bordered">
                <div>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Pays</th>
                            <th>Cas de covid</th>
                            <th>Cas critique</th>
                            <th>Décès</th>
                            <th>Guérisons</th>
                            <th>Taux de décés</th>
                            <th>Taux de guérisons</th>
                        </tr>
                    </thead>
           {newArray !== null ? newArray.map((donnes, index)=>{
            return (
                <tbody>
                    <td>{index}</td>
                    <td className="paysStyle">{donnes.name}</td>
                    <td>{donnes.total_cases}</td>
                    <td>{donnes.critical}</td>
                    <td>{donnes.deaths}</td>
                    <td>{donnes.recovered}</td>
                    <td>{donnes.death_ratio}%</td>
                    <td>{donnes.recovery_ratio}%</td>
                </tbody>
            )
            }): <p>No Result</p>}
            </div>
                </table>
            </section> 
        </div>
        
       
    )
}
export default Oceanie


    
    
 