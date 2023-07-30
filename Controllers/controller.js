import { Producto } from "../Models/productos.js";
import { Pedido } from "../Models/pedidos.js";
import { Usuario } from "../Models/usuarios.js";

const getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const getProducto = async (req, res) => {
  const { idProducto } = req.params;
  try {
    const producto = await Producto.findByPk(idProducto);
    res.status(200).json([producto]);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const postProductos = async (req, res) => {
  const { nombre, detalle, cantidad, precio, imagen } = req.body;

  try {
    const newProducto = await Producto.create({
      nombre,
      detalle,
      cantidad,
      precio,
      imagen,
    });
    res.status(200).json(newProducto);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const putProductos = async (req, res) => {
  const { idProducto } = req.params;
  const { nombre, detalle, cantidad, precio, imagen } = req.body;
  try {
    const oldProducto = await Producto.findByPk(idProducto);
    oldProducto.nombre = nombre;
    oldProducto.detalle = detalle;
    oldProducto.cantidad = cantidad;
    oldProducto.precio = precio;
    oldProducto.imagen = imagen;
    const modProducto = await oldProducto.save();
    res.status(200).json(modProducto);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const deleteProductos = async (req, res) => {
  const { idProducto } = req.params;
  try {
    const respuesta = await Producto.destroy({
      where: {
        idProducto,
      },
    });
    res.status(200).json({ mensaje: "Registro Eliminado" });
  } catch (error) {
    res.status(400).json({ mensaje: "Registro No Eliminado" + error });
  }
};

// PEDIDOS

const postPedidos = async (req, res) => {
  const { cliente, correo, direccion, producto, cantidad, precio } = req.body;
  try {
    const nuevoPedido = await Pedido.create({
      cliente,
      correo,
      direccion,
      producto,
      cantidad,
      precio,
    });
    res.status(200).json(nuevoPedido);
  } catch (error) {
    res.status(400).json({ mensaje: err });
  }
};

const getPedidos = async (req, res) => {
  try {
    const pedido = await Pedido.findAll();
    res.status(200).json(pedido);
  } catch (error) {
    res.status(400).json({ mensaje: err });
  }
};

const deletePedido = async (req, res) => {
  const { idPedido } = req.params;
  try {
    const respuesta = await Pedido.destroy({
      where: {
        idPedido,
      },
    });
    res.status(200).json({ mensaje: "Registro Eliminado" });
  } catch (error) {
    res.status(400).json({ mensaje: "Registro No Eliminado" + error });
  }
};

//USUARIOS

const getUsuario = async (req, res) => {
  const { idUsuario } = req.params;
  try {
    const usuario = await Usuario.findByPk(idUsuario);
    res.status(200).json([usuario]);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const postUsuarios = async (req, res) => {
  const { nombre, direccion, correo, contrasena, rol } = req.body;
  try {
    const newUsuario = await Usuario.create({
      nombre,
      direccion,
      correo,
      contrasena,
      rol,
    });
    res.status(200).json(newUsuario);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const postUsuarioLogin = async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    const usuario = await Usuario.findOne({
      where: { correo: correo, contrasena: contrasena },
    });
    if (!usuario) {
      return res.status(401).json({ mensaje: "Usuario no registrado" });
    }

    if (usuario.contrasena !== contrasena) {
      return res.status(401).json({ mensaje: "Usuario no registrado" });
    }
    res.status(200).json(usuario);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
};

export {
  getProductos,
  getProducto,
  postProductos,
  putProductos,
  deleteProductos,
  getPedidos,
  postPedidos,
  deletePedido,
  getUsuario,
  postUsuarios,
  postUsuarioLogin,
};
