<template>
    <div class="repay">
        <v-layout justify-center wrap>
            <v-flex md12>
                <material-card
                        style="margin-top: 50px"
                        color="filter-green"
                        title="Проекты">
                    <v-flex class="subject-root" slot="actions" ma-0 pa-0>
                        <div class="left-side">
                            <v-btn-toggle active-class="custom-blue" multiple>
                                <v-btn flat>
                                    <v-icon>mdi-refresh</v-icon>
                                </v-btn>
                                <v-btn flat>
                                    <v-icon>mdi-menu</v-icon>
                                </v-btn>
                            </v-btn-toggle>
                            <div style="padding-left: 10px" class="card-title">
                                Плановый график
                            </div>
                        </div>
                        <div class="right-side">
                            <div class="sj-input">
                                <!-- <v-input>
                                    Default Slot
                                </v-input> -->
                            </div>
                            
                            <div class="buttons">
                                <v-btn class="weed-green" small color="white"><v-icon color="white">mdi-content-save</v-icon>Сохранить</v-btn>
                                
                                
                                <v-dialog v-model="dialog">
                                    <v-btn v-ripple
                                        slot="activator"
                                        flat small
                                    >
                                        <v-icon>mdi-plus</v-icon>
                                            Добавить
                                        </v-btn>

                                    <h3 class="prj-title">Новый план бюджета</h3>
                                    <div class="prj-wrp">
                                        <BudgetModify @project-cancel="onProjectCancel" @project-create="onProjectCreate"/>
                                    </div>
                                </v-dialog>
                                <v-btn flat small color="white"><v-icon color="white">mdi-pencil</v-icon>Изменить</v-btn>
                                <v-btn flat small color="white"><v-icon color="white">mdi-close</v-icon>Удалить</v-btn>
                            </div>
                        </div>
                        
                    </v-flex>
                    <v-data-table
                            :headers="planned"
                            
                            :rows-per-page-text="'Страницы'"
                            :no-data-text="'Ничего не найдено'"
                            :rows-per-page-items="rowsPerPage">
                        <template slot="budget" slot-scope="props">
                            <td class="justify-center pa-0">
                                <v-icon color="primary" @click="editItem(props.item)">mdi-pencil-circle-outline</v-icon>
                            </td>
                            <td>{{props.item}}</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>{{props.item.budget_q1}}</td>
                            <td>{{props.item.budget_q2}}</td>
                            <td>{{props.item.budget_q3}}</td>
                        </template>
                    </v-data-table>
                </material-card>
                
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
    import BudgetModify from '../../views/BudgetModify.vue';
    import { mapState,
        mapMutations, 
        mapActions, 
        mapGetters 
    } from 'vuex';
    export default {
        
        data () {
            return {
                budget: {},
                dialog: false,
                sheet: false,
                rowsPerPage: [10, 20, 30, 100, { 'text': 'Все', 'value': -1 }],
                planned: [
                    { text: '', value: 'action', sortable: false },
                    {
                        text: 'Год',
                        align: 'left',
                        sortable: true,
                        value: 'full_name'
                    },
                    { text: 'Код статьи', value: 'role' },
                    { text: 'Статья', value: 'status' },
                    { text: 'Фактические расходы', value: 'main_contact', sortable: true },
                    { text: 'Итоговый бюджет по статье', value: 'main_phone', sortable: true },
                    { text: '1 квартал', value: 'email', sortable: false },
                    { text: '2 квартал', value: 'city', sortable: false },
                    { text: '3 квартал', value: 'city', sortable: false },
                ]
                
            }
        },
        components: {
            BudgetModify
        },
        methods: {
            onProjectCancel () {
                this.dialog = false;
            },
            onProjectCreate () {
                this.dialog = false;
            },
            ...mapActions({
                saveBudget: 'saveBudget',
                saveProject: 'saveProject',
                loadProjects: 'loadProjects'
            }),
            ...mapGetters({
                getProject: 'getProject',
                getProjects: 'getProjects',
                getBudget: 'getBudget'
            }),
        },
        created () {
            this.budget = this.getBudget();
            console.log(this.budget)
        }
    }
    
</script>
<style>
    .prj-title {
        color: rgba(0, 0, 0, .54);
        margin-left: 20px;
    }
    .v-dialog {
        background-color: rgba(233, 233, 234, 0.89);
    }
</style>
