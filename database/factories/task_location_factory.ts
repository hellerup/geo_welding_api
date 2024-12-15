import factory from '@adonisjs/lucid/factories'
import TaskLocation from '#models/task_location'

export const TaskLocationFactory = factory
  .define(TaskLocation, async ({ faker }) => {
    return {
      latitude: faker.number.float(),
      longitude: faker.number.float(),
      taskId: faker.number.bigInt(),

    }
  })
  .build()