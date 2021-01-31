import React from 'react';
import './CashRegister.css';
import {Redirect} from 'react-router-dom';

const denominations = {'OneHundred': 100, 'Fifty': 50, 'Twenty': 20, 'Ten': 10, 'Five': 5, 'Two': 2, 'One': 1, 'Quarter': 0.25, 'Dime': 0.1, 'Nickel': 0.05,'Penny': 0.01};

class CashRegister extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            Penny: 0,
            Dime: 0,
            Nickel: 0,
            Quarter: 0,
            One: 0,
            Two: 0,
            Five: 0,
            Ten: 0,
            Twenty: 0,
            Fifty: 0,
            Onehundred: 0,
            Cash: 0,
            Debit: 0,
            Total: 0
        }
    }

    componentDidMount(){
        for (let key in this.props.location.denominations)
        {
            if(key !== "debit")
            {
                // totalCash += this.props.location.denominations[key]
                let numberOfBills = this.props.location.denominations[key]
                this.setState((state) => ({
                    [key] : Number(numberOfBills),
                    Cash : state.Cash + (Number(numberOfBills) * denominations[key])
                }))
            }
            // else
            // {
            //     this.setState({
            //         [key]: this.props.location.denomination.key
            //     })
            // }PropTypes.number
        }

        // this.setState((state) => ({
        //     Cash: totalCash,
        //     Total: state.Debit + state.Cash
        // }))
        
    }


    render()
    {
        console.log(this.state.Cash)
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
                    Penny: {this.state.Penny}
                </div>
                <div className="denominations">
                    Dime: {this.state.Dime}

                </div>
                <div className="denominations">
                    Nickel: {this.state.Nickel}
                </div>
                <div className="denominations">
                    Quarter: {this.state.Quarter}
                </div>
                <div className="denominations">
                    $1: {this.state.One}
                </div>
                <div className="denominations">
                    $2: {this.state.One}
                </div>
                <div className="denominations">
                    $5: {this.state.Five}
                </div>
                <div className="denominations">
                    $10: {this.state.Ten}
                </div>
                <div className="denominations">
                    $20: {this.state.Twenty}
                </div>
                <div className="denominations">
                    $50: {this.state.Fifty}
                </div>
                <div className="denominations">
                    $100: {this.state.OneHundred}
                </div>
                <div className="denominations">
                    Cash: {this.state.Cash}
                </div>
            </div> : <Redirect to="/"/>
        );    
    }
}

export default CashRegister;