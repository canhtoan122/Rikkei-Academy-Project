import React, { Component } from 'react'


export default class Children extends Component {
    constructor(){
        super()
        this.state={
            age:20,
        }
    }
    render(props) 
    {
        const {count, age} = this.props;
        age(this.state.age)
        return (
            <>
                <div>Children</div>
                <div>{count}</div>
            </>
        )
    }
}
