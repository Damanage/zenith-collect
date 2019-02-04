<template>
  <v-app>
    <div class="app-background"></div>
    <core-toolbar class="zn-navbar"/>
    
    <core-drawer class="zn-sidebar" v-if="$route.name !== 'Вход'"/>

    <core-view class="zn-content"/>
  </v-app>
</template>

<style lang="scss">
@import '@/styles/index.scss';

body::before{
  content: "";
  position: fixed;
  top: 0; left: 0;
  width: 100%; 
  height: 100%;
  z-index: 1;
  background-image: url('../public/img/zenith_bg-min.jpg') !important;
  background-size: cover;
  // filter: opacity(70%);
}
/* Remove in 1.2 */
/* temp custom layout for demo*/
::-webkit-scrollbar { 
  display: none; 
}
.application{
  background: transparent !important;
  // margin-top: 10vh;
  // height: 90vh;
  overflow: hidden;
  
}

.application--wrap{
  overflow: scroll;
  &::-webkit-scrollbar { 
    display: none;
    // position: absolute;
    // top: 0;
    // right: 18; 
  }
}
.v-content{
  margin-top: -4px !important;
  padding: 0 0px 0px 260px !important;
}
.app-background{
  left: 99px;
  top: 13px;
  position: fixed;
  border-radius: 4px;
  // background: linear-gradient(0deg, #F1F1FF, #F1F1FF), #EEEEEE;
  z-index: 1;
  background:rgba(21, 38, 63, 0.7);
  height: 85vh;
  width: 93vw;
}
.zn-sidebar{
  // position: absolute !important;
  // top: 22px;
  z-index: 5;
  margin-top: 30px !important;
  margin-left: 30px !important;
  margin-bottom: 10px;
}
.zn-navbar{
  z-index: 12;
  padding-left: 292px !important;
  margin-top: 30px !important;
  padding-right: 30px !important;
}
.zn-content{
  overflow: hidden;
  // height: 90vh;
  position: fixed;
  top: 121px;
  height: 100%;
  z-index: 3;
  margin: -4px 30px 30px 30px !important;
}
.v-content__wrap{
  overflow: scroll;
  // scroll-behavior: smooth;
}
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
