<template>
    <v-navigation-drawer
            id="app-drawer"
            v-model="inputValue"
            class="transparent"
            app
            dark
            permanent
            mobile-break-point="991"
            width="260">
        
            <v-layout
                    class="custom-purple mainMenu"
                    tag="v-list"
                    
                    column>
                <v-list-tile avatar>
                  <v-list-tile-title class="title text-md-center text-xs-center text-lg-center">
                      ДОЛГОВОЙ ЦЕНТР
                  </v-list-tile-title>
                </v-list-tile>
                <div class="mainMenu-wrp">
                  <v-list-tile
                          v-for="(link, i) in links"
                          :key="i"
                          :to="link.to"
                          active-class="orange"
                          avatar
                          class="v-list-item mainMenu-item">
                      <v-list-tile-action>
                          <v-icon >{{ link.icon }}</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-title 
                              v-text="link.text"
                      />
                  </v-list-tile>
                </div>    
                
            </v-layout>
            <v-layout
                    class="filter-gray mainMenu-filter"
                    tag="v-list"
                    column>
              <v-expansion-panel>
                <v-expansion-panel-content
                    v-for="(filter, i) in filters"
                    :key="i"
                    >
                  <v-icon slot="actions"></v-icon>
                  <v-list-tile
                    slot="header"
                    avatar
                    class="v-list-item"
                  >
                    <v-list-tile-action>
                      <v-icon color="orange">{{filter.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title
                      class="filter-item"
                      v-text="filter.text"
                    />
                  </v-list-tile>


                  <v-list-tile
                    v-for="(submenu, i) in filter.submenu"
                    :key="i"
                    avatar
                    class="v-list-item"
                      >
                    <v-list-tile-title
                      class="filter-item filter-subitem"
                      v-text="submenu"
                    />
                  </v-list-tile>

                </v-expansion-panel-content>
              </v-expansion-panel>      
              
            </v-layout>
    </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapMutations,
    mapState
  } from 'vuex'

  export default {
    data: () => ({
      links: [
        {
          to: '/projects',
          icon: 'mdi-home',
          text: 'Домой'
        },
        {
          to: '/contacts',
          icon: 'mdi-account',
          text: 'Физические лица'
        },
        {
          to: '/firms',
          icon: 'mdi-city',
          text: 'Юридические лица'
        },
        {
          to: '/test',
          icon: 'mdi-bell-ring',
          text: 'Активности'
        },
        {
          to: '/test',
          icon: 'mdi-calendar-check',
          text: 'Задачи'
        },
        {
          to: '/test',
          icon: 'mdi-bank',
          text: 'Cуды'
        },
        {
          to: '/test',
          icon: 'mdi-file-document',
          text: 'Договоры'
        },
        {
          to: '/test',
          icon: 'mdi-gavel',
          text: 'Судебная работа'
        },
        {
          to: '/test',
          icon: 'mdi-cash-multiple',
          text: 'Залоги'
        },
      ],
      filters:[
        {
          icon: "mdi-tune",
          text: "БАЗОВЫЕ ФИЛЬТРЫ",
          submenu: ["Мои", "Моей Команды", "Моего подразделения", "Все"]
        },
        {
          icon: "mdi-tune",
          text: "ФИЛЬТРЫ",
          submenu: ["Новые активности","lvl2.1", "lvl2.2"]
        },
        {
          icon: "mdi-alert-circle-outline",
          text: "ВЗЫСКАНИЕ",
          submenu: ["Планы мероприятий", "Сегментирование"]
        }
        ],
      responsive: false
    }),
    computed: {
      ...mapState('app', ['image', 'color']),
      inputValue: {
        get () {
          return this.$store.state.app.drawer
        },
        set (val) {
          this.setDrawer(val)
        }
      },
      items () {
        return this.$t('Layout.View.items')
      }
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
      onResponsiveInverted () {
        if (window.innerWidth < 991) {
          this.responsive = true
        } else {
          this.responsive = false
        }
      }
    }
  }
</script>

<style lang="scss">
    #app-drawer {
      box-shadow: unset !important;
        .mainMenu, .mainMenu-filter{
          margin-left: 5px;
          margin-top: 5px;
          border-radius: 4px;
        }
        .mainMenu{
          
          .mainMenu-wrp{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 15px 0;
            .mainMenu-item a{
              padding: 5px 15px !important;
            }
          }
          
        }
        .mainMenu-filter{
          .filter-item{
            font-size: 12px !important;
            font-weight: bold;
          }
          .filter-subitem{
            padding-top: 0;
            padding-right: 15px;
            padding-bottom: 0;
            padding-left: 25px;
            cursor: pointer;
            &:hover{
              color: #ff9800;
            }
          }
        }
        .v-list__tile {
            border-radius: 4px;

            &--buy {
                margin-top: auto;
                margin-bottom: 17px;
            }
        }

        .v-image__image--contain {
            top: 9px;
            height: 60%;
        }

        .search-input {
            margin-bottom: 30px !important;
            padding-left: 15px;
            padding-right: 15px;
        }
        .theme--dark.v-expansion-panel .v-expansion-panel__container{
          border-top: none;
        }
        .v-expansion-panel__header{
          padding: unset;
        }
        .v-expansion-panel__container{
          background-color: unset;
          .v-list__tile{
            // padding: 5px 15px;
            
          }
          .v-list__tile:hover{
            
            v-icon{
              color: white;
            }
          }
        }
        .v-expansion-panel__body{
          .v-list-item{
            margin-top: 10px;
            margin-right: 5px;
            margin-bottom: 0px;
            margin-left: 35px;
          }
          .v-list__tile{
            padding: 5px 15px;
          }
        } 
    }
</style>
