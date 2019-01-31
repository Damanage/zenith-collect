<template>

    <v-container
            fill-height
            fluid
            grid-list-xl pa-3
          
          >

        <v-layout justify-center wrap>
            <v-flex md12>
              
              <v-tabs
                
                v-model="tabinator"
                color="custom-purple"
                class="tabs-customize"
                dark
                slider-color="orange"
                >

              
                <v-tab
                  
                  v-for="(tab, i) in tabs"
                  :key="i"
                  class="tab-menu-title"
                  ripple
                  >
                  {{tab.name}} 
                </v-tab>
              </v-tabs>
              <v-tabs-items v-model="tabinator" >
                <v-tab-item>
                  <subject/>
                </v-tab-item>  
                

                <v-tab-item>
                  {{test}}
                  credit contract
                </v-tab-item>

                <v-tab-item>
                  charts of repayment
                </v-tab-item>

                <v-tab-item>
                  guarantors contracts
                </v-tab-item>
                
                <v-tab-item>
                  pledge contracts
                </v-tab-item>

                <v-tab-item>
                  pledge objects
                </v-tab-item>

                <v-tab-item>
                  balance
                </v-tab-item>

                <v-tab-item>
                  to risk
                </v-tab-item>

                <v-tab-item>
                  Strategy
                </v-tab-item>

                <v-tab-item>
                  Tasks
                </v-tab-item>
              </v-tabs-items>
                

              
            </v-flex>

            
            
        </v-layout>
    </v-container>
</template>

<script>
  import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
  import subject  from '../components/projectpage-tabs/subject.vue';


   export default {
    data () {
      return {
        tabinator: null,
        tabs: [
          {
            name: "Субъект проекта",
            content: "cont1"
          },
          {
            name: "Кредитные договоры",
            content: "cont1"
          },
          {
            name: "График погашения",
            content: "cont2"
          },
          {
            name: "Договоры поручительства",
            content: "cont3"
          },
          {
            name: "Договоры залога",
            content: "cont3"
          },
          {
            name: "Объекты залога",
            content: "cont3"
          },
          {
            name: "Бюджет",
            content: "cont3"
          },
          {
            name: "Риски",
            content: "cont3"
          },
          {
            name: "Стратегии",
            content: "cont3"
          },
          {
            name: "Задачи",
            content: "cont3"
          }
        ],
        test: `<subject/>`
      }
    },
    
    computed: {
      ...mapGetters({
        projects: 'getProjects'
      })
    },
    components: {
		  subject
	  },
    methods: {
      ...mapActions({
        loadProjects: 'loadProjects'
      }),
      editItem (project) {
        this.$router.push(`/editproject/${project.id}`)
      }
    },
    created () {
      this.loadProjects()
    }
  }
</script>


<style lang="scss">
  .v-tabs__container{
    justify-content: space-evenly;
  } 
  .tab-menu-title{
    font-size: 11px !important;
    white-space: pre-wrap;
  }
  .v-tabs__div{
    max-width: 120px !important;
  }
  .tabs-customize{
    font-size: 10px;
    border-radius: 4px;
  }
  .v-window{
    margin-top: 45px;
  }
      
</style>
