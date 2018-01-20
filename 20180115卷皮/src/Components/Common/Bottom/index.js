import React,{Component} from "react";
import styles from "./index.css";
import './font/iconfont.css'
import {NavLink} from "react-router-dom";

class Bottom extends Component{

	render(){
		return<div>
			<div className="box1">
				<ul className="ul1">
<li className="li1"><NavLink to="/home" >
<i className="iconfont font">&#xe630;</i>首页</NavLink></li>
					
<li className="li1"><NavLink to="/Classification" activeClassName={styles.active}>
<i className="iconfont font">&#xe60f;</i>品牌秒杀</NavLink></li>
					
<li className="li1"><NavLink to="/Brand" activeClassName={styles.active} >
<i className="iconfont font">&#xe7f9;</i>分类</NavLink></li>
					
<li className="li1"><NavLink to="/Shopcar" activeClassName={styles.active} >
<i className="iconfont font">&#xf0179;</i>购物车</NavLink></li>
					
<li className="li1"><NavLink to="/Our" activeClassName={styles.active} >
<i className="iconfont font">&#xe620;</i>我的</NavLink></li>
				</ul>
			</div>
		</div>
	}
}

export default Bottom;