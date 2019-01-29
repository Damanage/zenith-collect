<template>

    <v-container
            fill-height
            fluid
            grid-list-xl pa-3
          
          >

        <v-layout justify-center wrap>
            <v-flex md12>
              
              <v-tabs
                v-model="active"
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
                <v-tab-item
                  v-for="(tab, i) in tabs"
                  :key="i"
                  >
                  

                  <material-card
                        color="custom-purple"
                        title="Проекты">
                    <v-flex slot="actions" ma-0 pa-0>
                        <v-btn v-ripple
                               flat small
                               @click="">
                            <v-icon>mdi-plus</v-icon>
                            Создать
                        </v-btn>
                    </v-flex>
                    <v-data-table
                            :headers="headers"
                            :items="projects"
                            :rows-per-page-text="'Страницы'"
                            :no-data-text="'Ничего не найдено'"
                            :rows-per-page-items="rowsPerPage">
                        <template slot="items" slot-scope="props">
                            <td class="justify-center pa-0">
                                <v-icon color="primary" @click="editItem(props.item)">mdi-pencil-circle-outline</v-icon>

                            </td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7/td>
                            <td>8</td>
                        </template>
                    </v-data-table>
                </material-card>

                </v-tab-item>
              </v-tabs>
            </v-flex>
            
        </v-layout>
    </v-container>
</template>

<script>
  import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        rowsPerPage: [10, 20, 30, 100, { 'text': 'Все', 'value': -1 }],
        headers: [
          { text: '', value: 'action', sortable: false },
          {
            text: 'Название проекта',
            align: 'left',
            sortable: true,
            value: 'full_name'
          },
          { text: 'Ответственный', value: 'resp_id' },
          { text: 'Статус', value: 'status' },
          { text: 'Дата открытия', value: 'date_open', sortable: true },
          { text: 'Дата закрытия', value: 'date_close', sortable: true },
          { text: 'Комментарий', value: 'comment', sortable: false },
          { text: 'Причина проблемности', value: 'problem_status', sortable: false },
          { text: 'Статус проблемности', value: 'problem_reason', sortable: false }
        ],
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
        ]
      }
    },
    computed: {
      ...mapGetters({
        projects: 'getProjects'
      })
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
    white-space: pre-wrap;
  }
  .v-tabs__div{
    max-width: 120px !important;
  }
  .tabs-customize{
    border-radius: 4px;
  }
  .v-window{
    margin-top: 45px;
  }
      
</style>
