webpackJsonp([4],{21:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=a(4),s=(i(o),a(39)),n=i(s);e.default={mixins:[n.default],methods:{_pullList:function(){var t=this.page,e=this.$route,a=e.query.tab,i=void 0===a?"all":a;return{url:"/api/v1/topics",data:{page:t,tab:i}}}}}},39:function(t,e,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},s=a(8),n=i(s),r=a(4),l=i(r),d=a(6),c=i(d),h=function(){return n.default.object(history.state)?history.state.key:location.href};e.default={mixins:[c.default],routeData:function(){return{complete:!1,loading:!1,page:1,list:[]}},mounted:function(){this.loading=!1},created:function(){var t=this;h()!=this.list.key?1==this.page?(this.pullList(),this.list.key=h()):(o(this.$data,this.$options.routeData()),this.$nextTick(function(){t.list.key=h(),t.pullList()})):this.loading=!1},watch:{$route:function(){var t=this;h()!=this.list.key&&(o(this.$data,this.$options.routeData()),this.$nextTick(function(){t.list.key=h(),t.pullList()}))}},methods:{pullList:function(){var t=this;if(!this.complete&&!this.loading){this.loading=!0;var e=this._pullList(),a=e.url,i=e.data,o=void 0===i?{}:i;l.default.get(a,o,function(e){var a=e.data;t.loading=!1,a.length>0?a.forEach(function(e){return t.list.push(e)}):t.complete=!0,t.page++})}},seeing:function(){this.pullList()}}}},55:function(t,e,a){e=t.exports=a(1)(),e.push([t.id,'.nav[data-v-3ae534f8]{position:absolute;top:0;right:0;left:0;z-index:10;border-bottom:1px solid #ddd}.nav ul[data-v-3ae534f8]{overflow:hidden;padding:0;margin:0}.nav ul li[data-v-3ae534f8]{position:relative;list-style:none;line-height:49px;text-align:center}.nav ul a[data-v-3ae534f8]{display:block;text-decoration:none;font-size:14px;color:#a2a2a2}.nav ul .active[data-v-3ae534f8]:after{content:"";position:absolute;right:0;left:0;bottom:1px;z-index:1;height:3px;background:#80bd01}.nav ul .active a[data-v-3ae534f8]{color:#222}.list[data-v-3ae534f8]{overflow:hidden;padding:0;margin:0;background:#eee}.list li[data-v-3ae534f8]{position:relative;padding:15px 15px 0;margin-bottom:15px;list-style:none;box-shadow:0 0 5px #ccc;background:#fff}.list .top[data-v-3ae534f8]{height:40px}.list .top .headimg[data-v-3ae534f8]{overflow:hidden;width:30px;height:30px;border-radius:50%;border:1px solid #ddd;background-position:50%;background-size:cover}.list .top .box[data-v-3ae534f8]{padding-left:5px}.list .top .box strong[data-v-3ae534f8]{line-height:24px;font-size:16px;font-weight:400;color:#080808}.list .top .box time[data-v-3ae534f8]{line-height:16px;font-size:12px;font-style:normal;color:#aaa}.list .top .box .tag[data-v-3ae534f8]{margin-left:4px;line-height:16px;font-size:12px;font-style:normal;color:#80bd01}.list .tit[data-v-3ae534f8]{padding:10px 0;line-height:22px;font-size:16px;font-weight:700;color:#222}.expand[data-v-3ae534f8]{padding:10px 0;border-top:1px solid #e1e1e1;text-align:center}.expand .item[data-v-3ae534f8]{padding:0 10px;line-height:20px;text-align:center;border-right:1px solid #e1e1e1}.expand .item[data-v-3ae534f8]:last-of-type{border:none}.expand .item .iconfont[data-v-3ae534f8]{color:#aaa}.expand .item .num[data-v-3ae534f8],.expand .item .time[data-v-3ae534f8]{padding-left:3px;font-size:12px;color:#aaa}.expand .item .pic[data-v-3ae534f8],.expand .item img[data-v-3ae534f8]{width:16px;height:16px;background:#e1e1e1;background-size:cover;background-position:50%}.expand .item .pic[data-v-3ae534f8]{overflow:hidden;border-radius:50%}',""])},83:function(t,e,a){var i,o;a(117),i=a(21);var s=a(100);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-3ae534f8",t.exports=i},100:function(module,exports){module.exports={render:function(){with(this)return _h("div",[_h("nav",{staticClass:"nav"},[_h("ul",{attrs:{flex:"box:mean"}},[_h("li",{class:{active:!this.$route.query.tab}},[_h("router-link",{attrs:{to:"/"}},["全部"])])," ",_h("li",{class:{active:"good"==this.$route.query.tab}},[_h("router-link",{attrs:{to:"/?tab=good"}},["精华"])])," ",_h("li",{class:{active:"share"==this.$route.query.tab}},[_h("router-link",{attrs:{to:"/?tab=share"}},["分享"])])," ",_h("li",{class:{active:"ask"==this.$route.query.tab}},[_h("router-link",{attrs:{to:"/?tab=ask"}},["问答"])])," ",_h("li",{class:{active:"job"==this.$route.query.tab}},[_h("router-link",{attrs:{to:"/?tab=job"}},["招聘"])])])])," ",_h("v-content",{directives:[{name:"scroll-record",rawName:"v-scroll-record"}]},[_h("ul",{staticClass:"list"},[_l(list,function(t){return _h("li",{key:"item.id"},[_h("router-link",{attrs:{to:"/topic/"+t.id}},[_h("div",{staticClass:"top",attrs:{flex:"box:first"}},[_h("div",{staticClass:"headimg",style:{backgroundImage:"url("+t.author.avatar_url+")"}})," ",_h("div",{staticClass:"box",attrs:{flex:"dir:top"}},[_h("strong",[_s(t.author.loginname)])," ",_h("div",{attrs:{flex:""}},[_h("time",[_s(_f("formatDate")(t.create_at))])," ",_m(0,!0)])])])," ",t.top||t.good?_h("div",{staticClass:"common-typeicon",attrs:{flex:""}},[t.good?_h("div",{staticClass:"icon"},[_m(1,!0)]):_e()," ",t.top?_h("div",{staticClass:"icon"},[_m(2,!0)]):_e()]):_e()," ",_h("div",{staticClass:"tit"},[_s(t.title)])," ",_h("div",{staticClass:"expand",attrs:{flex:"box:mean"}},[_h("div",{staticClass:"item click",attrs:{flex:"main:center cross:center"}},[_m(3,!0)," ",_h("div",{staticClass:"num"},[_s(t.visit_count>0?t.visit_count:"暂无阅读")])])," ",_h("div",{staticClass:"item reply",attrs:{flex:"main:center cross:center"}},[_m(4,!0)," ",_h("div",{staticClass:"num"},[_s(t.reply_count>0?t.reply_count:"暂无评论")])])," ",_h("div",{staticClass:"item last-reply",attrs:{flex:"main:center cross:center"}},[_h("div",{staticClass:"pic"},[_h("img",{style:{backgroundImage:"url("+t.author.avatar_url+")"},attrs:{alt:""}})])," ",_h("time",{staticClass:"time"},[_s(_f("formatDate")(t.last_reply_at))])])])])])})])," ",_h("v-loading",{attrs:{complete:complete,loading:loading},on:{seeing:seeing}})])," ",_h("v-footer")])},staticRenderFns:[function(){with(this)return _h("span",{staticClass:"tag"},["#分享#"])},function(){with(this)return _h("i",{staticClass:"iconfont icon-topic-good"})},function(){with(this)return _h("i",{staticClass:"iconfont icon-topic-top"})},function(){with(this)return _h("i",{staticClass:"iconfont icon-click"})},function(){with(this)return _h("i",{staticClass:"iconfont icon-comment"})}]}},117:function(t,e,a){var i=a(55);"string"==typeof i&&(i=[[t.id,i,""]]),a(2)(i,{}),i.locals&&(t.exports=i.locals)}});