<template>
    <v-container
            fill-height
            fluid
            grid-list-xl pa-3>
        <v-layout justify-center wrap>
            <v-flex md12>
                <material-card
                        color="green"
                        :title="project.full_name"
                        text="Редактирование карточки">
                    <v-form>
                        <v-container pa-0>
                            <v-layout wrap>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="project.full_name"
                                                label="Наименование проекта"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                :value="project.responsible | fio"
                                                readonly
                                                label="Ответственный"
                                                append-icon="account_box"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="project.status"
                                                label="Статус"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-menu
                                                ref="dp1"
                                                :close-on-content-click="false"
                                                v-model="dp1"
                                                :nudge-right="40"
                                                lazy
                                                transition="scale-transition"
                                                offset-y
                                                full-width
                                                min-width="290px"
                                        >
                                            <v-text-field
                                                    slot="activator"
                                                    clearable
                                                    v-model="project.date_open"
                                                    label="Дата открытия"
                                                    append-icon="calendar_today"
                                                    class="mx-1"></v-text-field>
                                            <v-date-picker :first-day-of-week="0"
                                                           locale="ru-RU"
                                                           v-model="date"
                                                           no-title @input="setDate"></v-date-picker>
                                        </v-menu>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-menu
                                                ref="dp1"
                                                :close-on-content-click="false"
                                                v-model="dp2"
                                                :nudge-right="40"
                                                lazy
                                                transition="scale-transition"
                                                offset-y
                                                full-width
                                                min-width="290px"
                                        >
                                            <v-text-field
                                                    slot="activator"
                                                    clearable
                                                    v-model="project.date_close"
                                                    label="Дата закрытия"
                                                    append-icon="calendar_today"
                                                    class="mx-1"></v-text-field>
                                            <v-date-picker :first-day-of-week="0"
                                                           locale="ru-RU"
                                                           v-model="date"
                                                           no-title @input="setDate"></v-date-picker>
                                        </v-menu>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="project.problem_status"
                                                label="Статус проблемности"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="project.problem_reason"
                                                label="Причина проблемности"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-textarea
                                                rows="1"
                                                v-model="project.comment"
                                                label="Комментарий"
                                                class="mx-1"></v-textarea>
                                    </v-flex>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-form>
                </material-card>
            </v-flex>
            <v-flex md12>
                <material-card
                        class="card-tabs"
                        color="green">
                    <v-flex
                            slot="header">
                        <v-tabs
                                v-model="tabs"
                                color="transparent"
                                slider-color="white">
                            <v-tab class="mr-3">
                                <v-icon class="mr-2">mdi-file-tree</v-icon>
                                Субъекты объекта
                            </v-tab>
                            <v-tab class="mr-3">
                                <v-icon class="mr-2">mdi-calendar-check</v-icon>
                                Задачи
                            </v-tab>
                            <v-tab>
                                <v-icon class="mr-2">mdi-chart-areaspline</v-icon>
                                Стратегии
                            </v-tab>
                            <v-tab class="mr-3">
                                <v-icon class="mr-2">mdi-cash-multiple</v-icon>
                                Бюджет
                            </v-tab>
                            <v-tab>
                                <v-icon class="mr-2">mdi-attachment</v-icon>
                                Вложения
                            </v-tab>
                        </v-tabs>
                    </v-flex>
                    <v-tabs-items v-model="tabs">
                        <v-tab-item :key="1">
                            <v-card>
                                <v-card-title>Физ. лица</v-card-title>
                                <v-card-text class="pt-0">
                                    <v-data-table
                                            hide-actions
                                            :headers="fl_headers"
                                            :items="project.fls"
                                            :no-data-text="'Ничего не найдено'">
                                        <template slot="items" slot-scope="props">
                                            <td class="justify-center pa-0">
                                                <v-icon color="primary" @click="">mdi-pencil-circle-outline</v-icon>

                                            </td>
                                            <td>{{ props.item.sur_name }}</td>
                                            <td>{{ props.item.name }}</td>
                                            <td>{{ props.item.birth_date | date }}</td>
                                            <td>{{ props.item.place_of_collection }}</td>
                                        </template>
                                    </v-data-table>
                                </v-card-text>
                            </v-card>
                            <v-card class="mt-3">
                                <v-card-title>Юр. лица</v-card-title>
                                <v-card-text class="pt-0">
                                    <v-data-table
                                            :headers="ul_headers"
                                            :items="project.uls"
                                            :no-data-text="'Ничего не найдено'"
                                            hide-actions
                                    >
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
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item :key="2">
                            <v-card>
                                <v-card-title>Задачи</v-card-title>
                                <v-card-text class="pt-0">
                                    <v-data-table
                                            hide-actions
                                            :headers="task_headers"
                                            :items="project.tasks"
                                            :no-data-text="'Ничего не найдено'">
                                        <template slot="items" slot-scope="props">
                                            <td class="justify-center pa-0">
                                                <v-icon color="primary" @click="">mdi-pencil-circle-outline</v-icon>

                                            </td>
                                            <td>{{ props.item.full_name }}</td>
                                            <td>{{ props.item.expire | date }}</td>
                                            <td>{{ props.item.status }}</td>
                                        </template>
                                    </v-data-table>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item :key="3">
                            <v-card>
                                <v-card-title>Стратегии</v-card-title>
                                <v-card-text class="pt-0">
                                    <v-data-table
                                            hide-actions
                                            :headers="task_headers"
                                            :items="project.strategies"
                                            :no-data-text="'Ничего не найдено'">
                                        <template slot="items" slot-scope="props">
                                            <td class="justify-center pa-0">
                                                <v-icon color="primary" @click="">mdi-pencil-circle-outline</v-icon>

                                            </td>
                                            <td>{{ props.item.full_name }}</td>
                                            <td>{{ props.item.st_type }}</td>
                                            <td>{{ props.item.status }}</td>
                                            <td>{{ props.item.reviewer | fio }}</td>
                                            <td>{{ props.item.date_start | date }}</td>
                                            <td>{{ props.item.date_end | date }}</td>
                                            <td>{{ props.item.description }}</td>
                                            <td>{{ props.item.author | fio }}</td>
                                            <td>{{ props.item.created | date }}</td>
                                        </template>
                                    </v-data-table>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item :key="4">
                            <v-card>
                                <v-card-title>Бюджет</v-card-title>
                                <v-card-text class="pt-0">
                                    <v-data-table
                                            hide-actions
                                            :headers="budget_headers"
                                            :items="project.budgets"
                                            :no-data-text="'Ничего не найдено'">
                                        <template slot="items" slot-scope="props">
                                            <td class="justify-center pa-0">
                                                <v-icon color="primary" @click="">mdi-pencil-circle-outline</v-icon>

                                            </td>
                                            <td>{{ props.item.budget_year }}</td>
                                            <td>{{ props.item.budget_code }}</td>
                                            <td>{{ props.item.budget_name }}</td>
                                            <td>{{ props.item.budget_sum }}</td>
                                            <td>{{ props.item.budget_exp }}</td>
                                        </template>
                                    </v-data-table>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                        <v-tab-item :key="5">
                            <v-card>
                                <v-card-title>Вложения</v-card-title>
                                <v-card-text class="pt-0">
                                    <v-data-table
                                            hide-actions
                                            :headers="attach_headers"
                                            :items="project.attachments"
                                            :no-data-text="'Ничего не найдено'">
                                        <template slot="items" slot-scope="props">
                                            <td class="justify-center pa-0">
                                                <v-icon color="primary" @click="">mdi-download</v-icon>

                                            </td>
                                            <td>{{ props.item.full_name }}</td>
                                            <td>{{ props.item.doc_type }}</td>
                                            <td>{{ props.item.file_size }}</td>
                                            <td>{{ props.item.file_type }}</td>
                                            <td>{{ props.item.created | date }}</td>
                                            <td>{{ props.item.author | fio }}</td>
                                        </template>
                                    </v-data-table>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>
                    </v-tabs-items>
                </material-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
  import { EventBus, EventName } from '@/utils/eventbus'

  export default {
    name: 'EditProject',
    data () {
      return {
        dp1: false,
        dp2: false,
        date: '',
        tabs: 0,
        fl_headers: [
          {text: '', value: 'action', sortable: false},
          {text: 'Фамимлия', value: 'sur_name', sortable: false},
          {text: 'Имя', value: 'name', sortable: false},
          {text: 'Дата рождения', value: 'birth_date', sortable: false},
          {text: 'Место работы', value: 'place_of_collection', sortable: false}
        ],
        ul_headers: [
          {text: '', value: 'action', sortable: false},
          {text: 'ОПФ', sortable: false, value: 'opf'},
          {text: 'Наименование', value: 'short_name', sortable: false},
          {text: 'Полное наименование', value: 'full_name', sortable: false},
          {text: 'Вид деятельности', value: 'action_type', sortable: false}
        ],
        task_headers: [
          {text: '', value: 'action', sortable: false},
          {text: 'Название', sortable: false, value: 'full_name'},
          {text: 'Срок', value: 'status', sortable: false},
          {text: 'Статус', value: 'expire', sortable: false}
        ],
        strat_headers: [
          {text: '', value: 'action', sortable: false},
          {text: 'Наименование', sortable: false, value: 'full_name'},
          {text: 'Тип', value: 'st_type', sortable: false},
          {text: 'Статус', value: 'status', sortable: false},
          {text: 'Согласовал', sortable: false, value: 'reviewer_id'},
          {text: 'Начало', value: 'date_start', sortable: false},
          {text: 'Окончание', value: 'date_end', sortable: false},
          {text: 'Описание', value: 'description', sortable: false},
          {text: 'Автор', sortable: false, value: 'author_id'},
          {text: 'Дата создания', value: 'created', sortable: false}
        ],
        budget_headers: [
          {text: '', value: 'action', sortable: false},
          {text: 'Год', sortable: false, value: 'budget_year'},
          {text: 'Код статьи', value: 'budget_code', sortable: false},
          {text: 'Статья', value: 'budget_name', sortable: false},
          {text: 'Бюджет статьи', sortable: false, value: 'budget_sum'},
          {text: 'Фактические расходы', value: 'budget_exp', sortable: false}
        ],
        attach_headers: [
          {text: '', value: 'action', sortable: false},
          {text: 'Название', sortable: false, value: 'full_name'},
          {text: 'Тип документа', value: 'doc_type', sortable: false},
          {text: 'Размер', value: 'file_size', sortable: false},
          {text: 'Тип файла', sortable: false, value: 'file_type'},
          {text: 'Создано', value: 'created', sortable: false},
          {text: 'Автор', value: 'author', sortable: false}
        ]
      }
    },
    computed: {
      ...mapGetters({
        project: 'getProject'
      }),
      computedDateFormatted () {
        return this.date ? this.$moment(this.date).format('DD.MM.YYYY') : ''
      }
    },
    methods: {
      ...mapActions({
        saveProject: 'saveProject',
        findProject: 'findProject',
      }),
      setDate () {
        if (this.dp1) this.project.date_open = this.computedDateFormatted
        if (this.dp2) this.project.date_close = this.computedDateFormatted

        this.dp1 = false
        this.dp2 = false
      }
    },
    created () {
      let id = this.$route.params.id
      this.findProject(id)
      EventBus.$on(EventName.EVENT_SAVE, () => {
        this.saveProject(this.project)
      })
    },
    beforeDestroy () {
      EventBus.$off(EventName.EVENT_SAVE)
    }

  }
</script>

<style>
    .v-picker .v-btn {
        color: #000 !important;
        margin: 0 !important;
        padding: 0 !important;
    }
</style>
