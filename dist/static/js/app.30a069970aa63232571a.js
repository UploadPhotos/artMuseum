webpackJsonp([1],{NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=r("VU/8")({name:"App"},s,!1,function(e){r("ZEO7")},null,null).exports,a=r("/ocq"),o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._v(" "),r("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),r("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),r("br"),e._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var u=r("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},o,!1,function(e){r("OVGu")},"data-v-d8ec41bc",null).exports,l=r("7QTg"),c=r.n(l),p={name:"index",components:{swiper:l.swiper,swiperSlide:l.swiperSlide},data:function(){var e=this;return{swiperOption:{notNextTick:!0,direction:"vertical",grabCursor:!0,setWrapperSize:!0,autoHeight:!0,slidesPerView:1,mousewheel:!1,mousewheelControl:!1,height:window.innerHeight,resistanceRatio:0,observeParents:!0,debugger:!0,onTransitionStart:function(e){console.log(e)},on:{slideChange:function(){var t=e.$refs.mySwiper.swiper;console.log(t.activeIndex)}}}}},methods:{openTouch:function(){this.$router.push({path:"touch"})}},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},mounted:function(){console.log("this is current swiper instance object",this.swiper),this.swiper.slideTo(0,1e3,!1)},watch:{}},v={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("transition",{attrs:{name:"fade"}},[r("swiper",{ref:"mySwiper",attrs:{id:"swiperBox",options:e.swiperOption}},[r("swiper-slide",{staticClass:"swiper-slide1"},[r("div",{staticClass:"page"},[r("h3",[e._v("第一页")]),e._v(" "),r("button",{on:{click:e.openTouch}},[e._v("跳转")])])]),e._v(" "),r("swiper-slide",{staticClass:"swiper-slide2"},[r("div",{staticClass:"page"},[r("h3",[e._v("第二页")])])]),e._v(" "),r("swiper-slide",{staticClass:"swiper-slide3"},[r("div",{staticClass:"page"},[r("h3",[e._v("第三页")])])])],1)],1)],1)},staticRenderFns:[]};var h=r("VU/8")(p,v,!1,function(e){r("cibT")},"data-v-dea9f146",null).exports,_={data:function(){return{}},methods:{swiperleft:function(){alert(111),this.$router.push({path:"swiper"})},swiperright:function(){alert(2222),this.$router.push({path:"HelloWord"})}}},d={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v("testRouter.vue")]),e._v(" "),r("v-touch",{staticClass:"wrapper",on:{swipeleft:e.swiperleft}},[e._v("left")]),e._v(" "),r("v-touch",{staticClass:"wrapper",on:{swiperight:e.swiperright}},[e._v("right")]),e._v(" "),r("div",{ref:"menuContainer",staticClass:"menu-container"},[e._v("\n  111111111111111111111111111\n  ")])],1)},staticRenderFns:[]};var f=r("VU/8")(_,d,!1,function(e){r("kIQp")},null,null).exports;n.a.use(a.a);var w=new a.a({routes:[{path:"/HelloWorld",name:"HelloWorld",component:u},{path:"/",name:"swiper",component:h},{path:"/touch",name:"touch",component:f}]}),m=(r("v2ns"),r("I0MY")),g=r.n(m);n.a.use(c.a),n.a.use(g.a,{name:"v-touch"}),n.a.config.productionTip=!1,g.a.config.swipe={threshold:100},new n.a({el:"#app",router:w,components:{App:i},template:"<App/>"})},OVGu:function(e,t){},ZEO7:function(e,t){},cibT:function(e,t){},kIQp:function(e,t){},v2ns:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.30a069970aa63232571a.js.map