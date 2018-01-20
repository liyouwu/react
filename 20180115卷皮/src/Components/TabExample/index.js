import { Tabs, WhiteSpace } from 'antd-mobile';
import React,{Component} from "react";
import ReactDOM  from "react-dom";

import { Grid } from 'antd-mobile';

const tabs = [
  { title: '1 Tab' },
  { title: '2 Tab' },
  { title: '3 Tab' },
  { title: '3 Tab' },
  { title: '3 Tab' },
  { title: '3 Tab' },
  { title: '3 Tab' },  
];
const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

const data1 = Array.from(new Array(9)).map(() => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));

const TabExample = () => (
  <div style={{ height: 650 }}>
    <WhiteSpace />
    <Tabs tabs={tabs}
      initalPage={'t2'}
      tabBarPosition="left"
      tabDirection="vertical"
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '450px', backgroundColor: '#fff' }}>
           <div className="sub-title"></div>
          <Grid data={data} square={false} itemStyle="height:10px;"  hasLine={false} className="not-square-grid" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of second tab
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
        Content of third tab
      </div>
    </Tabs>
    <WhiteSpace />
  </div>
);


ReactDOM.render(<TabExample />, document.getElementById('box'));

export default TabExample;


<div class="am-tabs-default-bar am-tabs-default-bar-animated am-tabs-default-bar-left" style="background-color: rgb(255, 255, 255);">
<div class="am-tabs-default-bar-prevpage"></div>
<div class="am-tabs-default-bar-content" style="touch-action: pan-x; transform: translate3d(0px, -192px, 0px);">
<div class="am-tabs-default-bar-tab" style="height: 20%;">1 Tab</div>
<div class="am-tabs-default-bar-tab" style="height: 20%;">2 Tab</div>
<div class="am-tabs-default-bar-tab" style="height: 20%;">3 Tab</div>
<div class="am-tabs-default-bar-tab am-tabs-default-bar-tab-active" style="height: 20%;">3 Tab</div>
<div class="am-tabs-default-bar-tab" style="height: 20%;">3 Tab</div>
<div class="am-tabs-default-bar-tab" style="height: 20%;">3 Tab</div>
<div class="am-tabs-default-bar-tab" style="height: 20%;">3 Tab</div>
<div class="am-tabs-default-bar-underline" style="height: 20%; top: 60%;"></div></div>
<div class="am-tabs-default-bar-nextpage"></div></div>