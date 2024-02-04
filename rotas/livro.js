const { Router } = require("express")
const { getLivros } = require("../controladores/livro")

const router = Router()

router.get('/', getLivros)
router.post('/', )
router.patch('/',)
router.delete('/',)

module.exports = router