<template>
    <div class="subj">
        <material-card
                color="filter-green"
                title="Проекты">
            <v-flex class="subject-root" slot="actions" ma-0 pa-0>
                <div class="left-side">
                    <v-btn-toggle v-model="orgBtn" active-class="custom-blue" multiple>
                        <v-btn flat>
                            <v-icon>mdi-refresh</v-icon>
                        </v-btn>
                        <v-btn flat>
                            <v-icon>mdi-menu</v-icon>
                        </v-btn>
                    </v-btn-toggle>
                    <div style="padding-left: 10px" class="card-title">
                        Юридические лица
                    </div>
                </div>
                <div class="right-side">
                    <div class="sj-input">
                        <!-- <v-input>
                            Default Slot
                        </v-input> -->
                    </div>

                    <div class="buttons">
                        <v-btn class="weed-green" small color="white">
                            <v-icon color="white">mdi-content-save</v-icon>
                            Сохранить
                        </v-btn>
                        <v-btn flat small color="white">
                            <v-icon color="white">mdi-plus</v-icon>
                            Добавить
                        </v-btn>
                        <v-btn flat small color="white">
                            <v-icon color="white">mdi-pencil</v-icon>
                            Изменить
                        </v-btn>
                        <v-btn flat small color="white">
                            <v-icon color="white">mdi-close</v-icon>
                            Удалить
                        </v-btn>
                    </div>
                </div>

            </v-flex>
            <v-data-table
                    :headers="orgHeaders"
                    :items=[]
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
                    <td>7</td>
                    <td>8</td>
                </template>
            </v-data-table>
        </material-card>

        <material-card
                style="margin-top: 50px"
                color="filter-green"
                title="Проекты">
            <v-flex class="subject-root" slot="actions" ma-0 pa-0>
                <div class="left-side">
                    <v-btn-toggle v-model="physycalBtn" active-class="custom-blue" multiple>
                        <v-btn flat>
                            <v-icon>mdi-refresh</v-icon>
                        </v-btn>
                        <v-btn flat>
                            <v-icon>mdi-menu</v-icon>
                        </v-btn>
                    </v-btn-toggle>
                    <div style="padding-left: 10px" class="card-title">
                        Физические лица
                    </div>
                </div>
                <div class="right-side">
                    <div class="sj-input">
                        <!-- <v-input>
                            Default Slot
                        </v-input> -->
                    </div>

                    <div class="buttons">
                        <v-btn class="weed-green" small color="white">
                            <v-icon color="white">mdi-content-save</v-icon>
                            Сохранить
                        </v-btn>
                        <v-btn flat small color="white">
                            <v-icon color="white">mdi-plus</v-icon>
                            Добавить
                        </v-btn>
                        <v-btn flat small color="white">
                            <v-icon color="white">mdi-pencil</v-icon>
                            Изменить
                        </v-btn>
                        <v-btn flat small color="white">
                            <v-icon color="white">mdi-close</v-icon>
                            Удалить
                        </v-btn>
                    </div>
                </div>

            </v-flex>
            <v-data-table
                    :headers="personHeaders"
                    :items=[]
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
                    <td>7</td>
                    <td>8</td>
                </template>
            </v-data-table>
        </material-card>


    </div>
</template>

<script>
  export default {
    data () {
      return {
        rowsPerPage: [10, 20, 30, 100, { 'text': 'Все', 'value': -1 }],
        orgHeaders: [
          { text: '', value: 'action', sortable: false },
          {
            text: 'Название',
            align: 'left',
            sortable: true,
            value: 'full_name'
          },
          { text: 'Роль в проекте', value: 'role' },
          { text: 'Вид деятельности', value: 'status' },
          { text: 'Основной контакт', value: 'main_contact', sortable: true },
          { text: 'Основной телефон', value: 'main_phone', sortable: true },
          { text: 'E-mail', value: 'email', sortable: false },
          { text: 'Город', value: 'city', sortable: false },
          { text: 'ОПФ', value: 'opf', sortable: false },
          { text: 'ИНН', value: 'inn', sortable: false },
          { text: 'ID', value: 'pr-id', sortable: false },
        ],
        personHeaders: [
          { text: '', value: 'action', sortable: false },
          {
            text: 'ID',
            align: 'left',
            sortable: true,
            value: 'full_name'
          },
          { text: 'ФИО', value: 'resp_id' },
          { text: 'Роль в проекте', value: 'status' },
          { text: 'Дата рождения', value: 'date_open', sortable: true },
          { text: 'Паспорт', value: 'date_close', sortable: true },
          { text: 'Основной телефон', value: 'comment', sortable: false },
          { text: 'E-mail', value: 'problem_status', sortable: false }
        ],
        orgBtn: null,
        physycalBtn: null,
        dick: 'dick'
      }
    }
  }
</script>

<style lang="scss">
    .subject-root {
        justify-content: space-between;
        display: flex;
    }

    .left-side, .right-side {
        display: flex;
        align-items: center;
    }

    .card-title {
        font-weight: bold;
        font-size: 13px !important;
    }

    .v-btn-toggle {
        background: unset !important;
    }


    .v-btn-toggle--selected {
        box-shadow: unset !important;
    }

</style>