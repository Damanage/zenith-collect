(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0dcc5bd6"],{"054a":function(e,t,a){"use strict";var l=a("4047"),n=a.n(l);n.a},4047:function(e,t,a){},acca:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":"","pa-3":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{md12:""}},[a("material-card",{staticClass:"project-card-desc",attrs:{color:"custom-purple"}},[a("v-container",{attrs:{fluid:"","pa-0":""}},[a("v-layout",{staticClass:"card-header-wrp",attrs:{"pa-0":""}},[a("v-flex",{staticClass:"text-md-center card-header"},[e._v("\n                  Общие\n                ")])],1)],1),a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-container",[a("v-layout",[a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{readonly:"",color:"orange",label:"Наименование проекта",required:""},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{readonly:"",label:"Тип проекта",color:"orange",required:""},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{readonly:"",label:"Статус проекта",color:"orange",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1)],1),a("v-container",[a("v-layout",[a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{color:"orange",readonly:"",label:"Дата открытия",required:""},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{readonly:"",label:"Дата закрытия",color:"orange",required:""},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{rules:e.emailRules,label:"Куратор проекта",color:"orange",readonly:"",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1)],1)],1)],1),a("material-card",{staticClass:"project-card-desc",attrs:{color:"custom-purple"}},[a("v-form",[a("v-container",[a("v-layout",[a("v-flex",{attrs:{xs8:""}},[a("v-text-field",{attrs:{readonly:"",value:"u dont know",color:"orange",label:"Субъекты проекта",required:""},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}})],1),a("v-flex",{attrs:{xs4:""}},[a("v-text-field",{attrs:{readonly:"",color:"orange",label:"Статус проблемности",required:""},model:{value:e.troubleStatus,callback:function(t){e.troubleStatus=t},expression:"troubleStatus"}})],1)],1),a("v-layout",[a("v-flex",{attrs:{xs8:""}},[a("v-text-field",{attrs:{readonly:"",color:"orange",label:"Стратегия",required:""},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}})],1),a("v-flex",{attrs:{xs4:""}},[a("v-text-field",{attrs:{color:"orange",label:"Причина проблемности",required:""},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}})],1)],1)],1)],1)],1),a("material-card",{staticClass:"project-card-desc",attrs:{color:"custom-purple"}},[a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-container",[a("v-layout",[a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{readonly:"",color:"orange",label:"Менеджер проекта",required:""},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{readonly:"",label:"Балансодержатель",color:"orange",required:""},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{readonly:"",label:"Текущая задолженность",color:"orange",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1)],1),a("v-container",[a("v-layout",[a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{color:"orange",readonly:"",label:"Задолженность на дату открытия",required:""},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{readonly:"",label:"Бюджет проекта",color:"orange",required:""},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}})],1),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{rules:e.emailRules,label:"Фактические расходы",color:"orange",readonly:"",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1)],1)],1)],1)],1),a("v-flex",{attrs:{md12:""}},[a("v-tabs",{staticClass:"tabs-customize",attrs:{color:"custom-purple",dark:"","slider-color":"orange"},model:{value:e.tabinator,callback:function(t){e.tabinator=t},expression:"tabinator"}},e._l(e.tabs,function(t,l){return a("v-tab",{key:l,staticClass:"tab-menu-title",attrs:{ripple:""}},[e._v("\n              "+e._s(t.name)+" \n            ")])}),1),a("v-tabs-items",{model:{value:e.tabinator,callback:function(t){e.tabinator=t},expression:"tabinator"}},[a("v-tab-item",[a("subject")],1),a("v-tab-item",[e._v("\n              "+e._s(e.test)+"\n              credit contract\n            ")]),a("v-tab-item",[e._v("\n              charts of repayment\n            ")]),a("v-tab-item",[e._v("\n              guarantors contracts\n            ")]),a("v-tab-item",[e._v("\n              pledge contracts\n            ")]),a("v-tab-item",[e._v("\n              pledge objects\n            ")]),a("v-tab-item",[e._v("\n              balance\n            ")]),a("v-tab-item",[e._v("\n              to risk\n            ")]),a("v-tab-item",[e._v("\n              Strategy\n            ")]),a("v-tab-item",[e._v("\n              Tasks\n            ")])],1)],1)],1)],1)},n=[],r=a("cebc"),o=(a("cadf"),a("551c"),a("097d"),a("2f62")),s=a("7fd4"),c={data:function(){return{valid:!1,tabinator:null,firstname:"",lastname:"",troubleStatus:"Большой парень - большие проблемы",tabs:[{name:"Субъект проекта",content:"cont1"},{name:"Кредитные договоры",content:"cont1"},{name:"График погашения",content:"cont2"},{name:"Договоры поручительства",content:"cont3"},{name:"Договоры залога",content:"cont3"},{name:"Объекты залога",content:"cont3"},{name:"Бюджет",content:"cont3"},{name:"Риски",content:"cont3"},{name:"Стратегии",content:"cont3"},{name:"Задачи",content:"cont3"}],test:"<subject/>",nameRules:[function(e){return!!e||"Введите имя"},function(e){return e.length<=10||"Имя должно быть не больше 3 символов"}],email:"",emailRules:[function(e){return!!e||"введите cтатус"},function(e){return/.+@.+/.test(e)||"E-mail должен соответствовать стандарту email@post.com"}]}},computed:Object(r["a"])({},Object(o["c"])({projects:"getProjects"})),components:{subject:s["default"]},methods:Object(r["a"])({},Object(o["b"])({loadProjects:"loadProjects"}),{editItem:function(e){this.$router.push("/editproject/".concat(e.id))}}),created:function(){this.loadProjects()}},i=c,d=(a("054a"),a("2877")),m=Object(d["a"])(i,l,n,!1,null,null,null);m.options.__file="Projects.vue";t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-0dcc5bd6.b766a873.js.map