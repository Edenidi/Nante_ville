import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation3 = () => {
    return (
        <div className='navigation'>  
            <NavLink exact to = 'Buy' activeClassName='nav-active'>
                Buy
            </NavLink>
            <NavLink exact to = 'Rent'activeClassName='nav-active'>
                Rent
            </NavLink>
        </div>
    );

}
export default Navigation3 ; 