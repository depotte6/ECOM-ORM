const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll();
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findbyPk(req.params.id, {
      include: [{ model: Product }],
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
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const updatedCategory = await Category.update(
    {
      id: req.body.id,
      catergory_name: req.body.category_name,
    },
    {
      where: {
        catergory_id: req.params.category_id,
      },
    }
  );
  res.json(updatedCategory)
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const deletedCategory = await Category.destroy({
    where: {
      category_id: req.params.category_id,
    },
  });
  res.json(deletedCategory);
});

module.exports = router;
