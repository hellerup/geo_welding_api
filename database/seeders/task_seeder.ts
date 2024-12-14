import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Task from '#models/task'
import TaskLocation from '#models/task_location'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Task.createMany([
      {
        title: 'Task 1',
        description: 'Description 1'
      },
      {
        title: 'Task 2',
        description: 'Description 2'
      },
      {
        title: 'Task 3',
        description: 'Description 3'
      },
    ])

    await TaskLocation.createMany([
      {
        taskId: 1,
        latitude: 55.57308,
        longitude: 12.23432
      },
      {
        taskId: 1,
        latitude: 55.95951,
        longitude: 12.23355
      },
      {
        taskId: 1,
        latitude: 55.95865,
        longitude: 12.23253
      },
      {
        taskId: 2,
        latitude: 4.56789,
        longitude: 4.56789
      },
      {
        taskId: 3,
        latitude: 5.6789,
        longitude: 5.6789
      },
      {
        task_id: 3,
        latitude: 6.789,
        longitude: 6.789
      },
    ])
  }
}