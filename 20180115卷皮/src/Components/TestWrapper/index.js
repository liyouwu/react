import { Picker, List, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';
import arrayTreeFilter from 'array-tree-filter';
import React,{Component} from "react";
import { district, provinceLite } from 'antd-mobile-demo-data';
import ReactDOM  from "react-dom";


// 如果不是使用 List.Item 作为 children

class Test extends React.Component {

  constructor(){
    super();

  this.state = {
    data: [],
    cols: 1,
    pickerValue: [],
    asyncValue: [],
    visible: false,
  };

   this.onClick = () => {
    setTimeout(() => {
      this.setState({
        data: provinceLite,
      });
    }, 120);
  };

    this.onPickerChange = (val) => {
    console.log(val);
    let colNum = 1;
    const d = [...this.state.data];
    const asyncValue = [...val];

    this.setState({
      data: d,
      cols: colNum,
      asyncValue,
    });
  };

}
  

  // setVal() {
  //   this.props.form.setFieldsValue({
  //     district: ['340000', '340800', '340822'],
  //   });
  // },
  render() {
    const { getFieldProps } = this.props.form;
    return (<div>
      <WhiteSpace size="lg" />
      <List style={{ backgroundColor: '' }} className="picker-list">
        
        <Picker extra="请选择(可选)"
          data={district}
          title="请选择收货地址"
          {...getFieldProps('district', {
            initialValue: ['340000', '341500', '341502'],
          })}
          onOk={e => console.log('ok', e)}
          onDismiss={e => console.log('dismiss', e)}
        >
          <List.Item arrow="horizontal">收货地址</List.Item>
        </Picker>


         <Picker
          data={this.state.data}
          cols={this.state.cols}
          value={this.state.asyncValue}
          onPickerChange={this.onPickerChange}
          onOk={v => console.log(v)}
        >
          <List.Item arrow="horizontal" onClick={this.onClick}>选择尺码</List.Item>
        </Picker>
      




      </List>
    </div>);
  }
}

const TestWrapper = createForm()(Test);

ReactDOM.render(<TestWrapper />, document.getElementById('box'));

export default TestWrapper;


