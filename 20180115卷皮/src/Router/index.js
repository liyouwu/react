import React from 'react'

import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import App from "@/Components/App";
import Brand from "@/Components/Brand";
import Classification from "@/Components/Classification";
import Home from "@/Components/Home";
import TestWrapper from "@/Components/TestWrapper";
import Swiper from "@/Components/Swiper";
import Shopcar from "@/Components/Shopcar";
import Detail from "@/Components/Detail";
import Performance from "@/Components/Home/Performance";
import Item from "@/Components/Home/Item";
import Our from "@/Components/Our";
import Login from "@/Components/Login";
import Register from "@/Components/Register";

const router = (
		<Router>
		<App>
		<Switch>


			<Route path="/home" render={()=>

			<Home>

			<Switch>

			<Route path="/home/Performance" component={Performance}/>
			<Route path="/home/Item" component={Item}/>

			<Redirect from="/" to="/home/Performance"/>

			</Switch>

			</Home>

				}/>
			
			<Route path="/Classification" component={Classification}/>
			<Route path="/Brand" component={Brand}/>
			<Route path="/Shopcar" component={Shopcar}/>
			<Route path="/Our" component={Our}/>
			<Route path="/Login" component={Login}/>
			<Route path="/Register" component={Register}/>
	

		<Route path="/Detail/:id" component={Detail}/>
			<Redirect from="/" to="/home"/>
		</Switch>	
		</App>
		</Router>
	)
export default router

