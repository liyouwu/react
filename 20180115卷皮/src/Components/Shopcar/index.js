import React,{Component} from "react";
import styles from "./index.css";
import Bottom from '@/Components/Common/Bottom'
import {NavLink} from "react-router-dom";

class Shopcar extends Component{
	constructor(){
		super();
		this.state={
			list:[],
		}
	}
	componentDidMount(){
	axios.post("/cool/shop").then(res=>{
			this.setState({
				list:res.data.message
		})  
		console.log(this.state.list)
	})
	}

	render(){
		return<div>
	<div className="cig1">
		<span className="dir1"><NavLink to="/Classification"><i className="iconfont">&#xe60f;</i></NavLink></span>
      	<span className="dir2"><i className="iconfont">&#xe63d;</i></span>购物车
   	</div>

   	<div className="cig122"></div>
		
			{this.state.list.map((item,index)=>
				<div className="shop2">
				<ul>
					<li>
						<img src={item.img}/>
					</li>
					<li>
						<p>{item.title}</p>
						<p>{item.count}</p>
						<p>¥{item.pirce}</p>
						<button className="btn0" onClick={this.handle.bind(this,this.state.list[index]._id)}>删除</button>
					</li>
				</ul>
			</div>
			)}
			
		<Bottom/>
			{this.props.children}
		</div>
	}

	handle(id){
		console.log(id)
	axios.post("/cool/remove",{id:id}).then(res=>{
		console.log(res)

		if(res.data.result){
				axios.post("/cool/shop").then(res=>{
				this.setState({
				list:res.data.message
		})  
		console.log(this.state.list)
	})

			
        }
        else{
         alert("删除失败")
        }
	})
	}
}
export default Shopcar;