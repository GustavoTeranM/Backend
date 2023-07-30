import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const Producto = sequelize.define(
  "producto",
  {
    idProducto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    detalle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

export { Producto };
