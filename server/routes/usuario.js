//rutas para usuario
const express = require('express')
const router = express.Router();
const usuarioController = require('../controllers/usuarioController')
//api/usuario - sirve para registrar un nuevo usuario
router.post('/', usuarioController.crearUsuario)
//obteniendo los usuarios registrados
router.get('/', usuarioController.obtenerUsuarios)

//actualizar un usuario
// router.put('/usuarios/:id', usuarioController.actualizarUsuario)

//Obtener usuario
router.get('/:id', usuarioController.obtenerUsuario)
//Eliminar un usuario
router.delete('/:id', usuarioController.eliminarUsuario)
//login
router.post('/', usuarioController.loginUsuario)

//estado avtivo o inactivo
router.put('/:id', usuarioController.changeUserStatus)
// router.put('/usuarios/:id', usuarioController.changeUserStatus)

module.exports = router

