<template>
	<div class="subj">
        <material-card
                color="custom-purple"
                title="Проекты">
            <v-flex class="subject-root" slot="actions" ma-0 pa-0>
                <div class="left-side">
                    <v-btn-toggle v-model="toggle_none" active-class="custom-blue" multiple>
                        <v-btn flat>
                            <v-icon>mdi-refresh</v-icon>
                        </v-btn>
                        <v-btn flat>
                            <v-icon>mdi-menu</v-icon>
                        </v-btn>
                    </v-btn-toggle>
                    <div style="padding-left: 10px" class="title">
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
                        <v-btn class="orange" small color="white"><v-icon color="white">mdi-content-save</v-icon>Сохранить</v-btn>
                        <v-btn flat small color="white"><v-icon color="white">mdi-plus</v-icon>Добавить</v-btn>
                        <v-btn flat small color="white"><v-icon color="white">mdi-pencil</v-icon>Изменить</v-btn>
                        <v-btn flat small color="white"><v-icon color="white">mdi-close</v-icon>Удалить</v-btn>
                    </div>
                </div>
                
            </v-flex>
            <v-data-table
                    :headers="headers"
                    :items="projects"
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
                color="custom-purple"
                title="Проекты">
            <v-flex class="subject-root" slot="actions" ma-0 pa-0>
                <div class="left-side">
                    <v-btn-toggle v-model="toggle_none" active-class="custom-blue" multiple>
                        <v-btn flat>
                            <v-icon>mdi-refresh</v-icon>
                        </v-btn>
                        <v-btn flat>
                            <v-icon>mdi-menu</v-icon>
                        </v-btn>
                    </v-btn-toggle>
                    <div style="padding-left: 10px" class="title">
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
                        <v-btn class="orange" small color="white"><v-icon color="white">mdi-content-save</v-icon>Сохранить</v-btn>
                        <v-btn flat small color="white"><v-icon color="white">mdi-plus</v-icon>Добавить</v-btn>
                        <v-btn flat small color="white"><v-icon color="white">mdi-pencil</v-icon>Изменить</v-btn>
                        <v-btn flat small color="white"><v-icon color="white">mdi-close</v-icon>Удалить</v-btn>
                    </div>
                </div>
                
            </v-flex>
            <v-data-table
                    :headers="headers"
                    :items="projects"
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
                headers: [
                    { text: '', value: 'action', sortable: false },
                    {
                        text: 'Название проекта',
                        align: 'left',
                        sortable: true,
                        value: 'full_name'
                    },
                    { text: 'Ответственный', value: 'resp_id' },
                    { text: 'Статус', value: 'status' },
                    { text: 'Дата открытия', value: 'date_open', sortable: true },
                    { text: 'Дата закрытия', value: 'date_close', sortable: true },
                    { text: 'Комментарий', value: 'comment', sortable: false },
                    { text: 'Причина проблемности', value: 'problem_status', sortable: false },
                    { text: 'Статус проблемности', value: 'problem_reason', sortable: false }
                ],
                toggle_none: null,
                dick: "dick"
            }
        }
    }
</script>

<style lang="scss">
    .subject-root{
        justify-content: space-between;
        display: flex;
    }
    .left-side, .right-side{
        display: flex;
        align-items: center;
    }

    .v-btn-toggle{
        background: unset !important;
    }
        
    
    .v-btn-toggle--selected{
        box-shadow: unset !important;
    }
        
</style>