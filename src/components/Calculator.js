import React, { Component } from 'react'
import './Calculator.css'
import {evaluate} from 'mathjs'  



export class Calculator extends Component {
    constructor(props) {
        super(props) 
        this.state = { 
            value:"",
            answer:""
      }}
      changeHandler=(event)=>{

        const val=event.target.value
        this.setState({value:val})
        console.log(this.state.value)

      }
      clickHandler=(e)=>{
            const val1=e.target.value
            const val2=this.state.value
            const val3=val2+val1
            this.setState({value:val3})

      }
      clickclear=()=>{
            this.setState({value:"",answer:""})
      }
      clickBackspace=()=>{
        let val=this.state.value
        let time=""
        for (let i=0;i<(val.length-1);i++){
            time+=val[i]
        }
        this.setState({value:time})
    }
     clicksolve=()=>{
        const text=this.state.value
        let ans=evaluate(text)
        this.setState({answer:ans})
     }
  render() {

    return (
<>
<table>
        <tr>
            <td colspan="4">
                <input type="text" class="txt1" id="txt1" onChange={this.changeHandler} value={this.state.value}/>
            </td>
        </tr>
        <tr>
            <td colspan="4">
                <input type="text" class="txt2"id="txt2" disabled value={this.state.answer}/>
            </td>
        </tr>
        <tr>
            <td>
                <button type="button" class="btn1" id="p" value={"+"} onClick={this.clickHandler}>+</button>
            </td>
            <td>
                <button type="button" class="btn1" id="m" value={"-"} onClick={this.clickHandler}>-</button>
            </td>
            <td>
                <button type="button" class="btn1" id="mul" value={"*"} onClick={this.clickHandler}>*</button>
            </td>
            <td>
                <button type="button" class="btn1" id="d" value={"/"} onClick={this.clickHandler}>/</button>
            </td>
        </tr>
        <tr>
            <td>
                <button type="button" class="btn1" id="1" value={"1"} onClick={this.clickHandler}>1</button>
            </td>
            <td>
                <button type="button" class="btn1" id="2" value={"2"} onClick={this.clickHandler}>2</button>
            </td>
            <td>
                <button type="button" class="btn1" id="3" value={"3"} onClick={this.clickHandler}>3</button>
            </td>
            <td>
                <button type="button" class="btn1" id="4" value={"4"} onClick={this.clickHandler}>4</button>
            </td>
        </tr>
        <tr>
            <td>
                <button type="button" class="btn1" id="5" value={"5"} onClick={this.clickHandler}>5</button>
            </td>
            <td>
                <button type="button" class="btn1" id="6" value={"6"} onClick={this.clickHandler}>6</button>
            </td>
            <td>
                <button type="button" class="btn1" id="7" value={"7"} onClick={this.clickHandler}>7</button>
            </td>
            <td>
                <button type="button" class="btn1" id="8" value={"8"} onClick={this.clickHandler}>8</button>
            </td>
        </tr>
        <tr>
            <td>
                <button type="button" class="btn1" id="9" value={"9"} onClick={this.clickHandler}>9</button>
            </td>
            <td>
                <button type="button" class="btn1" id="0" value={"0"} onClick={this.clickHandler}>0</button>
            </td>
            <td>
                <button type="button" class="btn1" id="00" value={"00"} onClick={this.clickHandler}>00</button>
            </td>
            <td>
                <button type="button" class="btn1" id="dot" value={"."} onClick={this.clickHandler}>.</button>
            </td>
        </tr>
        <tr>
            <td colspan="3">
                <button type="button" class="btnans" id="ANS" onClick={this.clicksolve}>ANS</button>

            </td>
            <td>
                <button type="button" class="btn1" id="per" value={"%"} onClick={this.clickHandler}><br/></button>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <button type="button" class="btntry" id="clear" onClick={this.clickclear}>clear</button>
            </td>
            <td colspan="2">
                <button type="button" class="btntry" id="bspace" onClick={this.clickBackspace}>backspace</button>
            </td>
        </tr>
        <tr>
            <td>
                <button type="button" class="btn1" id="sin" value={"sin"} onClick={this.clickHandler}>SIN</button>
            </td>
            <td>
                <button type="button" class="btn1" id="cos" value={"cos"} onClick={this.clickHandler}>COS</button>
            </td>
            <td>
                <button type="button" class="btn1" id="tan" value={"tan"} onClick={this.clickHandler}>TAN</button>
            </td>
        </tr>
        <tr>
            <td colspan="2">
                <button type="button" class="btntry" id="bopen" value={"("} onClick={this.clickHandler}>B-open</button>
            </td>
            <td colspan="2">
                <button type="button" class="btntry" id="bclose" value={")"} onClick={this.clickHandler}>B-close</button>
            </td>
        </tr>
    </table>
</>
    )
  }
}

export default Calculator;