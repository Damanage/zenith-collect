<template>
  
    <v-container
            fill-height
            fluid
            grid-list-xl pa-3
          >
        <v-layout justify-center wrap>
            
            <v-flex md12>
                  <material-card class="project-card-desc" color="custom-purple">
                    
                  </material-card>


                  <!-- <material-card class="project-card-desc" color="custom-purple">
                    <v-form>
                      <v-container>
                        <v-layout>
                          <v-flex
                            xs8
                            >
                            <v-text-field
                              readonly
                              value="u dont know"
                              color="#75CACF"
                              v-model="firstname"
                              label="Субъекты проекта"
                              required
                            ></v-text-field>
                          </v-flex>
                          <v-flex
                            xs4
                            >
                            <v-text-field
                              readonly
                              color="#75CACF"
                              v-model="troubleStatus"
                              label="Статус проблемности"
                              required
                            ></v-text-field>
                          </v-flex>
                        </v-layout>

                        <v-layout>
                          <v-flex
                            xs8
                            >
                            <v-text-field
                              readonly
                              color="#75CACF"
                              v-model="firstname"
                              label="Стратегия"
                              required
                            ></v-text-field>
                          </v-flex>
                          <v-flex
                            xs4
                            >
                            <v-text-field
                              color="#75CACF"
                              v-model="firstname"
                              label="Причина проблемности"
                              required
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-form>
                  </material-card> -->

                  <!-- <material-card class="project-card-desc" color="custom-purple">
                    <v-form v-model="valid">
                      <v-container>
                        <v-layout>
                          <v-flex
                            xs12
                            md4
                          >
                            <v-text-field
                              readonly
                              color="#75CACF"
                              v-model="firstname"
                              label="Менеджер проекта"
                              required
                            ></v-text-field>
                          </v-flex>

                          <v-flex
                            xs12
                            md4
                          >
                            <v-text-field
                              readonly
                              v-model="lastname"
                              label="Балансодержатель"
                              color="#75CACF"
                              required
                            ></v-text-field>
                          </v-flex>

                          <v-flex
                            xs12
                            md4
                          >
                            <v-text-field
                              readonly
                              v-model="email"
                              label="Текущая задолженность"
                              color="#75CACF"
                              required
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>

                      <v-container>
                        <v-layout>
                          <v-flex
                            xs12
                            md4
                          >
                            <v-text-field
                              color="#75CACF"
                              v-model="firstname"
                              readonly
                              label="Задолженность на дату открытия"
                              required
                            ></v-text-field>
                          </v-flex>

                          <v-flex
                            xs12
                            md4
                          >
                            <v-text-field
                              v-model="lastname"
                              readonly
                              label="Бюджет проекта"
                              color="#75CACF"
                              required
                            ></v-text-field>
                          </v-flex>

                          <v-flex
                            xs12
                            md4
                          >
                            <v-text-field
                              v-model="email"
                              :rules="emailRules"
                              label="Фактические расходы"
                              color="#75CACF"
                              readonly
                              required
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>

                    </v-form>
                  </material-card> -->
              
              
              
              
              
              <v-expansion-panel >
                <v-expansion-panel-content>
                  <div slot="header">Карточка проекта</div>
                  
                  <material-card class="project-card-desc" color="custom-purple">
                    <v-container fluid pa-0>
                      <v-layout pa-0 class="card-header-wrp">
                        <v-flex class="text-md-center card-header">
                          Общие
                        </v-flex>
                      </v-layout>
                    </v-container>
                    <v-form v-model="valid">

                      <v-container>
                        <v-layout>
                          <v-flex
                            xs12
                            md4
                          >
                            <v-text-field
                              readonly
                              color="#75CACF"
                              v-model="firstname"
                              label="Наименование проекта"
                              required
                            ></v-text-field>
                          </v-flex>

                          <v-flex
                            xs12
                            md4
                          >
                            <v-text-field
                              readonly
                              v-model="lastname"
                              label="Тип проекта"
                              color="#75CACF"
                              required
                            ></v-text-field>
                          </v-flex>

                          <v-flex
                            xs12
                            md4
                          >
                            <v-text-field
                              readonly
                              v-model="email"
                              label="Статус проекта"
                              color="#75CACF"
                              required
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>

                      <v-container>
                        <v-layout>
                          <v-flex
                            xs12
                            md4
                          >
                            <v-text-field
                              color="#75CACF"
                              v-model="firstname"
                              readonly
                              label="Дата открытия"
                              required
                            ></v-text-field>
                          </v-flex>

                          <v-flex
                            xs12
                            md4
                          >
                            <v-text-field
                              v-model="lastname"
                              readonly
                              label="Дата закрытия"
                              color="#75CACF"
                              required
                            ></v-text-field>
                          </v-flex>

                          <v-flex
                            xs12
                            md4
                          >
                            <v-text-field
                              v-model="email"
                              :rules="emailRules"
                              label="Куратор проекта"
                              color="#75CACF"
                              readonly
                              required
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>

                    </v-form>
                  </material-card>


                  <material-card class="project-card-desc" color="custom-purple">
                    <v-form>
                      <v-container>
                        <v-layout>
                          <v-flex
                            xs8
                            >
                            <v-text-field
                              readonly
                              value="u dont know"
                              color="#75CACF"
                              v-model="firstname"
                              label="Субъекты проекта"
                              required
                            ></v-text-field>
                          </v-flex>
                          <v-flex
                            xs4
                            >
                            <v-text-field
                              readonly
                              color="#75CACF"
                              v-model="troubleStatus"
                              label="Статус проблемности"
                              required
                            ></v-text-field>
                          </v-flex>
                        </v-layout>

                        <v-layout>
                          <v-flex
                            xs8
                            >
                            <v-text-field
                              readonly
                              color="#75CACF"
                              v-model="firstname"
                              label="Стратегия"
                              required
                            ></v-text-field>
                          </v-flex>
                          <v-flex
                            xs4
                            >
                            <v-text-field
                              color="#75CACF"
                              v-model="firstname"
                              label="Причина проблемности"
                              required
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-form>
                  </material-card>

                  <material-card class="project-card-desc" color="custom-purple">
                    <v-form v-model="valid">
                      <v-container>
                        <v-layout>
                          <v-flex
                            xs12
                            md4
                          >
                            <v-text-field
                              readonly
                              color="#75CACF"
                              v-model="firstname"
                              label="Менеджер проекта"
                              required
                            ></v-text-field>
                          </v-flex>

                          <v-flex
                            xs12
                            md4
                          >
                            <v-text-field
                              readonly
                              v-model="lastname"
                              label="Балансодержатель"
                              color="#75CACF"
                              required
                            ></v-text-field>
                          </v-flex>

                          <v-flex
                            xs12
                            md4
                          >
                            <v-text-field
                              readonly
                              v-model="email"
                              label="Текущая задолженность"
                              color="#75CACF"
                              required
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>

                      <v-container>
                        <v-layout>
                          <v-flex
                            xs12
                            md4
                          >
                            <v-text-field
                              color="#75CACF"
                              v-model="firstname"
                              readonly
                              label="Задолженность на дату открытия"
                              required
                            ></v-text-field>
                          </v-flex>

                          <v-flex
                            xs12
                            md4
                          >
                            <v-text-field
                              v-model="lastname"
                              readonly
                              label="Бюджет проекта"
                              color="#75CACF"
                              required
                            ></v-text-field>
                          </v-flex>

                          <v-flex
                            xs12
                            md4
                          >
                            <v-text-field
                              v-model="email"
                              :rules="emailRules"
                              label="Фактические расходы"
                              color="#75CACF"
                              readonly
                              required
                            ></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>

                    </v-form>
                  </material-card>

                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-flex>


            <v-flex md12>
              
              <v-tabs
                id="tabsAnchor"
                v-model="tabinator"
                color="weed-green"
                class="tabs-customize"
                dark
                slider-color="#75CACF"
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
                  <creditcont/>
                </v-tab-item>

                <v-tab-item>
                  <repaycharts/>
                </v-tab-item>

                <v-tab-item>
                  <gurant/>
                </v-tab-item>
                
                <v-tab-item>
                  <pledgecontracts/>
                </v-tab-item>

                <v-tab-item>
                  <pledgeobjects/>
                </v-tab-item>

                <v-tab-item>
                  <budget/>
                </v-tab-item>

                <v-tab-item>
                  <risks/>
                </v-tab-item>

                <v-tab-item>
                  <strategy/>
                </v-tab-item>

                <v-tab-item>
                  <tasks/>
                </v-tab-item>
              </v-tabs-items>
                

              
            </v-flex>
            
            
        </v-layout>
    </v-container>
