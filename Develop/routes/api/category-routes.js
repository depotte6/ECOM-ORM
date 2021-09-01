const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [
        {
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id'],
        },
      ],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findbyPk(req.params.id, {
      include: [
        { 
          model: Product,
          attributes: ['id', 'product_name', 'price', 'stock', 'category_id'], 
        },
        {
          where: {
            id: req.params.id,
          }
        }
      ],
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No Category found with that ID!'});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create({
        include: {
          category_name: req.body.category_name
        }
      });
      res.status(200).json(categoryData);
      } catch (err) {
        res.status(400).json(err);
      }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const updatedCategory = await Category.update(req.params.id, {
    include: {
      id: req.body.id,
      category_name: req.body.category_name,
    },
    where: {
        id: req.params.id,
      },
    },
  );
  res.json(updatedCategory)
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
  const deletedCategory = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });
  then(res.json(deletedCategory));
} catch (err) {
  res.status(400).json(err);
}
});

module.exports = router;
