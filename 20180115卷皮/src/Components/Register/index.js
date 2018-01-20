import React,{Component} from "react";
import styles from "./index.css";
import {NavLink} from "react-router-dom";



class Register extends Component{

	constructor() {
    super();
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.state = {
      email:'',
      password:''
    };
		}
	

	render(){

		return<div>
			<div className="all">	 

      <div className="cig1">

<span className="dir1"><NavLink to="/"><i className="iconfont">&#xe60f;</i></NavLink></span>
      <span className="dir2"><i className="iconfont">&#xe63d;</i></span>
      注册
    </div>

    <div className="cig88"></div>
				
				




        <div className="middle1">
					<ul>
					<li> <input type="text" placeholder="用户昵称" /> </li>
					<li> <input type="text" onChange={this.handleEmailChange} id="inputEmail" placeholder="请输入用户名" ref="email"/> </li>
					<li> <input type="password" placeholder="请输入密码" onChange={this.handlePasswordChange} id="inputPassword" ref="password"  v-model="password"/></li>
					</ul>
				</div>
				
				<button className="btn3" onClick={this.signIn.bind(this,this.state.email,this.state.password)}>注册</button>


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
  
    		document.querySelector('button').className="btn3";
    		}
    		else
    		{
    		document.querySelector('button').className="btn4";
    			 }
		}
	handlePasswordChange(e){
    this.setState({password:e.target.value})
   
    var emailVal = this.refs.email.value;
    var passwordVal = this.refs.password.value;
    console.log(emailVal)
    console.log(passwordVal)
    
    if(emailVal===''||passwordVal===''){
   		
   		 	document.querySelector('button').className="btn3";
   	}else
   		{
   	document.querySelector('button').className="btn4";
   		 }


	}
	
	signIn(){
		var _this = this
    axios.post('/cool/register', {email: this.state.email,password: this.state.password}).then(function (res) {
  		if(res.data.result){
         alert("注册成功")
		_this.props.history.push('/home');
        }
        else{
          alert("请检查用户名或密码")
        }
  	})
	};           


		
	}

export default Register;