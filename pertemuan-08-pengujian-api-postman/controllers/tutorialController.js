const Tutorial = require('../models/Tutorial');

// GET /tutorials
// Mengambil seluruh data tutorial dengan fitur lanjutan
exports.getAllTutorials = async (req, res, next) => {
  try {
    // 1. FILTERING
    const queryObj = { ...req.query };
    const excludedFields = ['page', 'sort', 'limit', 'fields'];

    excludedFields.forEach((field) => delete queryObj[field]);

    let query = Tutorial.find(queryObj);

    // 2. SORTING
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    } else {
      query = query.sort('-createdAt');
    }

    // 3. PROJECTION
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields);
    } else {
      query = query.select('-__v');
    }

    // 4. PAGINATION
    const page = Math.max(
      1,
      parseInt(req.query.page, 10) || 1
    );

    let limit = parseInt(req.query.limit, 10) || 10;
    const MAX_LIMIT = 50;

    limit = Math.min(MAX_LIMIT, Math.max(1, limit));

    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);

    // Mengambil data dan menghitung total dokumen
    const [tutorials, totalData] = await Promise.all([
      query,
      Tutorial.countDocuments(queryObj),
    ]);

    const totalPages = Math.ceil(totalData / limit);

    // RESPONSE JSON
    res.status(200).json({
      status: 'success',
      results: tutorials.length,
      pagination: {
        totalData,
        totalPages,
        currentPage: page,
        limit,
      },
      data: tutorials,
    });
  } catch (err) {
    next(err);
  }
};

// POST /tutorials
// Menambahkan tutorial baru
exports.createTutorial = async (req, res, next) => {
  try {
    const newTutorial = await Tutorial.create(req.body);

    res.status(201).json({
      status: 'success',
      data: newTutorial,
    });
  } catch (err) {
    next(err);
  }
};
