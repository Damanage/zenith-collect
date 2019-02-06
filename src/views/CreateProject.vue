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
                "curator": null,
                "manager": null,
                "debt": null,
                "balance_holder": null,
                "problem_status": null,
                "problem_reason": null,
                "fact_expenses": null,
                "current_debt": null
            };
            for(let iterable in inputsArray){
                if(inputsArray[iterable].value){
                    valuesArray.push(inputsArray[iterable].value);
                }
                else {
                    console.log("we have a empty field")
                }
            }
            for(let iterable in newProject){
                newProject[iterable] = valuesArray[index]
                index++;
            }
            newProject.debt = parseInt(newProject.debt, 10);
            newProject.fact_expenses = parseInt(newProject.fact_expenses, 10);
            newProject.current_debt = parseInt(newProject.current_debt, 10);
            index = 0;
            // console.log(newProject)
            // console.log(JSON.stringify(newProject))
            
            // this.saveProject(newProject)
            this.addPlaceholder(newProject);
            this.addToProjects(this.getProject());
            console.log(this.getProject())
            console.log(this.getProjects())
        }
    }
}
</script>
<style>
    .test{
        background-color: #fff;
    }
</style>

