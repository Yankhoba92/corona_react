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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
            : 
            <section className="containerTableau">
                <table className="tableStyle">
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
                    <tbody>
                        {data.map((country, index) => {
                            // console.log("changement: ",country.change)
                            return(
                                <tr>
                                    <td>{index}</td>
                                    <td className="paysStyle">{country.name}</td>
                                    <td>{country.total_cases}</td>
                                    <td className={country.change.active_cases >=0?"newCas":"newsDeath"}>{country.change.active_cases}</td>
                                    <td>{country.critical}</td>
                                    <td>{country.deaths}</td>
                                    <td className={country.change.deaths <=0?"newCas":"newsDeath"}>{country.change.deaths}</td>
                                    <td>{country.recovered}</td>
                                    <td className={country.change.recovered >=0?"newCas":"newsDeath"}>{country.change.recovered}</td>
                                </tr>
                            )
                        })} 
                    </tbody>               
                </table>
            </section>}
         </div>        
    )
}
export default AllCountries