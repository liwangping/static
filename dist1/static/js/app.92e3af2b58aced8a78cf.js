webpackJsonp([1],{HVPE:function(t,s){},NHnr:function(t,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=o("7+uW"),e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"left-nav"},[o("ul",[o("li",[o("i",{staticClass:"icon iconfont icon-goumai"}),t._v(" "),o("div",{},[t._v("收银")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-dianpu"}),t._v(" "),o("div",{},[t._v("店铺")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-hanbao"}),t._v(" "),o("div",{},[t._v("商品")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-huiyuanqia"}),t._v(" "),o("div",{},[t._v("会员")])]),t._v(" "),o("li",[o("i",{staticClass:"icon iconfont icon-liebiao"}),t._v(" "),o("div",{},[t._v("统计")])])])])}]};var n={name:"App",components:{leftNav:o("VU/8")({name:"leftNav",data:function(){return{}}},e,!1,function(t){o("ejOh")},null,null).exports}},i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("leftNav"),this._v(" "),s("div",{staticClass:"main"},[s("router-view")],1)],1)},staticRenderFns:[]};var l=o("VU/8")(n,i,!1,function(t){o("zT7A")},null,null).exports,c=o("/ocq"),r=o("mtWM"),d=o.n(r),u={name:"Pos",data:function(){return{tableData:[],oftenGoods:[],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[],totalMoney:0,totalCount:0}},created:function(){var t=this;d.a.get("https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods").then(function(s){console.log(s,"后台传来的数据"),t.oftenGoods=s.data}).catch(function(t){console.log(t),alert("网络错误，不能访问")})},mounted:function(){var t=document.body.clientHeight;console.log(t),document.getElementById("order_list").style.height=t+"px"},methods:{addOrderList:function(t){this.totalCount=0,this.totalMoney=0;for(var s=!1,o=0;o<this.tableData.length;o++)this.tableData[o].goodsId==t.goodsId&&(s=!0),console.log(s);if(s){this.tableData.filter(function(s){return s.goodsId==t.goodsId})[0].count++}else{var a={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(a)}this.getAllMoney()},delSingGoods:function(t){console.log(t),this.tableData=this.tableData.filter(function(s){return s.goodsId!=t.goodsId}),this.getAllMoney()},delAllGoods:function(){this.tableData=[],this.totalCount=0,this.totalMoney=0},getAllMoney:function(){var t=this;this.totalCount=0,this.totalMoney=0,this.tableData&&this.tableData.forEach(function(s){t.totalCount+=s.count,t.totalMoney=t.totalMoney+s.price*s.count})},checkout:function(){0!=this.totalCount?(this.tableData=[],this.totalCount=0,this.totalMoney=0,this.$message({message:"结账成功，感谢你又为店里出了一份力!",type:"success"})):this.$message.error("不能空结。老板了解你急切的心情！")}}},v={render:function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"pos"},[o("div",[o("el-row",[o("el-col",{staticClass:"pos-order",attrs:{span:7,id:"order_list"}},[o("div",{staticClass:"nav_list_left"},[o("el-tabs",[o("el-tab-pane",{attrs:{label:"点餐",width:"100%"}},[o("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"","show-summary":""}},[o("el-table-column",{attrs:{prop:"goodsName",label:"商品"}}),t._v(" "),o("el-table-column",{attrs:{prop:"count",label:"量",width:"50"}}),t._v(" "),o("el-table-column",{attrs:{prop:"price",label:"金额",width:"70"}}),t._v(" "),o("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(s){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){return t.delSingGoods(s.row)}}},[t._v("删除")]),t._v(" "),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){return t.addOrderList(s.row)}}},[t._v("增加")])]}}])})],1),t._v(" "),o("div",{staticClass:"totalDiv"},[o("small",[t._v(" 数量：")]),t._v(t._s(t.totalCount)+"       "),o("small",[t._v("金额：")]),t._v(" "+t._s(t.totalMoney)+"元\n                    ")]),t._v(" "),o("div",{staticClass:"div_btn"},[o("el-button",{attrs:{type:"warning"}},[t._v("挂单")]),t._v(" "),o("el-button",{attrs:{type:"danger"},on:{click:function(s){return t.delAllGoods()}}},[t._v("删除")]),t._v(" "),o("el-button",{attrs:{type:"success"},on:{click:function(s){return t.checkout()}}},[t._v("结账")])],1)],1),t._v(" "),o("el-tab-pane",{attrs:{label:"挂单"}},[t._v("\n                  挂单\n                ")]),t._v(" "),o("el-tab-pane",{attrs:{label:"外卖"}},[t._v("\n                  外卖\n                ")])],1)],1)]),t._v(" "),o("el-col",{attrs:{span:17}},[o("div",{staticClass:"often-goods"},[o("div",{staticClass:"title"},[t._v("常用商品")]),t._v(" "),o("div",{staticClass:"often-goods-list"},[o("ul",t._l(t.oftenGoods,function(s){return o("li",{on:{click:function(o){return t.addOrderList(s)}}},[o("span",[t._v(t._s(s.goodsName))]),t._v(" "),o("span",{staticClass:"o-price"},[t._v("￥"+t._s(s.price))])])}),0)])]),t._v(" "),o("div",{staticClass:"goods-type"},[o("el-tabs",[o("el-tab-pane",{attrs:{label:"汉堡"}},[o("div",[o("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(s){return o("li",[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}),0)])]),t._v(" "),o("el-tab-pane",{attrs:{label:"小食"}},[o("div",[o("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(s){return o("li",[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}),0)])]),t._v(" "),o("el-tab-pane",{attrs:{label:"饮料"}},[o("div",[o("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(s){return o("li",[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}),0)])]),t._v(" "),o("el-tab-pane",{attrs:{label:"套餐"}},[o("div",[o("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(s){return o("li",[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}),0)])])],1)],1)])],1)],1)])},staticRenderFns:[]};var _=o("VU/8")(u,v,!1,function(t){o("HVPE")},"data-v-2863a361",null).exports;a.default.use(c.a);var f=new c.a({routes:[{path:"/",name:"Pos",component:_}]}),p=o("zL8q"),h=o.n(p);o("tvR6");a.default.config.productionTip=!1,a.default.use(h.a),new a.default({el:"#app",router:f,components:{App:l},template:"<App/>"})},ejOh:function(t,s){},tvR6:function(t,s){},zT7A:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.92e3af2b58aced8a78cf.js.map