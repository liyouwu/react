import React,{Component} from "react";
import styles from "./index.css";
import TabExample from '@/Components/TabExample'
import Bottom from '@/Components/Common/Bottom'
import { SearchBar, Button, WhiteSpace, WingBlank,Tabs,ActivityIndicator} from 'antd-mobile';
import ReactDOM  from "react-dom";
import { Grid } from 'antd-mobile';
import './font/iconfont.css'
import {NavLink} from "react-router-dom";

class Brand extends Component{
	constructor(){
		super();
		this.state={
			list:[],
      cool:[],
      bar:[],
      bar1:[],
      bar2:[],
      bar3:[],
      bar4:[],

      show:true
		}
	}
	componentDidMount(){
    var newarr = []
    axios.get("/Services/Proxy.ashx?r=0.615966926019945&methodName=products.category.getcategory_3.0.0&method=products.category.getcategory&ver=3.0.0").then(res=>{
      this.setState({
        list:res.data.data.data,
      })
         
      this.state.list.map(item=>{
        newarr.push(item.name);
        this.setState({        
        cool:newarr
        })
     })
		})

    axios.get("Services/Proxy.ashx?r=0.1176232279462095&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=88").then(res=>{
      console.log(res.data.data.brand.brandrecommend);
      this.setState({
        bar:res.data.data.recommend.categoryrecommend,
      })
    })

    axios.get("Services/Proxy.ashx?r=0.04876604603448986&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=150").then(res=>{
      console.log(res.data.data.brand.brandrecommend);
      this.setState({
        bar1:res.data.data.recommend.categoryrecommend,
      })
    })

    axios.get("Services/Proxy.ashx?r=0.33272764421625234&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=257").then(res=>{
      console.log(res.data.data.brand.brandrecommend);
      this.setState({
        bar2:res.data.data.recommend.categoryrecommend,
      })
    })

    axios.get("Services/Proxy.ashx?r=0.1394014221200126&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=245").then(res=>{
      console.log(res.data.data.brand.brandrecommend);
      this.setState({
        bar3:res.data.data.recommend.categoryrecommend,
      })
    })

    axios.get("Services/Proxy.ashx?r=0.6684515360202832&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=151").then(res=>{
      console.log(res.data.data.brand.brandrecommend);
      this.setState({
        bar4:res.data.data.recommend.categoryrecommend,
        show:false
      })
    })
     

	}
	render(){
    const tabs = [
  { title: this.state.cool[0] },
  { title: this.state.cool[1] },
  { title: this.state.cool[2] },
  { title: this.state.cool[3] },
  { title: this.state.cool[4] },
];
	return<div>

  <ActivityIndicator toast text="正在加载"  animating={this.state.show}/>

    <div className="cig1">
<span className="dir1"><NavLink to="/"><i className="iconfont">&#xe60f;</i></NavLink></span>
      <span className="dir2"><i className="iconfont">&#xe63d;</i></span>
      分类
    </div>

    <div className="bo"></div>
	<div style={{ height: 550 }}>
    <WhiteSpace />
    <Tabs tabs={tabs}
      initalPage={'t2'}
      tabBarPosition="left"
      tabDirection="vertical"
    >
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '450px', backgroundColor: '#fff' }}>      
    <div className="co1">
      <ul>
      {this.state.bar.map(item=><li><img className="img111" src={item.imageurl} key={item.id}/><p>{item.name}</p></li>)}
      </ul>     
    </div>
  </div>
      
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '450px', backgroundColor: '#fff' }}>
    <div className="co1">
      <ul>
  {this.state.bar1.map(item=><li><img className="img111" src={item.imageurl} key={item.id}/><p>{item.name}</p></li>)}
      </ul>     
    </div>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '450px', backgroundColor: '#fff' }}>
    <div className="co1">
      <ul>
  {this.state.bar2.map(item=><li><img className="img111" src={item.imageurl} key={item.id}/><p>{item.name}</p></li>)}
      </ul>    
    </div>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '450px', backgroundColor: '#fff' }}>
    <div className="co1">
      <ul>
  {this.state.bar3.map(item=><li><img className="img111" src={item.imageurl} key={item.id}/><p>{item.name}</p></li>)}
      </ul>    
    </div>
  </div>

  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '450px', backgroundColor: '#fff' }}>
    <div className="co1">
      <ul>
  {this.state.bar4.map(item=><li><img className="img111" src={item.imageurl} key={item.id}/><p>{item.name}</p></li>)}
      </ul>    
    </div>
  </div>

    </Tabs>
    <WhiteSpace />
    <div className="div111"></div>
  </div>

	<Bottom/>		
	</div>
	}
}
export default Brand;