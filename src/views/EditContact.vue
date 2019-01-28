<template>
    <v-container
            fill-height
            fluid
            grid-list-xl pa-3>
        <v-layout justify-center wrap>
            <v-flex md12>
                <material-card
                        color="green"
                        :title="contact | fio"
                        text="Редактирование карточки">
                    <v-form>
                        <v-container pa-0>
                            <v-layout wrap>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="contact.sur_name"
                                                label="Фамилия"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="contact.name"
                                                label="Имя"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="contact.patr_name"
                                                label="Отчество"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                mask="##.##.####"
                                                v-model="contact.birth_date"
                                                label="Дата рождения"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-select
                                                :items="['мужской','женский']"
                                                v-model="contact.sex"
                                                label="Пол"
                                                class="mx-1"></v-select>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                mask="#### ######"
                                                v-model="contact.passport"
                                                label="Паспорт"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="contact.tp_code"
                                                label="Филиал"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="contact.place_of_collection"
                                                label="Центр сбора"
                                                class="mx-1"></v-text-field>
                                    </v-flex>
                                </v-flex>
                                <v-flex xs12 md6 pa-0>
                                    <v-flex xs12 md10>
                                        <v-text-field
                                                v-model="contact.time_zone"
                                                label="Часовой пояс"
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
  import { EventBus, EventName } from '@/utils/eventbus'

  export default {
    data () {
      return {
        dialog: false,
        contactProject: {}
      }
    },
    computed: {
      ...mapGetters({
        contact: 'getContact',
        projects: 'getProjects'
      })
    },
    methods: {
      returnDialog (item) {
        this.contactProject = item || this.contactProject
        this.dialog = false
      },
      ...mapActions({
        saveContact: 'saveContact',
        findContact: 'findContact',
      }),
      goBack () {
        this.$router.push('/contacts')
      }
    },
    watch: {
      contact (v) {
        this.contactProject = (v && v.project) || {}
      }
    },
    created () {
      let id = this.$route.params.id
      this.findContact(id)
      EventBus.$on(EventName.EVENT_SAVE, () => {
        this.saveContact(this.contact)
      })
    },
    beforeDestroy () {
      EventBus.$off(EventName.EVENT_SAVE)
    }
  }
</script>
<style type="text/css">
</style>
