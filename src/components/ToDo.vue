<template>
  <div>
    <v-form>
      <v-row>
        <v-felx  md3>
          <v-col>
            <v-text-field
              v-model="newTask"
              @keyup.enter="add"
              label="newTask"
            ></v-text-field>
          </v-col>
        </v-felx>
        <v-felx  md3>
          <v-col>
        <v-btn  class="pink white--text" @click="add" :disabled="!newTask"> Add </v-btn>
    </v-col>
        </v-felx>
        <v-felx  md3>
          <v-col>
        <v-btn  class="pink white--text" @click="add"> Delete All </v-btn>
    </v-col>
        </v-felx>
      </v-row>
    </v-form>
       
    <v-container class="my-5">
        <v-layout row justify-space-between>
        <v-felx xs12 md3>
          <v-col>
    <div>
      <h2 class="red white--text">backlog</h2>
      <br />
      <draggable
        class="list-group"
        :list="arrback"
        :animation="200"
        ghost-class="ghost-card"
        group="tasks"
      >
        <div
          class="text-overline mb-4"
          v-for="(task) in arrback"
          :key="task.name"
          :task="task"
        >
          <v-card elevation="3" class="mx-auto" max-width="344" outlined>
            <v-list-item>
              <v-list-item-content>
                {{ task.name }}
              </v-list-item-content>
              <v-list-item-action>
          <span class="delete" @click="delet(index)">delete</span>
        </v-list-item-action>
              
            </v-list-item>
            <!-- <span class="delete" @click="delet(index)">delete</span> -->
          </v-card>
        </div>
      </draggable>
    </div>
</v-col>
        </v-felx>


        <v-felx  md3>
          <v-col>
    <div>
      <h2>inprogress</h2>
      <br />
      <draggable
        class="list-group"
        :list="inprogress"
        :animation="200"
        ghost-class="ghost-card"
        group="tasks"
      >
        <div
          class="text-overline mb-4"
          v-for="task in inprogress"
          :key="task.name"
          :task="task"
        >
          <v-card elevation="3" class="mx-auto" max-width="344" outlined>
            <v-list-item>
              <v-list-item-content>
                {{ task.name }}
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </div>
      </draggable>
    </div>
</v-col>
        </v-felx>


        <v-felx  md3>
          <v-col>
    <div>
       
      <h2>Tested</h2>
      <br />
      <draggable
        class="list-group"
        :list="ToDo"
        :animation="200"
        ghost-class="ghost-card"
        group="tasks"
      >
        <div
          class="text-overline mb-4"
          v-for="task in Tested"
          :key="task.name"
          :task="task"
        >
          <v-card elevation="3" class="mx-auto" max-width="344" outlined>
            <v-list-item>
              <v-list-item-content>
                {{ task.name }}
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </div>
      </draggable>
    </div>
</v-col>
        </v-felx>

        <v-felx  md3>
          <v-col>
    <div>
      <h2 class="red white--text">Done</h2>
      <br />
      <draggable
        class="list-group"
        :list="arrback"
        :animation="200"
        ghost-class="ghost-card"
        group="tasks"
      >
        <div
          class="text-overline mb-4"
          v-for="task in done"
          :key="task.name"
          :task="task"
        >
          <v-card elevation="3" class="mx-auto" max-width="344" outlined>
            <v-list-item>
              <v-list-item-content>
                {{ task.name }}
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </div>
      </draggable>
    </div>
</v-col>
        </v-felx>

    </v-layout>
    </v-container>
  </div>
</template>

<script>
import draggable from "vuedraggable";
//   import TaskCard from "./TaskCard.vue";
export default {
  components: { draggable },

  data() {
    return {
      newTask: "",
      arrback: [{ name: "go to the gym" }, { name: "study 2 hours" }],
      inprogress: [{ name: "go to the gym" }, { name: "study 2 hours" }],
      Tested: [{ name: "work on project" }, { name: "study 2 hours" }],
      done: [],
    };
  },
  methods: {
    add() {
      if (this.newTask) {
       this.arrback.push({ name: this.newTask });
     
      }
    },
    delete(index) {
      
       this.arrback.aplice(index,1);
     
      },
    },
  }
</script>

<style ></style>
