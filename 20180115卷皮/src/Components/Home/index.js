import React,{Component} from "react";
import styles from "./index.css";

import ReactSwipe from 'react-swipe';
import Bottom from '@/Components/Common/Bottom'
import Item from '@/Components/Home/Item'
import Performance from '@/Components/Home/Performance'
import 'antd-mobile/dist/antd-mobile.css';
import {NavLink} from "react-router-dom";
import { SearchBar, Button, WhiteSpace, WingBlank,ActivityIndicator } from 'antd-mobile';


class Home extends Component{


	constructor(){
		super();

		this.state={
			list:[],
			list1:[],
			list2:[],
			list3:[],
			list4:[],
			list5:[],
			list6:[],
			list7:[],
			list8:[],
			list9:[],
            show:true


		}
		console.log(this.state.list)
	}


	componentDidMount(){

       

    
	axios.get("/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_0&app_name=zhe&app_version=&platform=&catname=newest_zhe").then(res=>{
		this.setState({
				list:res.data.adsInfo.slide_ads.config.slide,
				list1:res.data.adsInfo.block[0].multi_block[0].data,
				list2:res.data.adsInfo.block[0].multi_block[1].data,
				list3:res.data.adsInfo.block[0].multi_block[4].data,
				list4:res.data.adsInfo.block[0].multi_block[5].data,
				list5:res.data.adsInfo.block[0].multi_block[6].data,
				list6:res.data.adsInfo.block[0].multi_block[7].data,
				list7:res.data.adsInfo.block[0].multi_block[8].data,
				list8:res.data.adsInfo.block[0].multi_block[9].data,
				list9:res.data.adsInfo.block[0].multi_block[10].data,
                show:false
			})
			console.log(this.state.list1)
		})  
	}






      
	render(){
		return<div >

        
         <ActivityIndicator toast text="正在加载" animating={this.state.show}/>

        
		<div className="div1">
     		<SearchBar placeholder="Search" maxLength={8}  />
     		<WhiteSpace />
     	</div>



        <div className="div111"></div>

    	<div className="div2">
    	<ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:500}} key={this.state.list.length}>
    	 	{this.state.list.map(item=><img className="img111" src={item.pic} key={item.id}/>)}
        </ReactSwipe>
    	</div>

    	<div className="div3">
    		<ul>
    			{this.state.list1.map(item=><li><img src={item.child[0].pic} key={item.id}/></li>)}
    		</ul>
    	</div>

    	<div className="div3">
    		<ul>
    			{this.state.list2.map(item=><li><img src={item.child[0].pic} key={item.id}/></li>)}
    		</ul>
    	</div>

    	<div className="div4">
    		<ul>
    			{this.state.list3.map(item=><li><img src={item.child[0].pic} key={item.id}/></li>)}
    		</ul>
    	</div>
		
		<div className="div5">
			<ul>
    			{this.state.list4.map(item=><li><img src={item.child[0].pic} key={item.id}/></li>)}
    		</ul>
    	</div>

    	<div className="div6">
    		{this.state.list5.map(item=><img src={item.child[0].pic} key={item.id}/>)}
    	</div>

    	<div className="div7">
    		<ul>
    		{this.state.list6.map(item=><li><img src={item.child[0].pic} key={item.id}/></li>)}
    		</ul>
    	</div>

    	<div className="div7">
    		<ul>
    		{this.state.list7.map(item=><li><img src={item.child[0].pic} key={item.id}/></li>)}
    		</ul>
    	</div>

    	<div className="div88">
    	<div className="div8">
    	<ul>
    		{this.state.list8.map(item=><li><img src={item.child[0].pic} key={item.id}/></li>)}
    	</ul>
    	</div>
    	<div className="div8">
    	<ul>
    		{this.state.list9.map(item=><li><img src={item.child[0].pic} key={item.id}/></li>)}
    	</ul>
    	</div>
    	</div>

    <div className="div99">
        <ul>
    <li><NavLink to="/home/Performance" activeClassName="active">专场</NavLink></li>
    <li><NavLink to="/home/Item" activeClassName="active">单品</NavLink></li>
        </ul>
    {this.props.children}
    </div>

        <Bottom/>	
		</div>
	}
}

export default Home;