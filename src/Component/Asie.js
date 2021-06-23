import 'bootstrap/dist/css/bootstrap.min.css';
const Asie = (props)=>{
   
     // FAIRE UN AGLORITHME POUR FILTRER LES DATAS ET AFFHICHER SEULEMENT LES PAYS D'AFRIQUE
    
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
                    <td className="paysStyle">{donnes.name}</td>
                    <td>{donnes.total_cases}</td>
                    <td>{donnes.critical}</td>
                    <td>{donnes.deaths}</td>
                    <td>{donnes.recovered}</td>
                    <td>{donnes.death_ratio}%</td>
                    <td>{donnes.recovery_ratio}%</td>
                </tbody>
            )
            })}
            </div>
                </table>
            </section> 
        </div>
        
       
    )
}
export default Asie


    
    
 