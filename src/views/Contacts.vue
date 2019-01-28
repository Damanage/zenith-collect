<template>
    <v-container
            fill-height
            fluid
            grid-list-xl pa-3>
        <v-layout justify-center wrap>
            <v-flex md12>
                <material-card
                        color="green"
                        title="Физические лица">
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
                            :items="contacts"
                            :rows-per-page-text="'Страницы'"
                            :no-data-text="'Ничего не найдено'"
                            :rows-per-page-items="rowsPerPage">
                        <template slot="items" slot-scope="props">
                            <td class="justify-center pa-0">
                                <v-icon color="primary" @click="editItem(props.item)">mdi-pencil-circle-outline</v-icon>

                            </td>
                            <td>{{ props.item.sur_name }}</td>
                            <td>{{ props.item.name }}</td>
                            <td>{{ props.item.birth_date | date }}</td>
                            <td>{{ props.item.place_of_collection }}</td>
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
        rowsPerPage: [10, 20, 30, 100, {"text": "Все", "value": -1}],
        headers: [
          {text: '', value: 'action', sortable: false},
          {text: 'Фамимлия', sortable: true, value: 'sur_name'},
          {text: 'Имя', value: 'name'},
          {text: 'Дата рождения', value: 'birth_date', sortable: true},
          {text: 'Место работы', value: 'place_of_collection', sortable: true}
        ]
      }
    },
    computed: {
      ...mapGetters({
        contacts: 'getContacts'
      })
    },
    methods: {
      ...mapActions({
        loadContacts: 'loadContacts'
      }),
      editItem(contact) {
        this.$router.push(`/editcontact/${contact.id}`);
      }
    },
    created() {
      this.loadContacts();
    }
  }
</script>
