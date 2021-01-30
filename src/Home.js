import React from 'react'

class Home extends React.Component{
    constructor(props)
    {
        super(props);
        this.state ={
            Denominations : {}
        }
    }
    render()
    {
        return(
            <form>
               <label>
                   Penny:
                   <input type = "text" value = {this.state.Denominations["Penny"]} onChange = {this.handleChange}/>
               </label>
               <label>
                   Dime:
                   <input type = "text" value = {this.state.Denominations["Dime"]} onChange = {this.handleChange}/>
               </label>
               <label>
                   Nickel:
                   <input type = "text" value = {this.state.Denominations["Nickel"]} onChange = {this.handleChange}/>
               </label>
               <label>
                   Quarter:
                   <input type = "text" value = {this.state.Denominations["Quarter"]} onChange = {this.handleChange}/>
               </label>
               <label>
                   $1:
                   <input type = "text" value = {this.state.Denominations["One"]} onChange = {this.handleChange}/>
               </label>
               <label>
                   $5:
                   <input type = "text" value = {this.state.Denominations["Five"]} onChange = {this.handleChange}/>
               </label>
               <label>
                   $10:
                   <input type = "text" value = {this.state.Denominations["Ten"]} onChange = {this.handleChange}/>
               </label>
               <label>
                   $20:
                   <input type = "text" value = {this.state.Denominations["Twenty"]} onChange = {this.handleChange}/>
               </label>
               <label>
                   $50:
                   <input type = "text" value = {this.state.Denominations["Fifty"]} onChange = {this.handleChange}/>
               </label>
               <label>
                   $100:
                   <input type = "text" value = {this.state.Denominations["One Hundred"]} onChange = {this.handleChange}/>
               </label>
            </form>
        );    
    }
}

export default Home;