</template>

<script>
  import { mapState,
   mapMutations, 
   mapActions, 
   mapGetters }               from 'vuex';
  import subject              from '../components/projectpage-tabs/subject.vue';
  import creditcont           from '../components/projectpage-tabs/creditcont.vue';
  import repaycharts          from '../components/projectpage-tabs/repaycharts.vue';
  import gurant               from '../components/projectpage-tabs/gurant.vue';
  import pledgecontracts      from '../components/projectpage-tabs/pledgecontracts.vue';
  import pledgeobjects        from '../components/projectpage-tabs/pledgeobjects.vue';
  import budget               from '../components/projectpage-tabs/budget.vue';
  import risks                from '../components/projectpage-tabs/risks.vue';
  import strategy             from '../components/projectpage-tabs/strategy.vue';
  import tasks                from '../components/projectpage-tabs/tasks.vue';
  import * as easings         from 'vuetify/es5/util/easing-patterns'

   export default {
    
    data () {
      return {
        scrollH: 0,
        scrolled: false,
        type: 'number',
        selector: '#first',
        easing: 'easeInOutCubic',
        easings: Object.keys(easings),
        valid: false,
        tabinator: null,
        firstname: '',
        lastname: '',
        troubleStatus: 'Большой парень - большие проблемы',
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
        test: `<subject/>`,
        nameRules: [
          v => !!v || 'Введите имя',
          v => v.length <= 10 || 'Имя должно быть не больше 3 символов'
        ],
        email: '',
        emailRules: [
          v => !!v || 'введите cтатус',
          v => /.+@.+/.test(v) || 'E-mail должен соответствовать стандарту email@post.com'
        ]
      }
    },
    
    computed: {
      ...mapGetters({
        //projects: 'getProjects'
      }),
      target () {
        // const value = this[this.type]
        // if (!isNaN(value)) return Number(value)
        // else return value
        return '#tabsAnchor'
      },
      options () {
        return {
          duration: 300,
          offset: 0,
          easing: 'easeInOutCubic'
        }
      },
    },
    components: {
		  subject,
      creditcont,
      repaycharts,
      gurant,
      pledgecontracts,
      pledgeobjects,
      budget,
      risks,
      strategy,
      tasks
	  },
    methods: {
      ...mapActions({
        loadProjects: 'loadProjects'
      }),
      editItem (project) {
        //this.$router.push(`/editproject/${project.id}`)
      },
      debug(tst){
        console.log(tst)
      }
    },
    mounted(){
      // if(this.scrolled === false){
      //   let elem = document.getElementsByClassName("v-content__wrap");
      //   elem[0].addEventListener('scroll', (e)=>{
      //     if(e.target.scrollTop > this.scrollH){
      //       console.log("riding to the bottom");
      //       let subElem = document.getElementById("tabsAnchor");
      //       subElem.scrollIntoView({behavior: "smooth", block: "center"});
      //     } else {
      //       console.log("riding to the top")
      //     }
          
      //     this.scrollH = e.target.scrollTop
        
      //   },false);
      // }
    },
    created () {
      //this.loadProjects()
    }
  }
</script>


<style lang="scss">
  .card-header-wrp{
    margin: -16px -16px 0px -16px !important;
  }
  #core-view{
    height: 183vh;
  }
  .card-header{
    color: #54676F;
    border-radius: 4px;
    background-color: #F5F5F5;
  }
  .project-card-desc{
    margin-top: 10px;
  }
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
