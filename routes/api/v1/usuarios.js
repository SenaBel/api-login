const router = require("express").Router();
const auth = require("../../auth");
const UsuarioController = require("../../../controllers/UsuarioController");

const usuarioController = new UsuarioController();

// ENVIANDO DADOS PARA O SERVIDOR
router.post("/login", usuarioController.login); //Testado
router.post("/registrar",  usuarioController.store); //Testado
router.put("/", auth.required, usuarioController.update); //Testado
router.delete("/", auth.required, usuarioController.remove); // Testado

// RECUPERAR SENHA
router.get("/recuperar-senha", usuarioController.showRecovery); 
router.post("/recuperar-senha", usuarioController.createRecovery); 
router.get("/senha-recuperada", usuarioController.showCompleteRecovery); 
router.post("/senha-recuperada", usuarioController.completeRecovery); 

router.get("/", auth.required, usuarioController.index); 
router.get("/:id", auth.required, usuarioController.show);

module.exports = router;