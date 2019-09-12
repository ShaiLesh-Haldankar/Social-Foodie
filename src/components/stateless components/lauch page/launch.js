import React, { Component } from 'react'
import {Navbar, Row, Col} from 'react-bootstrap'
import '../../assets/css/style.css'
import { Checkbox } from 'react-md'
export default class Launch extends Component {
  render() {
    return (
        <div className = "launch">
            {/* <Navbar expand = "md">
                <Navbar.Brand>FooDie</Navbar.Brand>
            </Navbar>  */}
            <div className = "launch_container h-100 w-75">
                <Row>
                    <Col sm = {7}>
                    </Col>
                    <Col sm = {5}>
                        <div className = "p-5">
                            <div className = "h1 mt-5 text-center">
                                FOODIE
                            </div>
                            <div className = "mt-5">
                                <input className = "w-100 p-1" type = "text" placeholder = "Username" />
                            </div>
                            <div className = "mt-5">
                                <input className = "w-100 p-1" type = "password" placeholder = "Password" />
                            </div>
                            <div>
                                <Checkbox label="Remember Me"id="checkbox-read-material-design-spec"/>
                            </div>
                            <div className = "text-center mt-3">
                                <button>Sign in</button>
                            </div>

                            
                        </div>

                    </Col>
                </Row>

            </div>


        
      </div>
    )
  }
}
