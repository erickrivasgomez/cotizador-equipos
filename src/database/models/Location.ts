import { Table, Column, Model, PrimaryKey, DataType, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class Location extends Model<Location> {

  @PrimaryKey
  @Column(DataType.NUMBER)
  id: number

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.TEXT)
  description: string;

  @CreatedAt
  @Column(DataType.DATE)
  createdAt: Date

  @UpdatedAt
  @Column(DataType.DATE)
  updatedAt: Date

}