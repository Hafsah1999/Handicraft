const express = require("express");
const router = express.Router();
const Model = require("../Models/productModel");

router.post("/add", (req, res) => {
  console.log(req.body);
  //Storing data to MongoDb
  new Model(req.body).save() //to add the data in database
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
});
router.post("/delete", (req, res) => {
  res.send("Data deleted");
});
router.post("/update", (req, res) => {
  res.send("updated data");
});

router.get('/getbycategory/:category', async (req, res) => {
  const { category } = req.params; // Get the category from the request parameters

  try {
    // Fetch products that match the category
    const products = await Model.find({ category }); // Adjust the query if needed (e.g., case sensitivity)

    // Check if products were found
    if (products.length > 0) {
      return res.status(200).json(products);
    } else {
      return res.status(404).json({ message: 'No products found in this category.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});

router.get("/getall", (req, res) => {
  Model.find({}) //empty brackets will give all the data from the database
  .then((result) => {
    res.json(result)
  }).catch((err) => {
    console.error(err)
    res.status(500).json(err)
  });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id) //param is for parameter
  .then((result) => {
    res.json(result)
  }).catch((err) => {
    console.error(err)
    res.status(500).json(err)
  });
});


router.get("/getbyemail/:email", (req,res) => {
  console.log(req.params.email)
  Model.find({ email: req.params.email })
  .then((result) => {
    res.json(result)
  }).catch((err) => {
    console.error(err)
    res.status(500).json(err)
   });
});

router.delete("/delete/:id", (req,res) => {
  Model.findByIdAndDelete(req.params.id)
  .then((result) => {
    res.json(result)
    
  }).catch((err) => {
    console.error(err)
    res.status(500).json(err)
    
  });
})

router.put("/update/:id", (req,res) => {
Model.findByIdAndUpdate(req.params.id, req.body,{new:true})             //new:true is for data update
.then((result) => {
  res.json(result)
}).catch((err) => {
  console.error(err)
  res.status(500).json(err)
});
})

module.exports = router;