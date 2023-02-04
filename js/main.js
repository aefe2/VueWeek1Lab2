Vue.component('todo', {
    template: `
        <ul class="todo-list">
            <li class="todo-item">
                <div class="todo-header">{{ todo.title }}</div>
                <div class="todo-meta"><p>{{ todo.project }}</p></div>
            </li>
            <div class="extra">
                <button class="edit btn" v-on:click="showForm">
                </button>
                <button class='trash btn' v-on:click="deleteTodo(todo)"></button>
            </div>
            <div class="content" v-show="isEditing">
                <div class='form'>
                    <div class='field'>
                        <label>Title</label>
                        <input type='text' v-model="todo.title" >
                    </div>
                    <div class='field'>
                        <label>Project</label>
                        <input type='text' v-model="todo.project" >
                    </div>
                    <div class='field'>
                        <label>Status</label><br>
                        <input type='radio' v-bind:value="true" v-model="todo.done" id="done">
                        <label for="done">Done</label>
                        <input type="radio" v-bind:value="false" v-model="todo.done" id="in-progress">
                        <label for="in-progress">In Progress</label>
                    </div>
                    <div class='ui two button attached buttons'>
                        <button class='ui basic blue button' v-on:click="hideForm">
                            Save
                        </button>
                    </div>
                </div>
            </div>
            <div class='ui bottom attached green basic button' v-show="!isEditing &&todo.done" disabled>
                Done
            </div>
            <div class='ui bottom attached red basic button' v-show="!isEditing && !todo.done">
                In progress
            </div>
        </ul>
        
    `,
    props: ['todo'],
    data() {
        return {
            isEditing: false,
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
    <div class='ui basic content center aligned segment'>
        <button class='ui basic button icon' v-on:click="openForm" v-show="!isCreating">
            <span>Create New</span>
        </button>
        <div class='ui centered card' v-show="isCreating">
            <div class='content'>
                <div class='ui form'>
                    <div class='field'>
                        <label>Title</label>
                        <input v-model="titleText" defaultValue="">
                    </div>
                    <div class='field'>
                        <label>Project</label>
                        <input v-model="projectText" type='text' defaultValue="">
                    </div>
                    <div class='ui two button attached buttons'>
                        <button class='ui basic blue button' v-on:click="sendForm">
                            Create
                        </button>
                        <button class='ui basic red button' v-on:click="closeForm">
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
            projectText: '',
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
            if (this.titleText.length > 0 && this.projectText.length > 0) {
                let title = this.titleText;
                let project = this.projectText;
                this.$emit('create-todo', {
                    title,
                    project,
                    done: false,
                });
                this.titleText = '';
                this.projectText = '';
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
                    title: 'Todo A',
                    project: 'Project A',
                    done: false,
                }, {
                    title: 'Todo B',
                    project: 'Project B',
                    done: true,
                }, {
                    title: 'Todo C',
                    project: 'Project C',
                    done: false,
                }, {
                    title: 'Todo D',
                    project: 'Project D',
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