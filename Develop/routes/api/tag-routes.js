const router = require('express').Router();
const { Tag, Product, Category, ProductTag } = require('../../models');

  // find all tags
  // be sure to include its associated Product data
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: {
          model: Product, 
          attributes: {
            include: ['product_name', 'price', 'stock', 'category_id'],
          },
        },
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: {
          model: Product, 
          attributes: {
            include: ['product_name', 'price', 'stock', 'category_id'],
          },
        }
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that ID'});
      return;
    } 
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err)
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tagData = await Tag.create({
      where: {
        tag_name: req.body.tag_name,
      },
    });
    res.status(200).json(tagData);
  } catch {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.params.id, {
      where: {
        tag_name: req.body.tag_name,
      },
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id'});
      return;
    }
    res.status(200).json(tagData);
  } catch {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id'});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  
  // delete on tag by its `id` value


module.exports = router;
