<template>
  <div>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field
            v-model="newTask.name"
            @keyup.enter="add"
            label="newTask"
          ></v-text-field>
        </v-col>

        <v-col>
          <v-btn class="pink white--text" @click="add" @keyup.enter="add"> Add Task </v-btn>
        </v-col>

        <v-col>
          <v-btn class="pink white--text" @click="delall">
            Delete Backlog
          </v-btn>
        </v-col>
      </v-row>
    </v-form>

    <!-- starting of todo -->

    <v-container class="my-5">
      <v-layout row justify-space-between>
        <v-col>
          <div>
            <h2 class="red white--text">backlog</h2>
            <br />

            <v-list subheader>
              <v-card elevation="3" class="mx-auto" max-width="344" outlined>
                <v-list-item
                  v-for="task in arrback.filter((i) => !i.state)"
                  :key="task.id"
                >
                  <v-list-item-action>
                    <v-checkbox
                      v-model="task.state"
                      @input="task.state = !task.state"
                    ></v-checkbox>
                  </v-list-item-action>
                  <v-list-item-content>
                    {{ task.name }}
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn icon>
                      <v-icon color="grey lighten-1" @click="delet(task.id)">
                        mdi-delete</v-icon
                      >
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-card>
            </v-list>
            
          </div>
        </v-col>

        <v-col>
          <div>
            <h2 class="red white--text">Done</h2>
            <br />
            <v-list subheader>
              <v-card elevation="3" class="mx-auto" max-width="344" outlined>
                <v-list-item
                  v-for="task in arrback.filter((i) => i.state)"
                  :key="task.id"
                >
                  <v-list-item-content>
                    {{ task.name }}
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-btn icon>
                      <v-icon color="grey lighten-1" @click="delet(task.id)">
                        mdi-delete</v-icon
                      >
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-card>
            </v-list>
          </div>
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      newTask: { name: "", id: null, state: false },

      arrback: [
        { name: "go to the gym", id: 1, state: false },
        { name: "study", id: 2, state: false },
      ],
    };
  },
  methods: {
    add() {
      if (this.newTask.name) {
        this.newTask.id = this.arrback.length + 1;
        this.arrback.push({ ...this.newTask });
     
        this.newTask.name = "";
      }
    },
    delet(id) {
      const index = this.arrback.findIndex((object) => {
        return object.id === id;
      });
      this.arrback.splice(index, 1);
    },
    delall() {
      this.arrback = [];
    },
    todone(I) {
      this.done.push(I);
    },
  },
};
</script>

<style></style>

