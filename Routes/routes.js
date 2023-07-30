import { Router } from "express";
import {
  getProductos,
  postProductos,
  putProductos,
  deleteProductos,
  getProducto,
  getPedidos,
  postPedidos,
  deletePedido,
  getUsuario,
  postUsuarios,
  postUsuarioLogin,
} from "../Controllers/controller.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("GET Pagina Principal Express");
});

router.get("/productos", getProductos);
router.get("/productos/:idProducto", getProducto);
router.post("/productos", postProductos);
router.put("/productos/:idProducto", putProductos);
router.delete("/productos/:idProducto", deleteProductos);

router.get("/usuarios/:idUsuario", getUsuario);
router.post("/usuarios", postUsuarios);
router.post("/acceder", postUsuarioLogin);

router.get("/pedidos", getPedidos);
router.post("/pedidos", postPedidos);
router.delete("/pedidos/:idPedido", deletePedido);

export default router;
