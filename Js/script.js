 // Vue App
 const app = Vue.createApp({
  data() {
      return {
          inpText: '',
          todos: []
      }
  },
  methods: {
      addTodo() {
          if (this.inpText.trim() !== '') {
              this.todos.push(this.inpText.trim());
              this.clearInput();
          }
      },
      clearInput() {
          this.inpText = '';
      },
      removeTodo(index) {
          this.todos.splice(index, 1);
      }
  }
});
app.mount('#app');