import React,{Component} from "react";
import styles from "./index.css";
import InfiniteScroll from 'react-infinite-scroller';

class Item extends Component{

		constructor(){
		super();

		this.state={
			list:[],
			loading:true,

		}

		this.current=1; //当前页面
		this.total = 0;//总页数
	}

	componentDidMount(){

		axios.get("api/getGoods?page=1&zy_ids=p8_c4_l4_0&app_name=zhe&catname=newest_zhe_jingxuandanpin&flag=tab_hpdp").then(res=>{
			this.setState({
				list:res.data.data.goods,
			})
			this.total = res.data.data.has_more_page
			console.log(this.total)
		})
	}

	render(){
		return<div className="per1">
		<InfiniteScroll
		    initialLoad={false}
		    threshold={10}
		    loadMore={this.loaderMoreFunc.bind(this)}
		    hasMore={this.state.loading}
		    loader={<div className="loader">Loading ...</div>}
		>
				<ul>
				{this.state.list.map(item=><li>
				<img src={item.pic_url} key={item.id}/>
				<span className="span1">¥{item.cprice}</span>
				<p className="span2">{item.title}</p>
				</li>)}
			</ul>

			</InfiniteScroll>
	
		</div>
	}

	loaderMoreFunc(){
		console.log(111111)
		console.log("到底部了");
		this.current++;

		console.log(this.current)

		axios.get(`api/getGoods?page=${this.current}&zy_ids=p8_c4_l4_0&app_name=zhe&catname=newest_zhe_jingxuandanpin&flag=tab_hpdp`).then(res=>{
	    	this.setState({
	    		list:[...this.state.list,...res.data.data.goods,]
	    	})
	    })
	}
	}

	

export default Item;
