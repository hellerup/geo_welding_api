/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const TasksController = () => import('#controllers/tasks_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/tasks', [TasksController, 'index']).as('tasks.index')
