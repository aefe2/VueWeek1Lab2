let eventBus = new Vue()

Vue.component('todo-list', {
    props: ['todos'],
    template: `
    <div class="todo-card">
        <ul class="todo-list">
            <li v-for="todo in todos" class="todo-item">
            
                <div class="todo-header">{{ todo.title }}</div>
                <div class="todo-meta"><p>{{ todo.project }}</p></div>
            </li>    
        </ul>
    </div>
    `,
})

// Vue.component('column1', {
//     props: ['todos'],
//     template: `
//     <div class="column column1">
//
//     </div>
//     `,
// })

// Vue.component('column2', {
//     props: {},
//     template: `
//     <div class="column column2">
//             <div class="todo-card">
//                 <h3>Заголовок заметки</h3>
//                 <ul class="todo-list">
//                     <li class="todo-item">
//                         <p>Что то сделать</p>
//                         <input class="todo-done" type="button" value="Готово">
//                     </li>
//                     <li class="todo-item">
//                         <p>Что то сделать</p>
//                         <input class="todo-done" type="button" value="Готово">
//                     </li>
//                     <li class="todo-item">
//                         <p>Что то сделать</p>
//                         <input class="todo-done" type="button" value="Готово">
//                     </li>
//                 </ul>
//             </div>
//             <div class="todo-card">
//                 <h3>Заголовок заметки</h3>
//                 <ul class="todo-list">
//                     <li class="todo-item">
//                         <p>Что то сделать</p>
//                         <input class="todo-done" type="button" value="Готово">
//                     </li>
//                     <li class="todo-item">
//                         <p>Что то сделать</p>
//                         <input class="todo-done" type="button" value="Готово">
//                     </li>
//                     <li class="todo-item">
//                         <p>Что то сделать</p>
//                         <input class="todo-done" type="button" value="Готово">
//                     </li>
//                 </ul>
//             </div>
//             <div class="todo-card">
//                 <h3>Заголовок заметки</h3>
//                 <ul class="todo-list">
//                     <li class="todo-item">
//                         <p>Что то сделать</p>
//                         <input class="todo-done" type="button" value="Готово">
//                     </li>
//                     <li class="todo-item">
//                         <p>Что то сделать</p>
//                         <input class="todo-done" type="button" value="Готово">
//                     </li>
//                     <li class="todo-item">
//                         <p>Что то сделать</p>
//                         <input class="todo-done" type="button" value="Готово">
//                     </li>
//                 </ul>
//             </div>
//             <div class="todo-card">
//                 <h3>Заголовок заметки</h3>
//                 <ul class="todo-list">
//                     <li class="todo-item">
//                         <p>Что то сделать</p>
//                         <input class="todo-done" type="button" value="Готово">
//                     </li>
//                     <li class="todo-item">
//                         <p>Что то сделать</p>
//                         <input class="todo-done" type="button" value="Готово">
//                     </li>
//                     <li class="todo-item">
//                         <p>Что то сделать</p>
//                         <input class="todo-done" type="button" value="Готово">
//                     </li>
//                 </ul>
//             </div>
//             <div class="todo-card">
//                 <h3>Заголовок заметки</h3>
//                 <ul class="todo-list">
//                     <li class="todo-item">
//                         <p>Что то сделать</p>
//                         <input class="todo-done" type="button" value="Готово">
//                     </li>
//                     <li class="todo-item">
//                         <p>Что то сделать</p>
//                         <input class="todo-done" type="button" value="Готово">
//                     </li>
//                     <li class="todo-item">
//                         <p>Что то сделать</p>
//                         <input class="todo-done" type="button" value="Готово">
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     `,
// })
//
// Vue.component('column3', {
//     props: {},
//     template: `
//     <div class="column column3">
//             <div class="todo-card">
//                 <h3>Заголовок заметки</h3>
//                 <ul class="todo-list">
//                     <li class="todo-item">
//                         <p>Что то сделать</p>
//                         <input class="todo-done" type="button" value="Готово">
//                     </li>
//                     <li class="todo-item">
//                         <p>Что то сделать</p>
//                         <input class="todo-done" type="button" value="Готово">
//                     </li>
//                     <li class="todo-item">
//                         <p>Что то сделать</p>
//                         <input class="todo-done" type="button" value="Готово">
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     `,
// })

// Vue.component('todo-form', {
//
//     template: `
//     <div class="todo-form-mask">
//         <form class="todo-form">
//             <input class="todo-form-input" type="text" name="NewTodo" placeholder="Заголовок заметки">
//             <input class="todo-form-input" type="text" placeholder="Заметка">
//             <label for="todo-select">Выберите столбец</label>
//             <select name="Столбец" id="todo-select" class="todo-form-input">
//                 <option class="todo-option" value="1">1</option>
//                 <option class="todo-option" value="2">2</option>
//                 <option class="todo-option" value="3">3</option>
//             </select>
//             <input class="todo-form-input" type="button" value="Готово">
//         </form>
//     </div>
//     `
// })

let app = new Vue({
        el: '#app',
        data() {
            return {
                todos: [{
                    title: 'Escape from this afterlife',
                    project: '123',
                    done: false,
                }]
            }
        }
    }
)