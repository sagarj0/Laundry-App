const Customer = require('../Model/Customer');

const registerItem = async (req, res) => {
  try {
    const order = req.body;

    const existingOrder = await Customer.findOne({
      name: order.name,
      phone: order.phone,
      email: order.email,
      address: order.address,
    });

    if (existingOrder) {
      return res.status(400).json({
        status: 'fail',
        message: 'Order already exists',
      });
    }

    console.log('...creating order...');
    const savedOrder = await Customer.create({
      name: order.name,
      phone: order.phone,
      email: order.email,
      address: order.address,
      // order: {
      //   items: order.items,
      //   cost: order.cost,
      //   completion_date: order.completion_date,
      // },
    });
    console.log('...order created...');
    res.status(201).json({
      status: 'success',
      data: { savedOrder },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: `Error creating order: ${error.message}`,
    });
  }
};

module.exports = registerItem;
