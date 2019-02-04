<template>
	<div class="credit-cont">
        <v-layout justify-center wrap>
            <v-flex md12>
                
                <material-card
                    color="filter-green"
                    title="Проекты">
                    <v-flex class="subject-root" slot="actions" ma-0 pa-0>
                        <div class="left-side">
                            <v-btn-toggle  active-class="custom-blue" multiple>
                                <v-btn flat>
                                    <v-icon>mdi-refresh</v-icon>
                                </v-btn>
                                <v-btn flat>
                                    <v-icon>mdi-menu</v-icon>
                                </v-btn>
                            </v-btn-toggle>
                            <div style="padding-left: 10px" class="card-title">
                                <!-- Юридические лица -->
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
                            :headers="orgHeaders"
                            
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







                <material-card class="project-card-desc" color="custom-purple">
                    <v-container fluid pa-0>
                        <v-layout pa-0 class="card-header-wrp">
                        <v-flex class="text-md-center card-header">
                            Кредитный договор № Ч
                        </v-flex>
                        </v-layout>
                    </v-container>
                    <v-form >

                        <v-container
                        v-for="(field, i) in fields"
                        :key="i"
                        >
                        <v-layout>
                            <v-flex
                            xs12
                            md4
                            v-for="(subfield, i) in field"
                            :key="i"
                            >
                            <v-text-field
                                readonly
                                color="#75CACF"
                                :label="subfield"
                                required
                            ></v-text-field>
                            </v-flex>


                        </v-layout>
                        </v-container>

                    </v-form>
                </material-card>
            </v-flex>
        </v-layout>
	</div>
</template>

<script>
    export default {
        data () {
            return {
                fields:{
                    fieldSet1: ["Валюта", "Текущий баланс", "Дата ближайшего платежа"],
                    fieldSet2: ["Общая сумма ПЗ", "Текущая сумма к оплате", "Сумма ближайшего платежа"],
                    fieldSet3: ["Сумма просрочки по ОД", "Дата возникновения Просрочки", "Дата последнего платежна"],
                    fieldSet4: ["Сумма просроченных процентов", "Дата заключения договора", "Сумма последнего платежа"],
                    fieldSet5: ["Сумма просроченных комиссий", "Дата окончания договора", "Пени"],
                    fieldSet6: ["Продукт"]
                },
                rowsPerPage: [10, 20, 30, 100, { 'text': 'Все', 'value': -1 }],
                orgHeaders: [
                    { text: '', value: 'action', sortable: false },
                    {
                        text: 'Номер договора',
                        align: 'left',
                        sortable: true,
                        value: 'full_name'
                    },
                    { text: 'Общая сумма просрочки', value: 'role' },
                    { text: 'сумма просрочки по ОД', value: 'status' },
                    { text: 'сумма просроченных процентов', value: 'main_contact', sortable: true },
                    { text: 'сумма просроченных комиссий', value: 'main_phone', sortable: true },
                    { text: 'Пени', value: 'email', sortable: false },
                    { text: 'Текущий баланс', value: 'city', sortable: false },
                    { text: 'Текущая сумма к оплате', value: 'opf', sortable: false }
                ]
            }
        }
    }
</script>