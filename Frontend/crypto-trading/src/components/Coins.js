import React from 'react'


const Coins = (props) => {
    // console.log(props.coins)
        

    return (
        <div className='card'>
            {/* <div>
               <a>
                   {props.coins.name}
               </a>
               <p>
                   {props.coins.ticker + ' ' + props.coins.price}
               </p>
               
            </div>
             */}

             {/* <table>
             <thead className = 'thead-dark'>
                        <tr>
                        <th scope='col'>Rank</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Cap</th>
                        <th scope='col'>Price</th>
                        <th scope='col'>Ath</th>
                        </tr>
                    </thead>
             <tbody>
                <tr>
                    <th scope="row">{props.coins.rank}</th>
                    <td>{props.coins.name}</td>
                    <td>{props.coins.price}</td>
                    <td>@mdo</td>
                </tr>
                
            </tbody>
             </table> */}
        </div>
    )
}

export default Coins
