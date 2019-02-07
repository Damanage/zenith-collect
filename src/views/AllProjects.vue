<template>
    <v-container
            id="all-projects"
            fill-height
            fluid
            grid-list-xl pa-3>
        <v-layout justify-center wrap>
            <v-flex md12>
            
                <material-card
                        color="filter-green"
                        title="Проекты">
                    <v-flex slot="actions" ma-0 pa-0>
                        <v-dialog v-model="dialog">
                            <v-btn v-ripple
                                   slot="activator"
                                   flat small
                            >
                                <v-icon>mdi-plus</v-icon>
                                    Создать
                                </v-btn>

                            <h3 class="prj-title">Создание нового проекта</h3>
                            <div class="prj-wrp">
                                <createproject @project-cancel="onProjectCancel" @project-create="onProjectCreate"/>
                            </div>
                        </v-dialog>


                    </v-flex>
                    <v-data-table
                            :headers="headers"
                            :items="projects"
                            :rows-per-page-text="'Страницы'"
                            :no-data-text="'Ничего не найдено'"
                            :rows-per-page-items="rowsPerPage">
                        <template slot="items" slot-scope="props">

                            <tr class="tr-clickble" @click="toProject(props.item.id)">

                                <td class="justify-center pa-0">
                                    <v-icon color="primary" @click="editItem(props.index)">mdi-pencil-circle-outline</v-icon>

                                </td>
                                <td>{{ props.item.id }}</td>
                                <td>{{ props.item.project_name }}</td>
                                <td>{{ props.item.project_status }}</td>
                                <td>{{ props.item.date_open }}</td>
                                <td>{{ props.item.date_close }}</td>
                                <td>{{ props.item.curator }}</td>
                                <td>{{ props.item.manager }}</td>
                                <td>{{ props.item.debt }}</td>
                                <td>{{ props.item.balance_holder }}</td>
                                <td>бюджет</td>
                            </tr>
                        </template>
                    </v-data-table>
                </material-card>

            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
  import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
  import createproject from './CreateProject.vue'

  export default {
    data () {
      return {
        dialog: false,
        rowsPerPage: [10, 20, 30, 100, { 'text': 'Все', 'value': -1 }],
        headers: [
          { text: '', value: 'action', sortable: false },
          { text: 'ID', sortable: true, value: 'sur_name' },
          { text: 'Наименование проекта', value: 'name' },
          { text: 'Статус', value: 'birth_date', sortable: true },
          { text: 'Дата открытия', value: 'place_of_collection', sortable: true },
          { text: 'Дата закрытия', value: 'place_of_collection', sortable: true },
          { text: 'Куратор проекта', value: 'place_of_collection', sortable: true },
          { text: 'Менеджер проекта', value: 'place_of_collection', sortable: true },
          { text: 'Задолженность на дату открытия', value: 'place_of_collection', sortable: true },
          { text: 'Заемщики', value: 'place_of_collection', sortable: true },
          { text: 'Бюджет проекта', value: 'place_of_collection', sortable: true }
        ],
        sheet: false,
        tiles: [
          { img: 'keep.png', title: 'Keep' },
          { img: 'inbox.png', title: 'Inbox' },
          { img: 'hangouts.png', title: 'Hangouts' },
          { img: 'messenger.png', title: 'Messenger' },
          { img: 'google.png', title: 'Google+' }
        ]
      }
    },
    components: {
        createproject
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
      toProject (project) {
        this.$router.push('/project/' + project)
      },
      onProjectCancel () {
        this.dialog = false;
      },
      onProjectCreate () {
        this.dialog = false;
      }
    },
    created () {
      this.loadProjects();
    }

  }
</script>
<style lang="scss">
    .tr-clickble{
        cursor: pointer;
    }
    #all-projects {
    }

    .prj-title {
        color: rgba(0, 0, 0, .54);
        margin-left: 20px;
    }

    .v-dialog {
        background-color: rgba(233, 233, 234, 0.89);
    }

</style>
