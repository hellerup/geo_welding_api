import type { HttpContext } from '@adonisjs/core/http'
import Task from '#models/task'

export default class TasksController {
    async index({ response }: HttpContext) {
        const tasks = await Task.query().preload('taskLocations')
        return response.json(tasks)
    }
}