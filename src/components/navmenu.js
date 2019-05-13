import React, { Component } from 'react';
import './navmenu.css'
class Navmenu extends Component {
constructor(props){
    super(props)
    this.state=({
        class:'service'
    })
}
one=()=>{
 if(this.state.class==='service'){
    this.setState({
        class:'meme'
    })}
    if(this.state.class==='meme'){
        this.setState({
            class:'service'
        })}
    
}
    render() { 
        
        return ( 
         
            <div className='nav'> 
                <ul className='menu'>
                    <li className=''>Home</li>
                    <li className='services' onClick={this.one}>Services
                        <div className={this.state.class} >
                            <p>For entrepreneurs</p>
                            <p>For students</p>
                            <p>For hobbyists</p>
                        </div>
                    </li>
                    <li className=''>Contact</li>
                </ul>
            </div>
         );
    }
}
 
export default Navmenu;