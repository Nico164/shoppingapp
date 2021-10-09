import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./Navigation.css"
import {Button} from 'antd'


function Navigation() {
const history = useHistory ()
return <div className="nav-bar">
        <Button type= 'primary' onClick={()=>history.push('/')}>Home</Button>
        <Button type= 'primary' onClick={()=>history.push('/about')}>About</Button>
        <Button type= 'primary' onClick={()=>history.push('/shop')}>Shop</Button>
    </div>
}
export default Navigation