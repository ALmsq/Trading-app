import React from 'react'


function Users(props) {
    // console.log(props.users.user.name)
    // console.log(props.users.coin)
    return (
        <div className='card'>
            <div>
               <p>
                   {props.users.user.name}
               </p>

               <p>
                   {props.users.coin.ticker}
                </p>

                   <p>
                   {props.users.coin.name}
                   </p>

                   <p>
                       {props.users.coin.price}
                   </p>

                <br/>
               
            </div>
            
        </div>
    )
}

export default Users

