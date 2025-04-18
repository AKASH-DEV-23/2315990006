import express from "express";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
