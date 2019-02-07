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
                                <!-- <v-checkbox
                                    justify-end
                                    v-if="subfield == 'чб'"      
                                ></v-checkbox> -->
                                <v-text-field
                                    v-if="subfield !== 'чб'"
                                    color="#75CACF"
                                    :label="subfield"
                                    required
                                ></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-container>
                        <v-btn color="warning" type="submit">
                            <v-icon>mdi-check</v-icon>
                            Создать проект
                        </v-btn>
                        <v-btn color="rgba(0, 0, 0, 0.67)" @click="cancel">
                            Отменить
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
   mapGetters } from 'vuex';
export default {
    
    data: () => ({
        dialog: false,
        fields2:{
            fieldSet1: ["Код бюджета","Название статьи","Фактическая сумма","Бюджет на проект"],
            fieldSet2: ["1кв", "чб", "согласовано 1кв"],
            fieldSet3: ["2кв", "чб", "согласовано 2кв"],
            fieldSet4: ["3кв", "чб", "согласовано 3кв"],
            fieldSet5: ["4кв", "чб", "согласовано 1кв"],
            fieldSet6: ["Комментарии"]     
        },
    }),
    methods: {
        cancel (){
          this.$emit('project-cancel', {});
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
        getFormValues (submitEvent) {
            let index = 0;
            let inputsArray = submitEvent.target.elements;
            let valuesArray= [];
            let newProject = {
                "budget_code": null,
                "budget_item": null,
                "fact_expenses": null,
                "budget_total": null,
                "budget_q1": null,
                "approver_q1": null,
                "budget_q2": null,
                "approver_q2": null,
                "budget_q3": null,
                "approver_q3": null,
                "budget_q4": null,
                "approver_q4": null,
                "comment": null,
                "project": null,     
            };
            let testProject = {
                "budget_code": "test-code",
                "budget_item": "test-item",
                "fact_expenses": 111111,
                "budget_total": 22222,
                "budget_q1": 1111,
                "budget_q2": 1111,
                "budget_q3": 1111,
                "budget_q4": 111,
                "comment": "must be comment",
                
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
            
            newProject.fact_expenses    = parseInt(newProject.fact_expenses, 10);
            newProject.budget_total     = parseInt(newProject.budget_total, 10);
            newProject.budget_q1        = parseInt(newProject.budget_q1, 10);
            newProject.budget_q2        = parseInt(newProject.budget_q2, 10);
            newProject.budget_q3        = parseInt(newProject.budget_q3, 10);
            newProject.budget_q4        = parseInt(newProject.budget_q4, 10);
            // newProject.approver_q1        = parseInt(newProject.approver_q1, 10);
            // newProject.approver_q2        = parseInt(newProject.approver_q2, 10);
            // newProject.approver_q3        = parseInt(newProject.approver_q3, 10);
            // newProject.approver_q4        = parseInt(newProject.approver_q4, 10);
            // newProject.project          = parseInt(this.$route.params.id);
            console.log(testProject)
            this.saveBudget(testProject);
            console.log(this.getBudget())
            // this.loadProjects();
            // this.$emit('project-create', {});
        }
    }
}
</script>
<style>
    .test{
        background-color: #fff;
    }
</style>

