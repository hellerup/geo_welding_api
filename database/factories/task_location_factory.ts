import factory from '@adonisjs/lucid/factories'
import TaskLocation from '#models/task_location'

export const TaskLocationFactory = factory
  .define(TaskLocation, async ({ faker }) => {
    return {}
  })
  .build()