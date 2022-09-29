<template>
  <div>
    
    
  <v-data-table
    :headers="headers"
    :items="books"
    :items-per-page="5"
    class="elevation-1"
  >
  <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
              @click="editedItem={... defaultItem};isAdd=true"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.price"
                      label="price"
                    ></v-text-field>
                  </v-col>
                 
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="isAdd ? save() : editItem(editedItem)"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="dialog = true;editedItem={...item};isAdd=false"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>

    
    </template>                                                                                                                                                                                                                                                              
  
  </v-data-table>
</div>
</template>

<script>
    import axios from "axios"
export default {
    name: "TabloB",
  components: { 

  },
  data() {
    return {
      dialog: false,
      dialogDelete: false,
        headers: [
          {
            text: 'id',
            align: 'start',
            sortable: false,
            value: 'id',
          },
          { text: 'name', value: 'name' },
          { text: 'price', value: 'price' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
     books: [
     
     ]
      ,
      editedIndex: -1,
      editedItem: {
        name:'',
        price:'',
      },
      defaultItem: {
        name:'',
        price:'',
      },
      isAdd: false,
      computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },
  }},
  methods:{
    editItem (item) {
        // this.editedItem = Object.assign({}, item)
        // this.editedItem = {...item}
        
        axios.put(`https://vuango-books-api.herokuapp.com/books/${item.id}/`, item).then((res) => {
        console.log(res)
        })
        
        this.dialog = false

       
      
     
    },
    
    

      deleteItem (item) {
        this.editedIndex = this.books.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
        axios.delete(`https://vuango-books-api.herokuapp.com/books/${this.editedIndex}/`).then(()=>{
        
      })
      },

      deleteItemConfirm () {
        this.books.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        axios.post(`https://vuango-books-api.herokuapp.com/books/`,this.editedItem).then(() => {
          this.dialog = false
               
              })
      },
 }
  ,
      created(){
    axios.get('https://vuango-books-api.herokuapp.com/books/').then((res)=>{
      this.books = res.data
      console.log(this.books)
    })
  },
} 
   

</script>
