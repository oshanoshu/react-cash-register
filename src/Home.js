import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import DenominationForm from './DenominationForm';

class Home extends React.Component{
    constructor(props)
    {
        super(props);
        this.state ={
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
            OneHundred: 0,
            Debit: 0,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event)
    {
        const value = event.target.value;
        const name = event.target.id;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event)
    {
        event.preventDefault();
        this.props.history.push({
            pathname: '/cashregister',
            denominations: this.state
        });
    }

    render()
    {
        return(
            <div>
            <Form onSubmit={this.handleSubmit} style = {{margin: 15}}>
                <DenominationForm cashandbills={this.state} handleChange={this.handleChange}/>
                <Form.Row>
                    <Form.Group as = {Col} controlId="Debit">
                        <Form.Label>Bank Balance</Form.Label>
                        <Form.Control type="number" placeholder="0" min = "0" value = {this.state.Debit} onChange ={this.handleChange}/>
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
            </div>
        );    
    }
}


export default Home;