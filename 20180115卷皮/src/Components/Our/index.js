import React,{Component} from "react";
import styles from "./index.css";

import Bottom from '@/Components/Common/Bottom'
import {NavLink} from "react-router-dom";
import './font/iconfont.css'

class Our extends Component{
	render(){
		return<div>
		<div className="all1">
		<div className="our1">个人中心</div>
		<div className="our2">
			<ul>
			<NavLink to="/register"><li className="cli3">注册</li></NavLink>
			<NavLink to="/login"><li>登录</li></NavLink>
			</ul>
		</div>
		<div className="our3">
			<ul>
			<li className="oli1">我的订单</li>
			<li className="oli2">全部订单</li>
			</ul>
		</div>

		<div className="our4">
			<ul>
			<li><i className="iconfont">&#xe66c;</i><span>待付款</span></li>
			<li><i className="iconfont">&#xe69e;</i><span>待成团</span></li>
			<li><i className="iconfont">&#xe609;</i><span>待收货</span></li>
			<li><i className="iconfont">&#xe63c;</i><span>退货/售后</span></li>
			</ul>
		</div>

		<div className="our5">
			<ul>
			<li>我的优惠券</li>
			<li>我的收藏</li>
			<li>我的拼团</li>
			<li>至尊会员卡</li>
			<li>我的免单</li>
			<li>借钱</li>
			</ul>
		</div>

		<div className="our6">
			<ul>
			<li>客服中心</li>
			<li>关于卷皮</li>
			</ul>
		</div>


		<div className="our7">
			<ul>
			<li>返回首页</li>
			<li>客户端</li>
			<li>电脑版</li>
			</ul>
		</div>
			



		<div className="bot"></div>

			<Bottom/>
	
			{this.props.children}
		</div>
		</div>
	}
}

export default Our;
