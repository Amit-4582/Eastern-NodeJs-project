const express = require("express");
const { createSupplier, getAllSuppliers, getSupplierById, updateSupplier, deleteSupplier } = require("../controllers/supplierControllers");
const { verifyToken, checkRole } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post('/create_supplier', verifyToken, checkRole(['Admin']), createSupplier);
router.get("/get_all_suppliers", verifyToken, checkRole(['Admin', 'Customer', 'Agent']), getAllSuppliers);
router.get("/get_supplier_by_id/:id", verifyToken, checkRole(['Admin', 'Customer', 'Agent']), getSupplierById);
router.put("/update_supplier/:id", verifyToken, checkRole(['Admin']), updateSupplier);
router.delete("/delete_supplier/:id", verifyToken, checkRole(['Admin']), deleteSupplier);

module.exports = router;
