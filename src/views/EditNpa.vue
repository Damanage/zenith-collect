<template>
    <v-container
            fill-height
            fluid
            grid-list-xl pa-3>
        <v-layout justify-center wrap>
            <v-flex md12>
                <material-card
                        color="green"
                        :title="npa.description"
                        text="Редактирование карточки">
                    <v-form>
                        <v-container pa-0>
                            <v-layout wrap>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-textarea
                                                rows="1"
                                                v-model="npa.description"
                                                label="Описание"
                                                class="mx-1"></v-textarea>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="npa.place_of_collection"
                                                label="Центр сбора"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="npa.npa_type"
                                                label="Тип имущества"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="npa.npa_sort"
                                                label="Вид имущества"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="npa.npa_category"
                                                label="Категория"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="npa.status"
                                                label="Статус"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="npa.profile"
                                                label="Принадлежность объекта"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="npa.doc_reason"
                                                label="Документ основания"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                :value="contactProject.full_name"
                                                readonly
                                                label="Наименование проекта"
                                                class="mx-1"
                                                append-icon="search"
                                                @click:append="dialog = true"></v-text-field>
                                    </v-flex>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-form>
                </material-card>
            </v-flex>
        </v-layout>
        <dialog-select :show-dialog="dialog"
                       :current-selection="contactProject"
                       :list-collection="projects"
                       item-property="full_name" @itemSelected="returnDialog"></dialog-select>
    </v-container>
</template>

<script>
  import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
  import { EventBus, EventName} from '@/utils/eventbus';

  export default {
    data () {
      return {
        dialog: false,
        contactProject: {}
      }
    },
    computed: {
      ...mapGetters({
        npa: 'getNpa',
        projects: 'getProjects'
      })
    },
    methods: {
      returnDialog (item) {
        this.contactProject = item || this.contactProject;
        this.dialog = false;
      },
      ...mapActions({
        saveNpa: 'saveNpa',
        findNpa: 'findNpa',
      }),
      goBack() {
        this.$router.push('/npas');
      }
    },
    watch: {
      npa(v){
        this.contactProject = (v && v.project) || {};
      }
    },
    created () {
      let id = this.$route.params.id;
      this.findNpa(id);
      EventBus.$on(EventName.EVENT_SAVE, () => {this.saveNpa(this.npa);});
    },
    beforeDestroy() {
      EventBus.$off(EventName.EVENT_SAVE);
    }
  }
</script>
<style scoped>
</style>

