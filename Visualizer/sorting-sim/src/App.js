import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Card, CardBody, Col, Container, Row} from "reactstrap";
import Home from './components/Home';
import {Menu} from './components/Menu';
import {Bars} from "./bars/Bars";
import {useState} from 'react';
import './bars/DarkMode.css'



function App() {
  return (
    <div >
        <Row>
        <Card style={{height:30}} className="text-center my-3">
        <h5><b>Lets SORT</b></h5>
        </Card>
        <Row style={{backgroundColor:"#3F3F3F", padding:`${5}px`, height:`${5}`}}><Menu/></Row>
        </Row>
        <div  className='text-center'><Bars/></div>
        
    </div>
  );
}

export default App;
