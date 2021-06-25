import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from "react";
const AllCountries = (props) =>{
    const [data, setData] = useState(null)
    useEffect( async() => {
        const result = await axios("https://api.quarantine.country/api/v1/summary/latest")
        // console.log(result.data.data.regions)
        let myArray = Object.values(result.data.data.regions)
        setData(myArray)
        // console.log(myArray[0].change)
    }, [])
    return(
        <div>
            {data === null ? 
            <p>No Result</p> 
            : 
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
                    {data.map((country, index) => {
                        // console.log("changement: ",country.change)
                        return(
                            <tbody>
                                <td>{index}</td>
                                <td className="paysStyle">{country.name}</td>
                                <td>{country.total_cases}</td>
                                <td className={country.change.active_cases >=0?"newCas":"newsDeath"}>{country.change.active_cases}</td>
                                <td>{country.critical}</td>
                                <td>{country.deaths}</td>
                                <td className={country.change.deaths <=0?"newCas":"newsDeath"}>{country.change.deaths}</td>
                                <td>{country.recovered}</td>
                                <td className={country.change.recovered >=0?"newCas":"newsDeath"}>{country.change.recovered}</td>
                            </tbody>
                        )
                    })}
                   
                </div>
                </table>
            </section>}
         </div>        
    )
}
export default AllCountries