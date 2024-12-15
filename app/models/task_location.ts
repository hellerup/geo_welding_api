import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import Task from './task.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class TaskLocation extends BaseModel {
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime | null

  @column({ isPrimary: true })
  declare id: unknown

  @column()
  declare latitude: number | null

  @column()
  declare longitude: number | null

  @column()
  declare taskId: unknown | null

  @column()
  declare handled: boolean | null

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @belongsTo(() => Task)
  declare task: BelongsTo<typeof Task>
}