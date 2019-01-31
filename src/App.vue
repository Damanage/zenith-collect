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

/* Remove in 1.2 */
/* temp custom layout for demo*/
.application{
  background-color: white !important;
}
.app-background{
  left: 99px;
  top: 13px;
  position: absolute;
  border-radius: 4px;
  // background: linear-gradient(0deg, #F1F1FF, #F1F1FF), #EEEEEE;
  z-index: 1;
  background-color: #F1F1FF;
  height: 85vh;
  width: 93vw;
}
.zn-sidebar{
  z-index: 3;
  margin-top: 30px !important;
  margin-left: 30px !important;
  margin-bottom: 10px;
}
.zn-navbar{
  z-index: 3;
  padding-left: 292px !important;
  margin-top: 30px !important;
  padding-right: 30px !important;
}
.zn-content{
  z-index: 3;
  margin: 30px !important;
}
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
