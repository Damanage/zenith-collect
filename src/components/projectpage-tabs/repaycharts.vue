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
                                <v-btn flat small color="white"><v-icon color="white">mdi-plus</v-icon>Добавить</v-btn>
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
                                Фактический график
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
                                <v-btn flat small color="white"><v-icon color="white">mdi-plus</v-icon>Добавить</v-btn>
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
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                rowsPerPage: [10, 20, 30, 100, { 'text': 'Все', 'value': -1 }],
                planned: [
                    { text: '', value: 'action', sortable: false },
                    {
                        text: 'Номер платежа',
                        align: 'left',
                        sortable: true,
                        value: 'full_name'
                    },
                    { text: 'Дата платежа', value: 'role' },
                    { text: 'Валюта', value: 'status' },
                    { text: 'Погашение ОД', value: 'main_contact', sortable: true },
                    { text: 'Погашение %', value: 'main_phone', sortable: true },
                    { text: 'Погашение комиссий', value: 'email', sortable: false },
                    { text: 'Погашение пени', value: 'city', sortable: false }
                ]
                
            }
        }
    }
</script>