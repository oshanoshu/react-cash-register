import React from 'react';
import './CashRegister.css';
import {Redirect} from 'react-router-dom';
import {Container, Col, Row, Form, Button} from 'react-bootstrap';

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
            Total: 0,
            Cost: 0,
            Method: "",
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event)
    {
        event.preventDefault();
        if(this.state.Method === 'debit')
        {
            console.log(this.state.Cost)
            this.setState((state) => ({
                Debit: Number(state.Debit) + Number(state.Cost)
            }))
        }
        else
        {
            this.setState((state) => ({
                Cash: Number(state.Cash) + Number(state.Cost)
            }))
        }
    }

    handleChange(event)
    {
        const value = event.target.value;
        const name = event.target.id;
        this.setState(
            {
                [name]: value
            }
        )

    }

    componentDidMount(){
        for (let key in this.props.location.denominations)
        {
            if(key !== "Debit")
            {
                // totalCash += this.props.location.denominations[key]
                let numberOfBills = this.props.location.denominations[key]
                this.setState((state) => ({
                    [key] : Number(numberOfBills),
                    Cash : state.Cash + (Number(numberOfBills) * denominations[key])
                }))
            }
            else
            {
                this.setState((state) => ({
                    [key]: Number(this.props.location.denominations[key])
                }))
            }
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
                    <Form onSubmit={this.handleSubmit} >
                        <Form.Group controlId="Cost">
                            <Form.Label>Cost &nbsp;</Form.Label>
                            <Form.Control type="number" placeholder="$0.00" min="0" value={this.state.Cost} onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group controlId="Method">
                            <Form.Label>Payment Method &nbsp;</Form.Label>
                            <Form.Check type="radio" label="Cash"  value="cash" checked={this.state.Method==="cash"} onChange={this.handleChange}/>
                            <Form.Check type="radio" label="Debit" value="debit" checked={this.state.Method==="debit"} onChange={this.handleChange}/>
                        </Form.Group>
                        <Button variant="outline-success" type="submit">
                            Submit
                        </Button>
                    </Form>
                    </Col>
                    <Col>
                        This is for something
                    </Col>
                </Row>
                <Row>
                    <Col>
                        This is for groceries.
                    </Col>
                    <Col>
                        <CashAndBills cashandbills={this.state}/>
                    </Col>
                </Row>
            </Container> : <Redirect to="/"/>
        );    
    }
}


function CashAndBills(props)
{
    // const coins = props.cashandbills.map((number) => 
    //     <div className="denominations">
    //         <div>{[number]}</div>
    //         <div>{number}</div>
    //     </div>
    // )
    return(
        <Container>
        <Row>
            <Col>
                <div className="denominations">
                    <div>Penny </div>
                    <div>{props.cashandbills.Penny}</div>
                </div>
                <div className="denominations">
                    <div>Dime </div>
                    <div>{props.cashandbills.Dime}</div>
                </div>
                <div className="denominations">
                    <div>Nickel </div>
                    <div>{props.cashandbills.Nickel}</div>
                </div>
                <div className="denominations">
                    <div>Quarter </div>
                    <div>{props.cashandbills.Quarter}</div>
                </div> 
            </Col>
            <Col>
                <div className="denominations">
                    <div>$1 </div>
                    <div>{props.cashandbills.One}</div>
                </div>
                <div className="denominations">
                    <div>$2 </div>
                    <div>{props.cashandbills.Two}</div>
                </div>
                <div className="denominations">
                    <div>$5 </div>
                    <div>{props.cashandbills.Five}</div>
                </div>
                <div className="denominations">
                    <div>$10 </div>
                    <div>{props.cashandbills.Ten}</div>
                </div>
            </Col>
            <Col>
                <div className="denominations">
                    <div>$20 </div>
                    <div>{props.cashandbills.Twenty}</div>
                </div>
                <div className="denominations">
                    <div>$50 </div>
                    <div>{props.cashandbills.Fifty}</div>
                </div>
                <div className="denominations">
                    <div>$100 </div>
                    <div>{props.cashandbills.OneHundred}</div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
            <div className="denominations">
                <div>Cash </div>
                <div>
                ${props.cashandbills.Cash.toFixed(2)}
                </div>
            </div>
            </Col>
        </Row>
        <Row>
            <Col>
            <div className="denominations">
                <div>Debit </div>
                <div>
                ${props.cashandbills.Debit.toFixed(2)}
                </div>
            </div>
            </Col>
        </Row>
    </Container>
    );
}

export default CashRegister;