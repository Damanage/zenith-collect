<template>
  <v-container
          fill-height
          fluid
          grid-list-xl pa-3>
    <v-layout justify-center wrap>
      <v-flex md12>
        <material-card
                color="custom-blue"
                title="Юридические лица">
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
                  :items="firms"
                  :rows-per-page-text="'Страницы'"
                  :no-data-text="'Ничего не найдено'"
                  :rows-per-page-items="rowsPerPage">
            <template slot="items" slot-scope="props">
              <td class="justify-center pa-0">
                <v-icon color="primary" @click="editItem(props.item)">mdi-pencil-circle-outline</v-icon>

              </td>
              <td>{{ props.item.opf }}</td>
              <td>{{ props.item.short_name }}</td>
              <td>{{ props.item.full_name }}</td>
              <td>{{ props.item.action_type }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import {mapState, mapMutations, mapActions, mapGetters} from "vuex";
export default {
  data () {
    return {
      rowsPerPage: [10, 20, 30, 100, {"text": "Все", "value": -1}],
      headers: [
        {text: '', value: 'action', sortable: false},
        {text: 'ОПФ', sortable: true, value: 'opf'},
        {text: 'Наименование', value: 'short_name', sortable: true},
        {text: 'Полное наименование', value: 'full_name', sortable: true},
        {text: 'Вид деятельности', value: 'action_type', sortable: true}
      ]
    }
  },
  computed: {
    ...mapGetters({
      firms: 'getFirms'
    })
  },
  methods: {
    ...mapActions({
      loadFirms: 'loadFirms'
    }),
    editItem(firm) {
      this.$router.push(`/editfirm/${firm.id}`);
    }
  },
  created() {
    this.loadFirms();
  }
}
</script>
