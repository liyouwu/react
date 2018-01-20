import React,{Component} from "react";
import styles from "./index.css";

import Bottom from '@/Components/Common/Bottom'
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'

class App extends Component{

	render(){

		return<div>

			
		
	
			{this.props.children}
		</div>
	}
}

export default App;