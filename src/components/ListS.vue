<template>
  <div>
    <v-form>
      <v-row>
        <v-felx xs12 md3>
          <v-col>
            <v-text-field
              v-model="newTask"
              @keyup.enter="add"
              label="newTask"
            ></v-text-field>
          </v-col>
        </v-felx>

        <v-btn color="primary" class="mr-10" @click="add"> Add </v-btn>
      </v-row>
    </v-form>

    <div class="flex justify-center">
      <div class="min-h-screen flex overflow-x-scroll py-12">
        <div
          v-for="column in columns"
          :key="column.title"
          class="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4"
        >
          <p
            class="text-gray-700 font-semibold font-sans tracking-wide text-sm"
          >
            {{ column.title }}
          </p>

          <draggable
            :list="column.tasks"
            :animation="200"
            ghost-class="ghost-card"
            group="tasks"
          >
            <TaskCard
              v-for="task in column.tasks"
              :key="task.name"
              :task="task"
              class="mt-3 cursor-move"
            ></TaskCard>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TaskCard from "./TaskCard.vue";
export default {
  components: { draggable, TaskCard },

  data() {
    return {
      newTask: "",
      columns: [
        {
          title: "arrback",
          tasks: [{ name: "Test Dashboard" }, { name: "Help Dashboard" }],
        },
        { title: "arrInprogras", tasks: [{ name: "" }] },
        { title: "arrDone", tasks: [{ name: "" }] },
      ],
    };
  },
  methods: {
    add() {
      if (this.newTask) {
        this.columns[0].tasks.push({ name: this.newTask });
        this.newTask = "";
      }
    },
  },
};
</script>

<style scoped>
  .column-width {
    min-width: 320px;
    width: 320px;
  }
  /* Unfortunately @apply cannot be setup in codesandbox, 
  but you'd use "@apply border opacity-50 border-blue-500 bg-gray-200" here */
  .ghost-card {
    opacity: 0.5;
    background: #F7FAFC;
    border: 1px solid #4299e1;
  }
  </style>
