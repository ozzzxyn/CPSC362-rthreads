const express = require("express");
const path = require("path");
const cors = require("cors");
const admin = require('firebase-admin');

// Initialize Firebase Admin
const serviceAccount = require('./cpsc362-rthreads-firebase-adminsdk-fbsvc-ca19b9ddda.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore(); // Firestore database reference

const app = express();
app.use(cors());
app.use(express.json());
app.use("/image", express.static(path.join(__dirname, "public/image")));
app.use(express.static(path.join(__dirname, "public"))); // to serve admin.html

// Return the admin page
app.get("/products", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

// Serve the GUI on /admin instead of /products
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Get all products (needed for shop and admin pages)
// Get all products or filter by category
app.get("/api/products", async (req, res) => {
  try {
    const { category } = req.query;

    const { name } = req.query;
    let snapshot;

    if (category) {
      snapshot = await db.collection('products').where('cat', '==', category).get();
    } else {
      snapshot = await db.collection('products').get();
    }

    if (name) {
      snapshot = await db.collection('products').where('Name', '==', name).get();
    } else {
      snapshot = await db.collection('products').get();
    }

    const products = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(products);
  } catch (error) {
    console.error("Error getting products:", error);
    res.status(500).json({ error: "Error fetching products" });
  }
});


// Add new product
app.post("/api/products", async (req, res) => {
  try {
    const newProduct = req.body;
    const docRef = await db.collection('products').add(newProduct); // Add product to Firestore
    newProduct.id = docRef.id;  // Firebase Firestore auto-generates an ID
    res.status(201).json({ id: docRef.id, ...newProduct });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ error: "Error adding product" });
  }
});

// Update a product
app.put("/api/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const productData = req.body;
    const productRef = db.collection('products').doc(id); // Reference to the product in Firestore
    const doc = await productRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Product not found" });
    }

    await productRef.update(productData);  // Update product in Firestore
    res.json({ id, ...productData });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Error updating product" });
  }
});

// Delete a product
app.delete("/api/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const productRef = db.collection('products').doc(id);
    const doc = await productRef.get();

    if (!doc.exists) {
      return res.status(404).json({ error: "Product not found" });
    }

    await productRef.delete();  // Delete product from Firestore
    res.json({ id, message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ error: "Error deleting product" });
  }
});

app.get("/shop", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "shop.html"));
});

const PORT = 5000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/admin`);
  });
}

module.exports = app;
