import React, { Component } from "react";
import "./Bar.css";
import { Button } from "reactstrap";
import './DarkMode.css'
let wid=50;


let array=[];
class Bars extends Component{
    constructor(props){
        super(props);
        this.state={array: [],};
    }
    componentDidMount(){
        this.arrayBar();
    }
    arrayBar=()=>{
        array=[];
        let n = 20;
        while(n*wid < 900-n){
            n++;
        }
        while(n*wid > 900-n){
            n--;
        }
        
        console.log(n);
        for(let i=0;i<n;i++){
            array.push(randomValues(5,450));
        }
        this.setState({array});
        console.log(array)
    }
    weightHandler(){
        this.arrayBar();
        var slider=document.getElementById("SLIDER");
        wid=slider.value;
        document.getElementById('lab').innerHTML=wid;
    }

    render(){
        const {array}=this.state;
        return(
            <div className="array-container" id="bholenath">
            {
            array.map((value,idx)=>(
                <div key={idx} id={idx} className="array-bar" style={{height:`${value}px`, width:`${wid}px`,backgroundColor:"purple"}}>
                </div>
        ))
        }
        <div >
            <input  type="range" min="10" max="100" className="range-slider" id="SLIDER" step='0.5' defaultValue='50'
            onChange={()=>this.weightHandler()}
            />
            <label id="lab">50</label>
            </div>
            </div>
        );
    }
}
function randomValues(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

export  {Bars,array};