(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0dcc5bd6"],{"054a":function(t,n,e){"use strict";var a=e("4047"),c=e.n(a);c.a},4047:function(t,n,e){},acca:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":"","pa-3":""}},[e("v-layout",{attrs:{"justify-center":"",wrap:""}},[e("v-flex",{attrs:{md12:""}},[e("v-tabs",{staticClass:"tabs-customize",attrs:{color:"custom-purple",dark:"","slider-color":"orange"},model:{value:t.tabinator,callback:function(n){t.tabinator=n},expression:"tabinator"}},t._l(t.tabs,function(n,a){return e("v-tab",{key:a,staticClass:"tab-menu-title",attrs:{ripple:""}},[t._v("\n              "+t._s(n.name)+" \n            ")])}),1),e("v-tabs-items",{model:{value:t.tabinator,callback:function(n){t.tabinator=n},expression:"tabinator"}},[e("v-tab-item",[e("subject")],1),e("v-tab-item",[t._v("\n              "+t._s(t.test)+"\n              credit contract\n            ")]),e("v-tab-item",[t._v("\n              charts of repayment\n            ")]),e("v-tab-item",[t._v("\n              guarantors contracts\n            ")]),e("v-tab-item",[t._v("\n              pledge contracts\n            ")]),e("v-tab-item",[t._v("\n              pledge objects\n            ")]),e("v-tab-item",[t._v("\n              balance\n            ")]),e("v-tab-item",[t._v("\n              to risk\n            ")]),e("v-tab-item",[t._v("\n              Strategy\n            ")]),e("v-tab-item",[t._v("\n              Tasks\n            ")])],1)],1)],1)],1)},c=[],o=e("cebc"),s=(e("cadf"),e("551c"),e("097d"),e("2f62")),r=e("7fd4"),i={data:function(){return{tabinator:null,tabs:[{name:"Субъект проекта",content:"cont1"},{name:"Кредитные договоры",content:"cont1"},{name:"График погашения",content:"cont2"},{name:"Договоры поручительства",content:"cont3"},{name:"Договоры залога",content:"cont3"},{name:"Объекты залога",content:"cont3"},{name:"Бюджет",content:"cont3"},{name:"Риски",content:"cont3"},{name:"Стратегии",content:"cont3"},{name:"Задачи",content:"cont3"}],test:"<subject/>"}},computed:Object(o["a"])({},Object(s["c"])({projects:"getProjects"})),components:{subject:r["default"]},methods:Object(o["a"])({},Object(s["b"])({loadProjects:"loadProjects"}),{editItem:function(t){this.$router.push("/editproject/".concat(t.id))}}),created:function(){this.loadProjects()}},l=i,b=(e("054a"),e("2877")),u=Object(b["a"])(l,a,c,!1,null,null,null);u.options.__file="Projects.vue";n["default"]=u.exports}}]);
//# sourceMappingURL=chunk-0dcc5bd6.078e415f.js.map