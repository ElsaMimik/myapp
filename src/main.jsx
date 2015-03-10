var React=require("react");
var kse=require("ksana-search");
var maincomponent = React.createClass({
  getInitialState:function() {
    return {result:[],tofind:"君子"};
  },
  search:function() {
    kse.search("sample",this.state.tofind,{range:{start:0}},function(err,data){
      this.setState({result:data.excerpt});
    },this);
  },
  renderItem:function(item) {
    return <div dangerouslySetInnerHTML={{__html:item.text}}></div>
  },
  setTofind:function(e) {
    this.setState({tofind:e.target.value})
  },
  render: function() {
    return <div><input ref="tofind" value={this.state.tofind} onChange={this.setTofind}></input>
    <button onClick={this.search} >Search</button>
      {this.state.result.map(this.renderItem)}

    </div>;
  }
});
module.exports=maincomponent;