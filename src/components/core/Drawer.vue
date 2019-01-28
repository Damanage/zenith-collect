<template>
    <v-navigation-drawer
            id="app-drawer"
            v-model="inputValue"
            class="custom-blue"
            app
            dark
            floating
            permanent
            mobile-break-point="991"
            width="260">
        
            <v-layout
                    class="fill-height"
                    tag="v-list"
                    
                    column>
                <v-list-tile avatar>
                    <v-list-tile-title class="title text-md-center text-xs-center text-lg-center">
                        Долговой центр
                    </v-list-tile-title>
                </v-list-tile>
                <v-divider/>
                <v-list-tile
                        v-for="(link, i) in links"
                        :key="i"
                        :to="link.to"
                        active-class="orange"
                        avatar
                        class="v-list-item">
                    <v-list-tile-action>
                        <v-icon >{{ link.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title 
                            v-text="link.text"
                    />
                </v-list-tile>
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
    }
</style>
