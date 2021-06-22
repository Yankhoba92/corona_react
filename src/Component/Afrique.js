import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useEffect, useState } from "react";
import dataAfrique from '../assets/CountryAfrique'

const Afrique = (props)=>{
    const [data, setDataAfrique] = useState(null)
    useEffect( async() => {
        const result = await axios("https://api.quarantine.country/api/v1/summary/latest")
        // console.log(result.data.data.regions)
        let myArray = Object.values(result.data.data.regions)
        setDataAfrique(myArray)
        console.log(myArray)
    }, [])
    let africa
     // FAIRE UN QGLORITUE? POUR FILTRER LES DATS ET AFFHICHER SEULE?MENT LES PQYS D QFRIAUE
    
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
           {props.data.map((donnes, index)=>{
            return (
            <tbody>
                    <td>{index}</td>
                    <td className="paysStyle">{donnes}</td>
                    
                </tbody>)
            })}
            </div>
                </table>
            </section>
            {console.log(africa)}     
        </div>
        
       
    )
}
export default Afrique


    
    
 