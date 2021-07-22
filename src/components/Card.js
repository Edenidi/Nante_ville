import React from 'react';

const Card = (props) => {

    const {country} = props ; 
    
    return (
        <li className="card">
            <div className="data-container">
                <table>
                    <tr>
                      
                        <td> ______ {country.name}</td>
                        <td> ______ {country.locale}</td>
                        <td> ______ {country.nationale}</td>
                        <td> ______ {country.lat}</td>
                        <td> ______{country.lng}</td>  
                        <td> ______{country.départementale}</td>
                        <td> ______{country.appartements}</td>
                        <td> ______{country.maisons}</td>
                        <td> ______{country.T1}</td>
                        <td> ______{country.T2}</td>
                        <td> ______{country.T3}</td>
                        <td> ______{country.T4p}</td>


                    </tr>
                </table>
            </div>
        </li>
        );
        

}
export default Card ;
