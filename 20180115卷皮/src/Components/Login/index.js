import React,{Component} from "react";
import styles from "./index.css";
import {NavLink} from "react-router-dom";



class Login extends Component{
	constructor() {
    super();
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      email:'',
      password:''
    };}

   
	render(){
		return<div>
	<div className="all">	
	 <div className="cig1">

  <span className="dir1"><NavLink to="/"><i className="iconfont">&#xe60f;</i></NavLink></span>
        <span className="dir2"><i className="iconfont">&#xe63d;</i></span>
        登录
      </div>

      <div className="cig88"></div>
		<div className="middle">
			<ul>
				<li><input type="text" placeholder="请输入用户名" onFocus={this.onFocusemail} onChange={this.handleEmailChange} id="inputEmail" v-model="email"  ref="email"/> </li>
				<li><input type="password" placeholder="请输入密码" onFocue={this.onFocuspassword} onChange={this.handlePasswordChange} id="inputPassword"  v-model="password" ref="password"/></li>
			</ul>
		</div>
		<button className="btn1" onClick={this.signIn.bind(this,this.state.email,this.state.password)}>登录</button>
	</div>
	
		</div>
	}



	
	handleEmailChange(e){
    this.setState({email:e.target.value})

    	 var emailVal = this.refs.email.value;
    	 var passwordVal = this.refs.password.value;
    	 console.log(emailVal)
    	 console.log(passwordVal)
    	 
    	 if(emailVal===''||passwordVal===''){

    		document.querySelector('button').className="btn1";
    		}
    		else
    		{
    		document.querySelector('button').className="btn2";
    			 }
		}
	handlePasswordChange(e){
    this.setState({password:e.target.value})
   
    var emailVal = this.refs.email.value;
    var passwordVal = this.refs.password.value;
    console.log(emailVal)
    console.log(passwordVal)
    
    if(emailVal===''||passwordVal===''){
   		
   		 	document.querySelector('button').className="btn1";
   	}else
   		{
   	document.querySelector('button').className="btn2";
   		 }


	}

	signIn(){
		var _this = this
    axios.post('/cool/login', {email: this.state.email,password: this.state.password}).then(function (res) {
  		if(res.data.result){
  			_this.props.history.push('/home');
        }
        else{
         alert("登录失败")
        }
  	})       
	}
}

export default Login;