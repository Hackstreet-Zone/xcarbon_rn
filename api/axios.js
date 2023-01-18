import axios from 'axios'
import React, {useContext} from "react"
// import {server} from '../contexts/Provider'


export default axios.create({
    baseURL: ""
})