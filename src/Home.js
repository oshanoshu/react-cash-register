import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


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
            OneHundred: 0
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
        this.props.history.push({
            pathname: '/cashregister',
            denominations: this.state
        });
    }

    render()
    {
        return(
            
            <Form onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Form.Group as = {Col} controlId="Penny">
                        <Form.Label>Penny</Form.Label>
                        <Form.Control type="number" placeholder="0" value = {this.state.Penny} onChange ={this.handleChange}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId="Dime">
                        <Form.Label>Dime</Form.Label>
                        <Form.Control type="number" placeholder="0" value = {this.state.Dime} onChange ={this.handleChange}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId="Nickel">
                        <Form.Label>Nickel</Form.Label>
                        <Form.Control type="number" placeholder="0" value = {this.state.Nickel} onChange ={this.handleChange}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as = {Col} controlId="Quarter">
                        <Form.Label>Quarter</Form.Label>
                        <Form.Control type="number" placeholder="0" value = {this.state.Quarter} onChange ={this.handleChange}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId="One">
                        <Form.Label>$1</Form.Label>
                        <Form.Control type="number" placeholder="0" value = {this.state.One} onChange ={this.handleChange}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId="Two">
                        <Form.Label>$2</Form.Label>
                        <Form.Control type="number" placeholder="0" value = {this.state.Two} onChange ={this.handleChange}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as = {Col} controlId="Five">
                        <Form.Label>$5</Form.Label>
                        <Form.Control type="number" placeholder="0" value = {this.state.Five} onChange ={this.handleChange}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId="Ten">
                        <Form.Label>$10</Form.Label>
                        <Form.Control type="number" placeholder="0" value = {this.state.Ten} onChange ={this.handleChange}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId="Twenty">
                        <Form.Label>$20</Form.Label>
                        <Form.Control type="number" placeholder="0" value = {this.state.Twenty} onChange ={this.handleChange}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as = {Col} controlId="Fifty">
                        <Form.Label>$50</Form.Label>
                        <Form.Control type="number" placeholder="0" value = {this.state.Fifty} onChange ={this.handleChange}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId="OneHundred">
                        <Form.Label>$100</Form.Label>
                        <Form.Control type="number" placeholder="0" value = {this.state.OneHundred} onChange ={this.handleChange}/>
                    </Form.Group>
                </Form.Row>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        );    
    }
}

export default Home;