(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1016"],{"43cd":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":"","pa-3":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{md12:""}},[a("material-card",{attrs:{color:"green",title:t.firm.short_name,text:"Редактирование карточки"}},[a("v-form",[a("v-container",{attrs:{"pa-0":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:"","pa-0":""}},[a("v-flex",{attrs:{xs12:"",md10:""}},[a("v-text-field",{staticClass:"mx-1",attrs:{label:"ОПФ"},model:{value:t.firm.opf,callback:function(e){t.$set(t.firm,"opf",e)},expression:"firm.opf"}})],1)],1),a("v-flex",{attrs:{xs12:"",md6:"","pa-0":""}},[a("v-flex",{attrs:{xs12:"",md10:""}},[a("v-text-field",{staticClass:"mx-1",attrs:{label:"Полное наименование"},model:{value:t.firm.full_name,callback:function(e){t.$set(t.firm,"full_name",e)},expression:"firm.full_name"}})],1)],1),a("v-flex",{attrs:{xs12:"",md6:"","pa-0":""}},[a("v-flex",{attrs:{xs12:"",md10:""}},[a("v-text-field",{staticClass:"mx-1",attrs:{label:"Наименование"},model:{value:t.firm.short_name,callback:function(e){t.$set(t.firm,"short_name",e)},expression:"firm.short_name"}})],1)],1),a("v-flex",{attrs:{xs12:"",md6:"","pa-0":""}},[a("v-flex",{attrs:{xs12:"",md10:""}},[a("v-text-field",{staticClass:"mx-1",attrs:{label:"Вид деятельности"},model:{value:t.firm.action_type,callback:function(e){t.$set(t.firm,"action_type",e)},expression:"firm.action_type"}})],1)],1),a("v-flex",{attrs:{xs12:"",md6:"","pa-0":""}},[a("v-flex",{attrs:{xs12:"",md10:""}},[a("v-text-field",{staticClass:"mx-1",attrs:{label:"ИНН"},model:{value:t.firm.inn,callback:function(e){t.$set(t.firm,"inn",e)},expression:"firm.inn"}})],1)],1),a("v-flex",{attrs:{xs12:"",md6:"","pa-0":""}},[a("v-flex",{attrs:{xs12:"",md10:""}},[a("v-text-field",{staticClass:"mx-1",attrs:{label:"Филиал"},model:{value:t.firm.filial,callback:function(e){t.$set(t.firm,"filial",e)},expression:"firm.filial"}})],1)],1),a("v-flex",{attrs:{xs12:"",md6:"","pa-0":""}},[a("v-flex",{attrs:{xs12:"",md10:""}},[a("v-text-field",{staticClass:"mx-1",attrs:{label:"Код ОКВЭД"},model:{value:t.firm.okved,callback:function(e){t.$set(t.firm,"okved",e)},expression:"firm.okved"}})],1)],1),a("v-flex",{attrs:{xs12:"",md6:"","pa-0":""}},[a("v-flex",{attrs:{xs12:"",md10:""}},[a("v-text-field",{staticClass:"mx-1",attrs:{label:"Этап"},model:{value:t.firm.stage,callback:function(e){t.$set(t.firm,"stage",e)},expression:"firm.stage"}})],1)],1),a("v-flex",{attrs:{xs12:"",md6:"","pa-0":""}},[a("v-flex",{attrs:{xs12:"",md10:""}},[a("v-text-field",{staticClass:"mx-1",attrs:{value:t._f("fio")(t.firm.responsible),readonly:"",label:"Ответственный","append-icon":"account_box"}})],1)],1),a("v-flex",{attrs:{xs12:"",md6:"","pa-0":""}},[a("v-flex",{attrs:{xs12:"",md10:""}},[a("v-text-field",{staticClass:"mx-1",attrs:{label:"Статус"},model:{value:t.firm.status,callback:function(e){t.$set(t.firm,"status",e)},expression:"firm.status"}})],1)],1),a("v-flex",{attrs:{xs12:"",md6:"","pa-0":""}},[a("v-flex",{attrs:{xs12:"",md10:""}},[a("v-text-field",{staticClass:"mx-1",attrs:{value:t.contactProject.full_name,readonly:"",label:"Наименование проекта","append-icon":"search"},on:{"click:append":function(e){t.dialog=!0}}})],1)],1)],1)],1)],1)],1)],1)],1),a("dialog-select",{attrs:{"show-dialog":t.dialog,"current-selection":t.contactProject,"list-collection":t.projects,"item-property":"full_name"},on:{itemSelected:t.returnDialog}})],1)},l=[],i=a("cebc"),r=a("2f62"),f=a("c75e"),c={data:function(){return{dialog:!1,contactProject:{}}},computed:Object(i["a"])({},Object(r["c"])({firm:"getFirm",projects:"getProjects"})),methods:Object(i["a"])({returnDialog:function(t){this.contactProject=t||this.contactProject,this.dialog=!1}},Object(r["b"])({saveFirm:"saveFirm",findFirm:"findFirm"}),{goBack:function(){this.$router.push("/firms")}}),watch:{firm:function(t){this.contactProject=t&&t.project||{}}},created:function(){var t=this,e=this.$route.params.id;this.findFirm(e),f["a"].$on(f["b"].EVENT_SAVE,function(){t.saveFirm(t.firm)})},beforeDestroy:function(){f["a"].$off(f["b"].EVENT_SAVE)}},o=c,n=a("2877"),m=Object(n["a"])(o,s,l,!1,null,"8251e93a",null);m.options.__file="EditFirm.vue";e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0c1016.c6328ede.js.map