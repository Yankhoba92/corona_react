import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from "react";
const Oceanie = (props)=>{
    const [countriesOceanie, setcountriesOceanie] = useState(null)
    useEffect( async() => {
      const result = await axios("https://restcountries.eu/rest/v2/region/asia")
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
                            <th>Country</th>
                            <th>Total Cases</th>
                            <th>New Cases</th>
                            <th>Serious Critical</th>
                            <th>Total Deaths</th>
                            <th>New Deaths</th>
                            <th>Total recovered</th>
                            <th>New recovered</th>
                        </tr>
                    </thead>
           {newArray !== null ? newArray.map((donnes, index)=>{
            return (
                <tbody>
                    <td>{index}</td>
                    <td className="paysStyle">{donnes.name}</td>
                    <td>{donnes.total_cases}</td>
                    <td className={donnes.change.active_cases >=0?"newCas":"newsDeath"}>{donnes.change.active_cases}</td>
                    <td>{donnes.critical}</td>
                    <td>{donnes.deaths}</td>
                    <td className={donnes.change.deaths <=0?"newCas":"newsDeath"}>{donnes.change.deaths}</td>
                    <td>{donnes.recovered}</td>
                    <td className={donnes.change.recovered >=0?"newCas":"newsDeath"}>{donnes.change.recovered}</td>
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


    
    
 