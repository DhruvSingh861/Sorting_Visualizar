import { isDoExpression } from "@babel/types";
import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
import { Component } from "react";
import { ListGroup, ListGroupItem ,Button, Row, Col} from "reactstrap";
import {Bars,array} from "../bars/Bars";
import axios from 'axios';

let sid;
class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            type:'',
            usarray:array
        }
    }
    sortHandle=()=>{
        this.setState({usarray:array,type:sid},()=>{
            console.log("before send>>>",this.state);
            console.log("TYPEEE->",this.state.type);
            axios.post('http://localhost:8080/array',this.state);
            console.log("after send>>>",this.state);
        axios.get('http://localhost:8080/array').then(response=>{
            console.log(response);
            let SArray=response.data;
            console.log(SArray);
            var swap= function(x){return x};
            var barcolor='purple';
            for(let i=0;i<response.data.length;i++){
                if(sid=='ms'){
                    if(SArray[i]==null){
                        barcolor='yellow';
                        continue;
                    }
                    MergeSort(SArray,i,barcolor);
                }
                else if(sid=='qs')  QuickSort(SArray,i);
                else if(sid=='bs') BubbleSort(SArray,i);
                else if(sid=='hs') HeapSort(SArray,i);
            }
            setTimeout(()=>{
                for(let i=0;i<array.length;i++)
        document.getElementById(i).style.backgroundColor='purple';
            },(SArray.length+4)*100);
        }).catch(error=>{
            console.log("send request again");

        })
        });

    }
    render(){
        return (
            <div>
                <ListGroup>
                    <Row>
                        <Col md={2}>
                        <ListGroupItem id="ms"  style={{height:`${20}px`,textAlign:'center',padding:`${0}px`, fontSize:`${12}px`}} data-toggle='list'  tag="button" action onClick={(e)=>{
                            document.getElementById('ms').className='list-group-item list-group-item-action active';
                            document.getElementById('qs').className='list-group-item list-group-item-action ';
                            document.getElementById('hs').className='list-group-item list-group-item-action ';
                            document.getElementById('bs').className='list-group-item list-group-item-action ';
                    console.log(array);
                    sid="ms"
                    console.log("SID->",sid)
                    
                }}>
                    <b>Merge Sort</b>
                </ListGroupItem>
                        </Col>
                        <Col md={2}>
                        <ListGroupItem id="qs" style={{height:`${20}px`,textAlign:'center',padding:`${0}px`, fontSize:`${12}px`}} data-toggle='list' tag="button" action onClick={(e)=>{
                            document.getElementById('ms').className='list-group-item list-group-item-action ';
                            document.getElementById('qs').className='list-group-item list-group-item-action active';
                            document.getElementById('hs').className='list-group-item list-group-item-action ';
                            document.getElementById('bs').className='list-group-item list-group-item-action ';
                    console.log(array)
                    sid="qs"
                }}>
                    <b>Quick Sort</b>
                </ListGroupItem>
                        </Col>
                        <Col md={2}>
                        <ListGroupItem id="hs" style={{height:`${20}px`,textAlign:'center',padding:`${0}px`, fontSize:`${12}px`}}  data-toggle='list' tag="button" action onClick={(e)=>{
                            document.getElementById('ms').className='list-group-item list-group-item-action ';
                            document.getElementById('qs').className='list-group-item list-group-item-action ';
                            document.getElementById('hs').className='list-group-item list-group-item-action active';
                            document.getElementById('bs').className='list-group-item list-group-item-action ';
                    console.log(array)
                    sid="hs"
                }}>
                    <b>Heap Sort</b>
                </ListGroupItem>
                        </Col>
                        <Col md={2}>
                        <ListGroupItem id="bs" style={{height:`${20}px`,textAlign:'center',padding:`${0}px`, fontSize:`${12}px`}} data-toggle='list' tag="button" action onClick={(e)=>{
                            document.getElementById('ms').className='list-group-item list-group-item-action ';
                            document.getElementById('qs').className='list-group-item list-group-item-action ';
                            document.getElementById('hs').className='list-group-item list-group-item-action ';
                            document.getElementById('bs').className='list-group-item list-group-item-action active';
                    console.log(array)
                    sid="bs"
                }}>
                    <b>Bubble Sort</b>
                </ListGroupItem>
                        </Col>
                        <Col>
                        <Button 
                id="sort"
                value={array}
                className="text-center" 
                onClick={()=>this.sortHandle()}

                style={{height:`${20}px`,textAlign:'center',padding:`${0}px`, fontSize:`${12}px`,width:180, marginTop:-8}}
            >
                  <b>SORT</b>
            </Button>
                        </Col>
                    </Row>

            </ListGroup>
            
            </div>
            
        )
    }
}
var swap= function(x){return x};

function MergeSort(SArray,i,barcolor){

    //var barcolor='purple';
    document.getElementById("SLIDER").disabled=true
    document.getElementById("sort").disabled=true
    var i1=SArray[i].index1;
    var i2=SArray[i].index2;

    setTimeout(()=>{
        if(SArray[i].exch){
            document.getElementById(SArray[i].index1).style.backgroundColor= 'red';
            document.getElementById(SArray[i].index2).style.backgroundColor= 'red';
        }
        else{
            document.getElementById(SArray[i].index1).style.backgroundColor= 'greenyellow';
            document.getElementById(SArray[i].index2).style.backgroundColor= 'greenyellow';
        }
        if(SArray[i].exch==true){
            if(sid=="ms"){
            while(i1<i2){
            array[i1]=swap(array[i2],array[i2]=array[i1]);
            console.log(array[i1],array[i2]);
            document.getElementById(i1).style.height=`${array[i1]}px`;
            document.getElementById(i2).style.height=`${array[i2]}px`;
            i1++;
        }
            }
    }
    },(i)*100);
    setTimeout(()=>{
        console.log(array.length/2)
        document.getElementById(SArray[i].index1).style.backgroundColor= barcolor;
        document.getElementById(SArray[i].index2).style.backgroundColor= 'purple';
    },(i+1)*100)
    setTimeout(()=>{
        for(var I=0;I<array.length;I++)
        document.getElementById(I).style.backgroundColor= 'yellow';
        document.getElementById("SLIDER").disabled=false
        document.getElementById("sort").disabled=false
    },(SArray.length)*100)
}
//-----------------------------------------------------------------------------------------


