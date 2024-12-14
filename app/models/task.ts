import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import TaskLocation from './task_location.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Task extends BaseModel {
  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime | null

  @column()
  declare description: string

  @column({ isPrimary: true })
  declare id: unknown

  @column()
  declare title: string

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null

  @hasMany(() => TaskLocation)
  declare taskLocations: HasMany<typeof TaskLocation>
}