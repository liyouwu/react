import React,{Component} from "react";
import styles from "./index.css";
import Bottom from '@/Components/Common/Bottom'
import TestWrapper from '@/Components/TestWrapper'
import Swiper from '@/Components/Swiper'



class Detail extends Component{
	constructor(){
		super();
		this.state={
			list:[],
		}
		console.log(this.state.list)
	}
	componentDidMount(){
		axios.get(`/api/getMemberAboutInfo?goods_id=${this.props.match.params.id}&sa_id=14445315&is_pt_goods=0&req_coupons_id=79151824`).then(res=>{
			this.setState({
				list:res.data.skudata.info,		
			})
			console.log(this.state.list)
		})
	}
	render(){
		// NoticeBar 通告栏
		// ActionSheet 动作面板
		return<div>
			<div className="del">
				商品详情
			</div>
			<div className="del1">
				<img src={this.state.list.goods_pic_url}/>
			</div>

			<div className="del2">
				<ul>
				<li>	
					<span className="sp1"><span>¥</span>{this.state.list.cprice}</span>
					<p>{this.state.list.goods_title}</p>
					<span className="sp2">{this.state.list.join_number}</span>
				</li>
				</ul>
			</div>
				<img className="img1" src="https://web.juanpi.com/static/media/preferred.1ae8f323.png"/>

				<TestWrapper />

			<div className="del3">

				<ul>
					<li className="cli1">	
			<img src="https://goods3.juancdn.com/bao/170316/4/d/58ca618aa43d1f50f1409a4a_180x90.png?iopcmd=convert&Q=88&dst=png"/>
					<p>范思蓝恩女装热卖专场</p> 
					<span>28万人购买</span>		
					</li>
					
					<li className="cli2">
					<Swiper/>		
					</li>
					<li className="cli3">查看店铺所有商品</li>
				</ul>

			</div>

			<div className="del4" onClick={this.handle.bind(this,this.state.list.goods_title,this.state.list.cprice,this.state.list.goods_pic_url,this.state.list.end_time)}>
				加入购物车
			</div>
						
		</div>
	}

	handle(){
	var _this = this
    axios.post('/cool/detail', {title:this.state.list.goods_title,img:this.state.list.goods_pic_url,pirce:this.state.list.cprice,count:this.state.list.end_time}).then(function (res) {
   
   		if(res.data.result){
  			_this.props.history.push('/shopcar');
        }
        
  	})      
	}
}





export default Detail;
