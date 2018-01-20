
import React,{Component} from "react";
import ReactDOM  from "react-dom";

import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

class Swiper extends React.Component {

   constructor(){
    super();
  this.state = {
    data: ['1', '2', '3'],
    slideIndex: 0,
  }
};
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['171116/6/9/5a0d3e7ca9fcf829c0579461_800x800','171116/e/8/5a0d0c508150a1622210622d_800x800','171213/f/3/5a30dd958150a145f97f2f4c_800x800','171116/a/8/5a0d016aa9fcf80da5168107_800x800' ],
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel className="space-carousel"
          frameOverflow="visible"
          cellSpacing={10}
          slideWidth={0.8}
          autoplay
          infinite
          dots={false}
          slideWidth="150px"
        >
          {this.state.data.map((val, index) => (
              <img
                src={`https://goods8.juancdn.com/goods/${val}.jpg?imageMogr2/thumbnail/310x310!`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top',height:'90px' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                }}
              />
          
          ))}
        </Carousel>

        <WhiteSpace />
  
      </WingBlank>
    );
  }
}
ReactDOM.render(<Swiper />, document.getElementById('box'));

export default Swiper;

