Vue.component('todo', {
    template: `
        <ul class="todo-list">
            <li class="todo-item">
                <div class="todo-header">{{ todo.title }}</div>
                <div class="todo-meta">{{ todo.project }}</div>
            </li>
            <div class="extra">
                <button class="edit btn" v-on:click="showForm" v-show="!todo.done">Edit</button>
                <button class='trash btn' v-on:click="deleteTodo(todo)">Delete</button>
            </div>
            <div class="content" v-show="isEditing">
                <div class='form'>
                    <div class='field'>
                        <label>Title</label>
                        <input type='text' v-model="todo.title">
                    </div>
                    <div class='field'>
                        <label>Project</label>
                        <input type='text' v-model="todo.project">
                    </div>
                    <div class='field' v-show="!todo.done">
                        <label>Status</label><br>
                        <input type='radio' v-bind:value="true" v-model="todo.done" id="done">
                        <label for="done">Done</label>
                        <input type="radio" v-bind:value="false" v-model="todo.done" id="in-progress">
                        <label for="in-progress">In Progress</label>
                    </div>
                    <div>
                        <button class='button' v-on:click="hideForm">
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <div v-show="!isEditing && todo.done">
                Done
            </div>
            <div v-show="!isEditing && !todo.done">
                In progress
            </div>
        </ul>
        
    `,
    props: {
        todo: {
            type: Array,
            required: true,
        },
        // projects: {
        //     type: Array,
        //     default: '',
        // }
    },
    data() {
        return {
            isEditing: false,
            projects: [],
        };
    },
    methods: {
        completeTodo(todo) {
            this.$emit('complete-todo', todo);
        },
        deleteTodo(todo) {
            this.$emit('delete-todo', todo);
        },
        showForm() {
            this.isEditing = true;
        },
        hideForm() {
            this.isEditing = false;
        },
    },
})

Vue.component('todo-list', {
    template: `
    <div class="todo-card">
        <todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="todo in todos" :todo.sync="todo"></todo>
    </div>
    `,
    props: ['todos'],
    methods: {
        deleteTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
        completeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos[todoIndex].done = true;
        },
    },
})

Vue.component('todo-create', {
    template: `
    <div class="create-container">
        <button class='button' v-on:click="openForm" v-show="!isCreating">
            <span>Create New</span>
        </button>
        <div class='card' v-show="isCreating">
            <div class='content'>
                <div class='form'>
                    <div class='field'>
                        <input v-model="titleText" placeholder="Title">
                    </div>
<!--                    <div class='field'>-->
<!--                        <input v-model="projectText" type='text' placeholder="Project">-->
<!--                    </div>-->
                    <div class='buttons'>
                        <button class='button' v-on:click="sendForm">
                            Create
                        </button>
                        <button class='button' v-on:click="closeForm">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            titleText: '',
            // projectText: '',
            isCreating: false,
        };
    },
    methods: {
        openForm() {
            this.isCreating = true;
        },
        closeForm() {
            this.isCreating = false;
        },
        sendForm() {
            // && this.projectText.length > 0
            if (this.titleText.length > 0) {
                let title = this.titleText;
                // let projects = this.projectText;
                this.$emit('create-todo', {
                    title,
                    // projects,
                    done: false,
                });
                this.titleText = '';
                // this.projectText = '';
                this.isCreating = false;
            }
        },
    },
})

const app = new Vue({
        el: '#app',
        data() {
            return {
                todos: [{
                    title: null,
                    projects: [],
                    done: false,
                }],
            };
        },
        methods: {
            createTodo(newTodo) {
                this.todos.push(newTodo);
            },
        },
    }
)