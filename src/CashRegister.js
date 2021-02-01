import React from 'react';
import './CashRegister.css';
import {Redirect} from 'react-router-dom';
import {Container, Col, Row} from 'react-bootstrap';

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
            <Container>
                <Row>
                    <Col>
                        This is for checking out items.
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Container>
                    <Row>
                        <Col>
                            <div className="denominations">
                                <div>Penny </div>
                                <div>{this.state.Penny}</div>
                            </div>
                            <div className="denominations">
                                <div>Dime </div>
                                <div>{this.state.Dime}</div>
                            </div>
                            <div className="denominations">
                                <div>Nickel </div>
                                <div>{this.state.Nickel}</div>
                            </div>
                            <div className="denominations">
                                <div>Quarter </div>
                                <div>{this.state.Quarter}</div>
                            </div>
                        </Col>
                        <Col>
                            <div className="denominations">
                                <div>$1 </div>
                                <div>{this.state.One}</div>
                            </div>
                            <div className="denominations">
                                <div>$2 </div>
                                <div>{this.state.Two}</div>
                            </div>
                            <div className="denominations">
                                <div>$5 </div>
                                <div>{this.state.Five}</div>
                            </div>
                            <div className="denominations">
                                <div>$10 </div>
                                <div>{this.state.Ten}</div>
                            </div>
                        </Col>
                        <Col>
                            <div className="denominations">
                                <div>$20 </div>
                                <div>{this.state.Twenty}</div>
                            </div>
                            <div className="denominations">
                                <div>$50 </div>
                                <div>{this.state.Fifty}</div>
                            </div>
                            <div className="denominations">
                                <div>$100 </div>
                                <div>{this.state.OneHundred}</div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="denominations">
                            <div>Cash </div>
                            <div>
                            ${this.state.Cash.toFixed(2)}
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Container>
                    </Col>
                    <Col>
                        This is for groceries.
                    </Col>
                </Row>
            </Container> : <Redirect to="/"/>
        );    
    }
}

export default CashRegister;