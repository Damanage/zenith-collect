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
                            Стратегия № Ч
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
                <material-card class="project-card-desc" color="custom-purple">
                    <v-form>
                        <v-container
                            v-for="(field, i) in fields2"
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
                    fieldSet1: ["Тип стратегии", "Начало стратегии", "Завел стратегию"],
                    fieldSet2: ["Стратегия", "Ограничение стратегии", "Дата заведения стратегии"],
                    fieldSet3: ["Описание стратегии"]
                },
                fields2:{
                    fieldSet1: ["Согласовал", "Дата утверждения стратегии рабочей группой", "№ КПА"],
                    fieldSet2: ["Дата согласования", "Бюджет проекта по утвержденной стратегии", "Дата утверждения стратегии КПА"]   
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
                    { text: 'Название стратегии', value: 'role' },
                    { text: 'Тип стратегии', value: 'status' },
                    { text: 'Ответственный', value: 'main_contact', sortable: true },
                    { text: 'Согласована', value: 'main_phone', sortable: true },
                    { text: 'Дата согласования', value: 'email', sortable: false },
                    { text: 'КПА', value: 'city', sortable: false }
                ]
            }
        }
    }
</script>