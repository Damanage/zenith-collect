<template>
    <v-container
          fill-height
          fluid
          grid-list-xl pa-3>
        <v-layout justify-center wrap>
            <v-flex md12>
                <material-card class="project-card-desc" color="custom-purple">
                    
                    <v-form @submit.prevent="getFormValues">
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
                                    
                                    color="#75CACF"
                                    :label="subfield"
                                    required
                                ></v-text-field>
                                </v-flex>


                            </v-layout>
                        </v-container>
                        <v-btn color="weed-green" type="submit">
                            <v-icon>mdi-check</v-icon>
                            Создать проект
                        </v-btn>
                    </v-form>
                </material-card>
                
            </v-flex>
        </v-layout>
    </v-container>
    
</template>
<script>
import { mapState,
   mapMutations, 
   mapActions, 
   mapGetters }               from 'vuex';
export default {
    
    data: () => ({
        fields2:{
            fieldSet1: ["Название проекта", "Тип проекта", "Статус проекта"],
            fieldSet2: ["Дата открытия", "Дата закрытия", "Куратор"],
            fieldSet3: ["Менеджер", "Задолженность", "balance_holder"],
            fieldSet4: ["problem_status", "Причина проблемы", "fact_expenses"],
            fieldSet5: ["Текущий долг"]     
        },
    }),
    methods: {
        ...mapActions({
            saveProject: 'saveProject',
            addPlaceholder: 'addPlaceholder',
            addToProjects: 'addToProjects'
        }),
        ...mapGetters({
            getProject: 'getProject',
            getProjects: 'getProjects'
        }),
        getFormValues (submitEvent) {
            let index = 0;
            let inputsArray = submitEvent.target.elements;
            let valuesArray= [];
            let newProject = {
                "project_name": null,
                "project_type": null,
                "project_status": null,
                "date_open": null,
                "date_close": null,
                "curator_id": null,
                "manager_id": null,
                "debt": null,
                "balance_holder": null,
                "problem_status": null,
                "problem_reason": null,
                "fact_expenses": null,
                "current_debt": null
            };
            let testProject = {
                "project_name": "Zenith test",
                "project_type": "suck",
                "project_status": "failed",
                "date_open": "10.11.2019",
                "date_close": "10.11.2019",
                "curator_id": 1,
                "manager_id": 1,
                "debt": 18000,
                "balance_holder": "Big bad wolf",
                "problem_status": "p-status",
                "problem_reason": "p-reason",
                "fact_expenses": 13,
                "current_debt": 19000
            }
            for(let iterable in inputsArray){
                if(inputsArray[iterable].value){
                    
                    valuesArray.push(inputsArray[iterable].value);
                }
                else {
                    console.log("we have a empty field")
                }
            }
            for(let iterable in newProject){
                if(newProject[iterable] = "id"){
                    newProject[iterable] = index;
                }
                newProject[iterable] = valuesArray[index]
                index++;
            }
            newProject.debt = parseInt(newProject.debt, 10);
            newProject.fact_expenses = parseInt(newProject.fact_expenses, 10);
            newProject.current_debt = parseInt(newProject.current_debt, 10);
            newProject.curator_id = parseInt(newProject.curator_id, 10);
            newProject.manager_id = parseInt(newProject.manager_id, 10);
            index = 0;
            console.log("newProj", testProject)
            // console.log(JSON.stringify(newProject))
            
            this.saveProject(newProject)
            // this.addPlaceholder(newProject);
            // this.addToProjects(this.getProject());
        }
    }
}
</script>
<style>
    .test{
        background-color: #fff;
    }
</style>

