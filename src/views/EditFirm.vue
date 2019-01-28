<template>
    <v-container
            fill-height
            fluid
            grid-list-xl pa-3>
        <v-layout justify-center wrap>
            <v-flex md12>
                <material-card
                        color="green"
                        :title="firm.short_name"
                        text="Редактирование карточки">
                    <v-form>
                        <v-container pa-0>
                            <v-layout wrap>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="firm.opf"
                                                label="ОПФ"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="firm.full_name"
                                                label="Полное наименование"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="firm.short_name"
                                                label="Наименование"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="firm.action_type"
                                                label="Вид деятельности"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="firm.inn"
                                                label="ИНН"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="firm.filial"
                                                label="Филиал"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="firm.okved"
                                                label="Код ОКВЭД"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>

                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="firm.stage"
                                                label="Этап"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                :value="firm.responsible | fio"
                                                readonly
                                                label="Ответственный"
                                                append-icon="account_box"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="firm.status"
                                                label="Статус"
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
        firm: 'getFirm',
        projects: 'getProjects'
      })
    },
    methods: {
      returnDialog (item) {
        this.contactProject = item || this.contactProject
        this.dialog = false
      },
      ...mapActions({
        saveFirm: 'saveFirm',
        findFirm: 'findFirm',
      }),
      goBack () {
        this.$router.push('/firms')
      }
    },
    watch: {
      firm (v) {
        this.contactProject = (v && v.project) || {}
      }
    },
    created () {
      let id = this.$route.params.id;
      this.findFirm(id);
      EventBus.$on(EventName.EVENT_SAVE, () => {this.saveFirm(this.firm);});
    },
    beforeDestroy() {
      EventBus.$off(EventName.EVENT_SAVE);
    }
  }
</script>
<style scoped>
</style>
