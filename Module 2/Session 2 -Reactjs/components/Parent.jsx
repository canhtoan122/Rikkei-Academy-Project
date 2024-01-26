import React, { Component } from 'react'
import Children from './Children'

export default class Parent extends Component {
    getAge=(age)=>{
        console.log(age);
    }
    render(props) {
        console.log(this.props);
        const { count } = this.props;

        return (
            <>
                <div>Parent</div>
                <Children count = {count} age = {this.getAge}></Children>
            </>
        )
    }
}
