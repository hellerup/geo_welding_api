import type { HttpContext } from '@adonisjs/core/http'
import Task from '#models/task'

export default class TasksController {
    async index({ response }: HttpContext) {
        const c = await Task.query()
        return response.json(c)
    }
}