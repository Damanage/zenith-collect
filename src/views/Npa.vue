<template>
    <v-container
            fill-height
            fluid
            grid-list-xl pa-3>
        <v-layout justify-center wrap>
            <v-flex md12>
                <material-card
                        color="green"
                        title="НПА">
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
                            :items="npas"
                            :rows-per-page-text="'Страницы'"
                            :no-data-text="'Ничего не найдено'"
                            :rows-per-page-items="rowsPerPage">
                        <template slot="items" slot-scope="props">
                            <td class="justify-center pa-0">
                                <v-icon color="primary" @click="editItem(props.item)">mdi-pencil-circle-outline</v-icon>

                            </td>
                            <td>{{ props.item.description }}</td>
                            <td>{{ props.item.npa_type }}</td>
                            <td>{{ props.item.npa_sort }}</td>
                            <td>{{ props.item.place_of_collection }}</td>
                            <td>{{ props.item.status }}</td>
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
          { text: 'Описание', sortable: true, value: 'description' },
          { text: 'Тип имущества', value: 'npa_type', sortable: true },
          { text: 'Вид имущества', value: 'npa_sort', sortable: true },
          { text: 'Центр сбора ', sortable: true, value: 'place_of_collection' },
          { text: 'Статус', value: 'status', sortable: true }
          ]
      }
    },
    computed: {
      ...mapGetters({
        npas: 'getNpas'
      })
    },
    methods: {
      ...mapActions({
        loadNpas: 'loadNpas'
      }),
      editItem (npa) {
        this.$router.push(`/editnpa/${npa.id}`);
      }
    },
    created () {
      this.loadNpas()
    }
  }
</script>
