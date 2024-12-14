import factory from '@adonisjs/lucid/factories'
import Task from '#models/task'

export const TaskFactory = factory
  .define(Task, async ({ faker }) => {
    return {}
  })
  .build()