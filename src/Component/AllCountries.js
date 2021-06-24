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
        // console.log(myArray)
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
                            <th>Pays</th>
                            <th>Cas de covid</th>
                            <th>Cas critique</th>
                            <th>Décès</th>
                            <th>Guérisons</th>
                            <th>Taux de décés</th>
                            <th>Taux de guérisons</th>
                        </tr>
                    </thead>
                    {data.map((country, index) => {
                        return(
                            <tbody>
                                <td>{index}</td>
                                <td className="paysStyle">{country.name}</td>
                                <td>{country.total_cases}</td>
                                <td>{country.critical}</td>
                                <td>{country.deaths}</td>
                                <td>{country.recovered}</td>
                                <td>{country.death_ratio}%</td>
                                <td>{country.recovery_ratio}%</td>
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