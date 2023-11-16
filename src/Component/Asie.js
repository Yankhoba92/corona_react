import axios from 'axios';
import { useEffect, useState } from "react";
const Oceanie = (props)=>{
    const [countriesOceanie, setcountriesOceanie] = useState(null)
    useEffect( async() => {
      const result = await axios("https://restcountries.com/v3.1/region/asia")
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
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
                <table class="tableStyle">
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
                    <tbody>
                        {newArray !== null ? newArray.map((donnes, index)=>{
                            return (
                                <tr>
                                    <td>{index}</td>
                                    <td className="paysStyle">{donnes.name}</td>
                                    <td>{donnes.total_cases}</td>
                                    <td className={donnes.change.active_cases >=0?"newCas":"newsDeath"}>{donnes.change.active_cases}</td>
                                    <td>{donnes.critical}</td>
                                    <td>{donnes.deaths}</td>
                                    <td className={donnes.change.deaths <=0?"newCas":"newsDeath"}>{donnes.change.deaths}</td>
                                    <td>{donnes.recovered}</td>
                                    <td className={donnes.change.recovered >=0?"newCas":"newsDeath"}>{donnes.change.recovered}</td>
                                </tr>
                            )
                            }): <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>}
                    </tbody>
                    </div>
                        </table>
            </section> 
        </div>
        
       
    )
}
export default Oceanie


    
    
 