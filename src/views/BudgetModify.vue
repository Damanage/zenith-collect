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
   mapGetters }               from 'vuex';
export default {
    
    data: () => ({
        dialog: false,
        fields2:{
            fieldSet1: ["Название статьи","Фактическая сумма","Бюджет на проект"],
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
            saveProject: 'saveProject',
            loadProjects: 'loadProjects'
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

            this.saveProject(newProject);
            this.loadProjects();
            this.$emit('project-create', {});
        }
    }
}
</script>
<style>
    .test{
        background-color: #fff;
    }
</style>

