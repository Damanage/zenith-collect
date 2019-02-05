<template>
    <v-container
            id="all-projects"
            fill-height
            fluid
            grid-list-xl pa-3>
        <v-layout justify-center wrap>
            <v-flex md12 >
                <material-card
                        color="filter-green"
                        title="Физические лица">
                    <v-flex slot="actions" ma-0 pa-0>
                        <v-bottom-sheet class="popup" v-model="sheet">
                            <v-btn v-ripple
                               slot="activator"
                               flat small
                               >
                                <v-icon>mdi-plus</v-icon>
                                Создать
                            </v-btn>

                            <h3 class="prj-title">Создание нового проекта</h3>
                            <div class="prj-wrp">
                                <createproject/>
                            </div>
                        </v-bottom-sheet>



                        
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
  import createproject from './CreateProject.vue';
  export default {
    data () {
      return {
        rowsPerPage: [10, 20, 30, 100, {"text": "Все", "value": -1}],
        headers: [
          {text: '', value: 'action', sortable: false},
          {text: 'ID', sortable: true, value: 'sur_name'},
          {text: 'Наименование проекта', value: 'name'},
          {text: 'Статус', value: 'birth_date', sortable: true},
          {text: 'Дата открытия', value: 'place_of_collection', sortable: true},
          {text: 'Дата закрытия', value: 'place_of_collection', sortable: true},
          {text: 'Куратор проекта', value: 'place_of_collection', sortable: true},
          {text: 'Менеджер проекта', value: 'place_of_collection', sortable: true},
          {text: 'Задолженность на дату открытия', value: 'place_of_collection', sortable: true},
          {text: 'Заемщики', value: 'place_of_collection', sortable: true},
          {text: 'Бюджет проекта', value: 'place_of_collection', sortable: true}
        ],
        sheet: false,
        tiles: [
            { img: 'keep.png', title: 'Keep' },
            { img: 'inbox.png', title: 'Inbox' },
            { img: 'hangouts.png', title: 'Hangouts' },
            { img: 'messenger.png', title: 'Messenger' },
            { img: 'google.png', title: 'Google+' }
        ],
        
      }
    },
    components: {
        createproject
    }
    
  }
</script>
<style lang="scss">
#all-projects{
}
.prj-title{
    color: rgba(0,0,0,.54);
    margin-left: 20px;
}
.v-bottom-sheet.v-dialog{
    background-color: rgba(233, 233, 234, 0.89);
}

</style>
