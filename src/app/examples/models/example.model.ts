import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "core/database/connection";

interface ExampleAttributes {
  id: number;
  name: string;
  slug: string;
  description?: string;
  foodGroup?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface ExampleInput
  extends Optional<ExampleAttributes, "id" | "slug"> {}

export interface ExampleOutput extends Required<ExampleAttributes> {}

class Example
  extends Model<ExampleAttributes, ExampleInput>
  implements ExampleAttributes
{
  public id!: number;
  public name!: string;
  public slug!: string;
  public description!: string;
  public foodGroup!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Example.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    foodGroup: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection.connection,
    paranoid: true,
  },
);

export default Example;
