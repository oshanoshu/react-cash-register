import React, {useState} from 'react';
import './CashRegister.css';
import {Redirect} from 'react-router-dom';
import {Container, Col, Row, Form, Button, Modal, } from 'react-bootstrap';
import DenominationForm from './DenominationForm';

const denominations = {'OneHundred': 100, 'Fifty': 50, 'Twenty': 20, 'Ten': 10, 'Five': 5, 'Two': 2, 'One': 1, 'Quarter': 0.25, 'Dime': 0.1, 'Nickel': 0.05,'Penny': 0.01};

class CashRegister extends React.Component{
    //Constructor for state and props
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
            CashAndBills: {
            },
            Change: 0,
            Total: 0,
            Cost: 0,
            Method: "",
            Temp: 0
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.resetCashAndBills = this.resetCashAndBills.bind(this);
        this.handleReturns =this.handleReturns.bind(this);
    }


    //Form for cost and change
    handleSubmit(event)
    {
        event.preventDefault();
        if(this.state.Method === 'debit')
        {
            console.log(this.state.Cost)
            this.setState((state) => ({
                Debit: Number(state.Debit) + Number(state.Cost)
            }));
        }
        else
        {
            this.setState((state) => ({
                Cash: Number(state.Cash) + Number(state.Cost)
            }));
            this.handleReturns();
        }
    }


    //Takes input for cost and change
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




    //Sets up the first dom
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

        this.setState((state) => ({
            CashAndBills: {
                Penny: Number(state.Penny), 
                Dime: Number(state.Dime), 
                Nickel: Number(state.Nickel),
                Quarter: Number(state.Quarter),
                One: Number(state.One),
                Two: Number(state.Two),
                Five: Number(state.Five),
                Ten: Number(state.Ten),
                Twenty: Number(state.Twenty),
                Fifty: Number(state.Fifty),
                OneHundred: Number(state.OneHundred)
            }
        }));
        this.resetCashAndBills();
    }



    //handles input of cash and bills
    handleForm(event)
    {
        const value = event.target.value;
        const name = event.target.id;

        this.setState((state) => ({
            [name] : value
        }))
    }


    //Reset the cash and bills current amount
    resetCashAndBills()
    {
        this.setState({
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
        })
    }


    //Updates the cash and bills after each sale

    submitForm()
    {
        // let Cash = 0;
        // for(let bill in this.state.CashAndBills)
        // {
        //     console.log(bill);
        //     Cash += (Number(this.state[bill]) * denominations[bill])
        // }
        this.setState((state) => ({
            CashAndBills: {
                Penny: state.CashAndBills.Penny + Number(state.Penny), 
                Dime: state.CashAndBills.Dime + Number(state.Dime), 
                Nickel: state.CashAndBills.Nickel + Number(state.Nickel),
                Quarter: state.CashAndBills.Quarter + Number(state.Quarter),
                One: state.CashAndBills.One + Number(state.One),
                Two: state.CashAndBills.Two + Number(state.Two),
                Five: state.CashAndBills.Five + Number(state.Five),
                Ten: state.CashAndBills.Ten + Number(state.Ten),
                Twenty: state.CashAndBills.Twenty + Number(state.Twenty),
                Fifty: state.CashAndBills.Fifty + Number(state.Fifty),
                OneHundred: state.CashAndBills.Fifty + Number(state.OneHundred)
            }
        }));
        this.resetCashAndBills();
    }

    //Renders the dom
    render()
    {
        const changeRecieved = <Form.Group controlId="Change">
                                    <Form.Label>Change Received: &nbsp;</Form.Label>
                                    <Form.Control type="number" placeholder="Only If Cash" min="0" value={this.state.Change} onChange={this.handleChange}/>
                                </Form.Group>;
        let dataExists = false;
        if('denominations' in this.props.location)
        {
            dataExists = true;
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
                        {this.state.Method === 'cash' ? <AddCash cashandbills = {this.state} handleChange = {this.handleForm} submitForm = {this.submitForm} />: null}
                        {this.state.Method === 'cash' ? changeRecieved: null}
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

    //handle what happens after the change is returned 

    handleReturns()
    {
        let changeDue = this.state.Change - this.state.Cost;
        for (let bill in denominations)
        {
            //let didAnythingHappen = false;
            while(changeDue >= denominations[bill])
            {
                changeDue -= denominations[bill];
                this.setState((state) => ({
                    CashAndBills: {
                        ...state.CashAndBills,
                        [bill]: state.CashAndBills[bill]-1
                    }
                }))
            }
        }
    }
}
//Dom for Cash and bills
function CashAndBills(props)
{
    return(
        <Container>
        <Row>
            <Col>
                <div className="denominations">
                    <div>Penny </div>
                    <div>{props.cashandbills.CashAndBills.Penny}</div>
                </div>
                <div className="denominations">
                    <div>Dime </div>
                    <div>{props.cashandbills.CashAndBills.Dime}</div>
                </div>
                <div className="denominations">
                    <div>Nickel </div>
                    <div>{props.cashandbills.CashAndBills.Nickel}</div>
                </div>
                <div className="denominations">
                    <div>Quarter </div>
                    <div>{props.cashandbills.CashAndBills.Quarter}</div>
                </div> 
            </Col>
            <Col>
                <div className="denominations">
                    <div>$1 </div>
                    <div>{props.cashandbills.CashAndBills.One}</div>
                </div>
                <div className="denominations">
                    <div>$2 </div>
                    <div>{props.cashandbills.CashAndBills.Two}</div>
                </div>
                <div className="denominations">
                    <div>$5 </div>
                    <div>{props.cashandbills.CashAndBills.Five}</div>
                </div>
                <div className="denominations">
                    <div>$10 </div>
                    <div>{props.cashandbills.CashAndBills.Ten}</div>
                </div>
            </Col>
            <Col>
                <div className="denominations">
                    <div>$20 </div>
                    <div>{props.cashandbills.CashAndBills.Twenty}</div>
                </div>
                <div className="denominations">
                    <div>$50 </div>
                    <div>{props.cashandbills.CashAndBills.Fifty}</div>
                </div>
                <div className="denominations">
                    <div>$100 </div>
                    <div>{props.cashandbills.CashAndBills.OneHundred}</div>
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


//Add cash after each sale
function AddCash(props)
{
    const [show, setShow] = useState(false);
    const handleModalShow = () => {setShow(true)};
    const handleModalClose = () => {
        props.submitForm();
        setShow(false)
    };
    
    return (
        <>
            <Button onClick={handleModalShow}>Add Cash</Button>
            <Modal show = {show} onHide = {handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Cash</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DenominationForm cashandbills={props.cashandbills} handleChange={props.handleChange}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleModalClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default CashRegister;