import React,{Component} from "react";
import styles from "./index.css";
import './font/iconfont.css'
import Bottom from '@/Components/Common/Bottom'
import InfiniteScroll from 'react-infinite-scroller';
import {NavLink} from "react-router-dom";
import { SearchBar, Button, WhiteSpace, WingBlank,Tabs } from 'antd-mobile';

class Classification extends Component{

	constructor(){
		super();
		this.state={
			list0:[],
			list:[],
			list1:[],
			list2:[],
			list3:[],
			list4:[],
			list5:[]
		}

	}
	componentDidMount(){
		axios.get("/api/getBrandGoods?page=1&brand_id=3059875_3059875&msort=1&goods_utype=C4&price_range=&cat_threeids=").then(res=>{
			this.setState({
				list0:res.data.floor_data[0],
				list:res.data.floor_data[0].slice(2,16) ,
				list1:res.data.floor_data[1].slice(1,16) ,
				list2:res.data.floor_data[2].slice(1,16) ,
				list3:res.data.floor_data[3].slice(2,16) ,
				list4:res.data.floor_data[4].slice(2,16) ,
				list5:res.data.brandInfo ,
			})
			console.log(this.state.list0[0].tabname)
		})
	}
	render(){
		const tabs = [
  		{ title: '羽绒服' },
  		{ title: '棉衣' },
  		{ title: '毛衫' },
  		{ title: '裙装' },
  		{ title: '裤装' },
		];

		return<div>
		<div className="cig1">

<span className="dir1"><NavLink to="/"><i className="iconfont">&#xe60f;</i></NavLink></span>
			<span className="dir2"><i className="iconfont">&#xe63d;</i></span>
			范思蓝恩女装热卖专场
		</div>

		<div className="cig11"></div>

		<div className="cig2">

			<ul>
				<li className="li12">
					<div>
						<img src={this.state.list5.logo_url}/>
					</div>
					<p className="cp1">{this.state.list5.shop_name}</p>	

					<p className="cp2">{this.state.list5.store_info}</p>	
				</li>
			</ul>
			
		</div>

	<div>
    <WhiteSpace />
    <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <ul className="cul1">
		{this.state.list.map(item=>
			<li onClick={this.handleclick.bind(this,item.goods_id)}>
				<img src={item.pic_url} key={item.id}/>
				<span>￥{item.cprice}</span>
				<p>{item.title}</p>
			</li>)}
        </ul>   
     </div>
      

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' ,backgroundColor: '#fff' }}>
		<ul className="cul1">
		{this.state.list1.map(item=>
		<li onClick={this.handleclick.bind(this,item.goods_id)}>
				<img src={item.pic_url} key={item.id}/>
				<span>￥{item.cprice}</span>
				<p>{item.title}</p>
			</li>)}
        </ul>   
    </div>
      
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <ul className="cul1">
		{this.state.list2.map(item=>
			<li onClick={this.handleclick.bind(this,item.goods_id)}>
				<img src={item.pic_url} key={item.id}/>
				<span>￥{item.cprice}</span>
				<p>{item.title}</p>
			</li>)}
        </ul>   
    </div>
        
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
        <ul className="cul1">
		{this.state.list3.map(item=>
			<li onClick={this.handleclick.bind(this,item.goods_id)}>
				<img src={item.pic_url} key={item.id}/>
				<span>￥{item.cprice}</span>
				<p>{item.title}</p>
			</li>)}
        </ul>   
      </div>
        
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>   
        <ul className="cul1">
		{this.state.list4.map(item=>
			<li onClick={this.handleclick.bind(this,item.goods_id)}>
				<img src={item.pic_url} key={item.id}/>
				<span>￥{item.cprice}</span>
				<p>{item.title}</p>
			</li>)}
        </ul>   
    </div>
    </Tabs>
    <WhiteSpace />
  </div>

		<Bottom/>
		{this.props.children}
		</div>
	}
	
	handleclick(id){

		console.log(id);

		this.props.history.push(`/detail/${id}`);
	}

}
export default Classification;