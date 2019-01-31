<template>
  
  <v-toolbar
    id="core-toolbar"
    color="transparent"
    card
    app
    style="background: #eee;"
    >
    
    <v-layout class="header-custom-style" justify-center>
      <div class="v-toolbar-title">

        <v-toolbar-title
                class="white--text font-weight-">
          <v-btn
                  v-if="responsive"
                  class="default v-btn--simple"
                  dark
                  icon
                  @click.stop="onClickBtn">
            <v-icon>mdi-view-list</v-icon>
          </v-btn>
          {{ title }}
        </v-toolbar-title>

        <!-- <v-spacer /> -->
        <v-toolbar-items v-if="title !== 'Вход'">
          <v-flex class="toolbar-flex right-toolbar"
            align-center
            layout
            py-2>
            <div class="tb-item toolbar-import">
              <v-btn
                small
                :loading="loading"
                :disabled="loading"
                flat
                class="custom-purple"
                @click="loader = 'loading'"
                >
                
                <v-icon color="white">mdi-file-import</v-icon>
                Импорт Данных
              </v-btn>
            </div>
            <v-divider light vertical inset />
            <div class="tb-item tb-select toolbar-getmoney">
              <v-badge
                color="white"
                v-model="show"
              >
                <span style="color:orange; font-size: 10px;" slot="badge">8</span>
                <v-select
                  dark
                  color="#04AFC4"
                  :items="items"
                  menu-props="auto"
                  label="Взыскание"
                  hide-details
                >
                
                </v-select>
              </v-badge>
              
            </div>
            
            <div class="tb-item tb-select toolbar-settings">
              <v-select
                dark
                color="#04AFC4"
                :items="items"
                menu-props="auto"
                label="Настройки"
                hide-details
              ></v-select>
            </div>
            <router-link
              v-ripple
              class="toolbar-items"
              to="/">
              <v-icon color="white">mdi-home</v-icon>
            </router-link>
            <v-btn
              v-ripple
              flat icon
              class="toolbar-items"
              @click="logOut">
              <v-icon color="white">mdi-exit-to-app</v-icon>
            </v-btn>
          </v-flex>
        </v-toolbar-items>


      </div>
    </v-layout>
    
    
    
    
    

    


  </v-toolbar>

</template>

<script>

import {
  mapMutations
} from 'vuex';

import { EventBus, EventName} from '@/utils/eventbus';

export default {
  data: () => ({
    title: null,
    responsive: false,
    responsiveInput: false,
    showEdit: false,
    items: ["Олег","Может","и","Лучше"],
    loader: null,
    loading: false,
  }
  ),
  // data(){
  //   return {loader: null}
  // },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
    '$route' (to, from) {
      this.title = to.name;
      this.showEdit = to.path.indexOf('edit') > 0;
    }
  },

  computed: {
  },

  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },

  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onClickBtn () {
      this.setDrawer(!this.$store.state.app.drawer)
    },
    ...mapMutations({
      logOut: 'logOut'
    }),
    onClick () {
      //
    },
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
        this.responsiveInput = false
      } else {
        this.responsive = false
        this.responsiveInput = true
      }
    },
    onSaveClick(){
      EventBus.$emit(EventName.EVENT_SAVE,{});
    }
  }
}
</script>

<style>
  .right-toolbar button, label{
    font-size: 12px !important;
  }
  .v-toolbar .v-toolbar__content .v-toolbar__title{
    font-size: 15px !important;
  }
  #core-toolbar a {
    text-decoration: none;
  }
  .v-toolbar__content{
    padding: 0 15px !important;
    
  }
  .v-toolbar-title{
    width: 99%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header-custom-style{
    background: orange;
    border-radius: 4px;
  }
  .tb-item{
    font-weight: bold;
    cursor: pointer;
    color: white;
    padding: 0 15px;
  }
  .tb-select{
    width: 25%;
  }
  /* .v-input{
    width: 50%;
  } */
  .toolbar-flex{
    justify-content: flex-end;
  }
  .custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