function QuickSort(SArray,i) {
    document.getElementById("SLIDER").disabled=true
    document.getElementById("sort").disabled=true
    var i1=SArray[i].index1;
    var i2=SArray[i].index2;
    
    setTimeout(()=>{
        if(SArray[i].exch){
            document.getElementById(SArray[i].index1).style.backgroundColor= 'red';
            document.getElementById(SArray[i].index2).style.backgroundColor= 'red';
        }
        else{
            document.getElementById(SArray[i].index1).style.backgroundColor= 'orange';
            document.getElementById(SArray[i].index2).style.backgroundColor= 'greenyellow';
        }
        if(SArray[i].exch){
        array[i1]=swap(array[i2],array[i2]=array[i1]);
        console.log(array[i1],array[i2]);
        document.getElementById(i1).style.height=`${array[i1]}px`;
        document.getElementById(i2).style.height=`${array[i2]}px`;
    }
    },(i)*100);
    setTimeout(()=>{
        if(SArray[i].sorted)
        document.getElementById(SArray[i].index1).style.backgroundColor= 'yellow';
        else
        document.getElementById(SArray[i].index1).style.backgroundColor= 'purple';
        document.getElementById(SArray[i].index2).style.backgroundColor= 'purple';
    },(i+1)*100)
    setTimeout(()=>{
        for(var I=0;I<array.length;I++)
        document.getElementById(I).style.backgroundColor= 'yellow';
        document.getElementById("SLIDER").disabled=false
        document.getElementById("sort").disabled=false
    },(SArray.length)*100)
}

//---------------------------------------------------------------------------------------------
function HeapSort(SArray,i){
    document.getElementById("SLIDER").disabled=true
    document.getElementById("sort").disabled=true
    var i1=SArray[i].index1;
    var i2=SArray[i].index2;

    setTimeout(()=>{
        if(SArray[i].exch){
            document.getElementById(SArray[i].index1).style.backgroundColor= 'red';
            if(!SArray[i].sorted)
            document.getElementById(SArray[i].index2).style.backgroundColor= 'red';
            else
            document.getElementById(SArray[i].index2).style.backgroundColor= 'yellow';
        }
        else{
            document.getElementById(SArray[i].index1).style.backgroundColor= 'greenyellow';
            document.getElementById(SArray[i].index2).style.backgroundColor= 'greenyellow';
        }
        if(SArray[i].exch){
            array[i1]=swap(array[i2],array[i2]=array[i1]);
            console.log(array[i1],array[i2]);
            document.getElementById(i1).style.height=`${array[i1]}px`;
            document.getElementById(i2).style.height=`${array[i2]}px`;
    }
    },(i)*100);
    setTimeout(()=>{
        document.getElementById(SArray[i].index1).style.backgroundColor= 'purple';
        if(!SArray[i].sorted)
        document.getElementById(SArray[i].index2).style.backgroundColor= 'purple';
    },(i+1)*100)
    setTimeout(()=>{
        for(var I=0;I<array.length;I++)
        document.getElementById(I).style.backgroundColor= 'yellow';
        document.getElementById("SLIDER").disabled=false
        document.getElementById("sort").disabled=false
    },(SArray.length)*100)
}

//------------------------------------------------------------------------------------------

function BubbleSort(SArray,i){
    document.getElementById("SLIDER").disabled=true
    document.getElementById("sort").disabled=true
    var i1=SArray[i].index1;
    var i2=SArray[i].index2;
    
    setTimeout(()=>{
        if(SArray[i].exch){
            document.getElementById(SArray[i].index1).style.backgroundColor= 'red';
            document.getElementById(SArray[i].index2).style.backgroundColor= 'red';
        }
        else{
            if(i1==-1)
            document.getElementById(SArray[i].index2).style.backgroundColor= 'yellow';
            else{
            document.getElementById(SArray[i].index1).style.backgroundColor= 'greenyellow';
            document.getElementById(SArray[i].index2).style.backgroundColor= 'greenyellow';
        }
        }
        if(SArray[i].exch){
        array[i1]=swap(array[i2],array[i2]=array[i1]);
        console.log(array[i1],array[i2]);
        document.getElementById(i1).style.height=`${array[i1]}px`;
        document.getElementById(i2).style.height=`${array[i2]}px`;
    }
    },(i)*100);
    setTimeout(()=>{
        if(i1!=-1){
        document.getElementById(SArray[i].index1).style.backgroundColor= 'purple';
        document.getElementById(SArray[i].index2).style.backgroundColor= 'purple';
        }
    },(i+1)*100)
    setTimeout(()=>{
        for(var I=0;I<array.length;I++)
        document.getElementById(I).style.backgroundColor= 'yellow';
        document.getElementById("SLIDER").disabled=false
        document.getElementById("sort").disabled=false
    },(SArray.length)*100)
}

export  {Menu};