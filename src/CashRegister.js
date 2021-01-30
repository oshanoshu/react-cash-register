import React from 'react';
import './CashRegister.css';
import {Redirect} from 'react-router-dom';

class CashRegister extends React.Component{

    constructor(props)
    {
        super(props);
    }


    render()
    {
        let dataExists = false;
        if('denominations' in this.props.location)
        {
            dataExists = true;
            console.log(dataExists);

        }
        return(
            dataExists ?
            <div className="register">
                <div className="denominations">
                    <h1>Penny</h1>
                    <p>{this.props.location.denominations.Penny}</p>
                </div>
                <div className="denominations">
                    <h1>Dime</h1>
                </div>
                <div className="denominations">
                    <h1>Nickel</h1>
                </div>
                <div className="denominations">
                    <h1>Quarter</h1>
                </div>
                <div className="denominations">
                    <h1>$1</h1>
                </div>
                <div className="denominations">
                    <h1>$5</h1>
                </div>
                <div className="denominations">
                    <h1>$10</h1>
                    <p>$0.01</p>
                </div>
                <div className="denominations">
                    <h1>$20</h1>
                    <p>$0.01</p>
                </div>
                <div className="denominations">
                    <h1>$50</h1>
                    <p>$0.01</p>
                </div>
                <div className="denominations">
                    <h1>$100</h1>
                    <p>$0.01</p>
                </div>
            </div> : <Redirect to="/"/>
        );    
    }
}

export default CashRegister;