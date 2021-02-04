import {Col, Form} from 'react-bootstrap';

const DenominationForm = (props) => {
    return(
                <>
                <Form.Row>
                    <Form.Group as = {Col} controlId="Penny">
                        <Form.Label>Penny</Form.Label>
                        <Form.Control type="number" placeholder="0" min = "0" value = {props.cashandbills.Penny} onChange ={props.handleChange}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId="Dime">
                        <Form.Label>Dime</Form.Label>
                        <Form.Control type="number" placeholder="0" min = "0" value = {props.cashandbills.Dime} onChange ={props.handleChange}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId="Nickel">
                        <Form.Label>Nickel</Form.Label>
                        <Form.Control type="number" placeholder="0" min = "0" value = {props.cashandbills.Nickel} onChange ={props.handleChange}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as = {Col} controlId="Quarter">
                        <Form.Label>Quarter</Form.Label>
                        <Form.Control type="number" placeholder="0" min = "0" value = {props.cashandbills.Quarter} onChange ={props.handleChange}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId="One">
                        <Form.Label>$1</Form.Label>
                        <Form.Control type="number" placeholder="0" min = "0" value = {props.cashandbills.One} onChange ={props.handleChange}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId="Two">
                        <Form.Label>$2</Form.Label>
                        <Form.Control type="number" placeholder="0" min = "0" value = {props.cashandbills.Two} onChange ={props.handleChange}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as = {Col} controlId="Five">
                        <Form.Label>$5</Form.Label>
                        <Form.Control type="number" placeholder="0" min = "0" value = {props.cashandbills.Five} onChange ={props.handleChange}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId="Ten">
                        <Form.Label>$10</Form.Label>
                        <Form.Control type="number" placeholder="0" min = "0" value = {props.cashandbills.Ten} onChange ={props.handleChange}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId="Twenty">
                        <Form.Label>$20</Form.Label>
                        <Form.Control type="number" placeholder="0" min = "0" value = {props.cashandbills.Twenty} onChange ={props.handleChange}/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as = {Col} controlId="Fifty">
                        <Form.Label>$50</Form.Label>
                        <Form.Control type="number" placeholder="0" min = "0" value = {props.cashandbills.Fifty} onChange ={props.handleChange}/>
                    </Form.Group>
                    <Form.Group as = {Col} controlId="OneHundred">
                        <Form.Label>$100</Form.Label>
                        <Form.Control type="number" placeholder="0" min = "0" value = {props.cashandbills.OneHundred} onChange ={props.handleChange}/>
                    </Form.Group>
                </Form.Row>
                </>
    )
} 

export default DenominationForm;