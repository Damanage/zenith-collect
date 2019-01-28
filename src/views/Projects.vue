<template>
    <v-container
            fill-height
            fluid
            grid-list-xl pa-3>
        <v-layout justify-center wrap>
            <v-flex md12>
                <material-card
                        color="custom-blue"
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
                            <td>{{ props.item.full_name }}</td>
                            <td>{{ props.item.responsible }}</td>
                            <td>{{ props.item.status }}</td>
                            <td>{{ props.item.date_open | date }}</td>
                            <td>{{ props.item.date_close | date }}</td>
                            <td>{{ props.item.comment }}</td>
                            <td>{{ props.item.problem_status }}</td>
                            <td>{{ props.item.problem_reason }}</td>
                        </template>
                    </v-data-table>
                </material-card>
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
<style scoped>
</style>
