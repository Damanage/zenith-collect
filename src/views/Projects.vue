<template>

    <v-container
            class="projects-wrp"
            fluid
            grid-list-xl pa-3
    >
        <v-layout justify-center wrap>

            <v-flex md12>
                <!-- Заглушка для ширины. начало -->
                <material-card id="placeholderWidth" class="project-card-desc" color="custom-purple">
                    <v-form v-model="valid">

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
                                            color="#75CACF"
                                            readonly
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>

                    </v-form>
                </material-card>
                <!-- Заглушка для ширины. конец -->


                <v-expansion-panel>
                    <v-expansion-panel-content class="collapse-header">
                        <div slot="header">Проект: {{project.project_name}}</div>

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
                                                    v-model="project.project_name"
                                                    label="Наименование проекта"
                                                    required
                                            ></v-text-field>
                                            <!-- <div class="twrp">
                                              <h6>Наименование проекта</h6>
                                              <p>
                                                {{project.project_name}}
                                              </p>
                                            </div> -->
                                        </v-flex>

                                        <v-flex
                                                xs12
                                                md4
                                        >
                                            <v-text-field
                                                    readonly
                                                    v-model="project.project_name"
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
                                                    v-model="project.project_status"
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
                                                    v-model="project.date_open"
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
                                                    v-model="project.date_close"
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
                                                    v-model="project.curator_id"
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
                                                    v-model="plh"
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
                                                    v-model="project.problem_status"
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
                                                    v-model="plh"
                                                    label="Стратегия"
                                                    required
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex
                                                xs4
                                        >
                                            <v-text-field
                                                    color="#75CACF"
                                                    v-model="project.problem_reason"
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
                                                    v-model="project.curator_id"
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
                                                    v-model="project.manager_id"
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
                                                    v-model="project.current_debt"
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
                                                    v-model="project.debt"
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
                                                    v-model="plh"
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
                                                    v-model="project.fact_expenses"
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
                <v-tabs-items v-model="tabinator">
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
  import {
    mapState,
    mapMutations,
    mapActions,
    mapGetters
  } from 'vuex'
  import subject from '../components/projectpage-tabs/subject.vue'
  import creditcont from '../components/projectpage-tabs/creditcont.vue'
  import repaycharts from '../components/projectpage-tabs/repaycharts.vue'
  import gurant from '../components/projectpage-tabs/gurant.vue'
  import pledgecontracts from '../components/projectpage-tabs/pledgecontracts.vue'
  import pledgeobjects from '../components/projectpage-tabs/pledgeobjects.vue'
  import budget from '../components/projectpage-tabs/budget.vue'
  import risks from '../components/projectpage-tabs/risks.vue'
  import strategy from '../components/projectpage-tabs/strategy.vue'
  import tasks from '../components/projectpage-tabs/tasks.vue'
  import * as easings from 'vuetify/es5/util/easing-patterns'

  export default {

    data () {
      return {
        plh: "Не назначено. заглушка",
        // project:[],
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
            name: 'Субъект проекта',
            content: 'cont1'
          },
          {
            name: 'Кредитные договоры',
            content: 'cont1'
          },
          {
            name: 'График погашения',
            content: 'cont2'
          },
          {
            name: 'Договоры поручительства',
            content: 'cont3'
          },
          {
            name: 'Договоры залога',
            content: 'cont3'
          },
          {
            name: 'Объекты залога',
            content: 'cont3'
          },
          {
            name: 'Бюджет',
            content: 'cont3'
          },
          {
            name: 'Риски',
            content: 'cont3'
          },
          {
            name: 'Стратегии',
            content: 'cont3'
          },
          {
            name: 'Задачи',
            content: 'cont3'
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
        project: 'getProject'
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
        loadProject: 'loadProject'
      }),
      editItem (project) {
        //this.$router.push(`/editproject/${project.id}`)
      },
      debug (tst) {
        console.log(tst)
      },
      getItem(){
        let prjUrl      = window.location.href.match( /project\/[0-9]/ig )[0];
        let prjUrlId    = parseInt(prjUrl.match(/[0-9]/ig)[0])
        let id          = this.$route.params.id;
        
        console.log(id)
        if(id){
          this.loadProject(id);
        } else {
          this.loadProject(prjUrlId);
        }
        
      }
    },
    mounted () {
      this.getItem();
      console.log("mounted",this.project)
    }
  }
</script>


<style lang="scss">
    #placeholderWidth {
        margin-top: -150px;
        margin-bottom: 4px;
        opacity: 0.5;
    }

    .projects-wrp {
        margin-bottom: 20px;
    }

    .theme--light.v-expansion-panel .collapse-header {
        background-color: transparent;

        .v-expansion-panel__header {
            border-radius: 4px;
            background-color: white;
        }
    }

    .v-expansion-panel__body {
        padding: 0 1px;

        border-radius: 4px;
    }

    .theme--light.v-expansion-panel .v-expansion-panel__container {

    }

    .project-card-desc {
        border-radius: 4px !important;
    }

    .v-expansion-panel__container {
        border-radius: 4px;
    }

    .card-header-wrp {
        margin: -16px -16px 0px -16px !important;
    }

    #core-view {
        height: 183vh;
    }

    .card-header {
        color: #54676F;
        border-radius: 4px;
        background-color: #F5F5F5;
    }

    .project-card-desc {
        margin-top: 10px;
    }

    .v-tabs__container {
        justify-content: space-evenly;
    }

    .tab-menu-title {
        font-size: 11px !important;
        white-space: pre-wrap;
    }

    .v-tabs__div {
        max-width: 120px !important;
    }

    .tabs-customize {
        font-size: 10px;
        border-radius: 4px;
    }

    .v-window {
        margin-top: 45px;
    }

</style>
