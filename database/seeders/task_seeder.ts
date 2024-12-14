import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Task from '#models/task'

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
  }
}