// const express = require('express');
// const router = express.Router();

// const upload = require('../middleware/upload.middleware');
// const {
//   uploadImage,
//   getImages,
//   getSurpriseGallery,
//   getTimeline
// } = require('../controllers/image.controller');

// /* -------------------- UPLOAD -------------------- */
// router.post('/upload', upload.single('image'), uploadImage);

// /* -------------------- READ -------------------- */
// router.get('/gallery', getImages);
// router.get('/surprise', getSurpriseGallery);
// router.get('/timeline', getTimeline);

// module.exports = router;




const express = require('express');
const router = express.Router();

const upload = require('../middleware/upload.middleware');
const auth = require('../middleware/auth.middleware');

const {
  uploadImage,
  getImages,
  deleteImage,
} = require('../controllers/image.controller');

/* -------------------- PUBLIC -------------------- */
// Examples:
// GET /api/images?section=gallery
// GET /api/images?section=timeline
// GET /api/images?section=footer
// GET /api/images?section=gallery&surprise=false
// GET /api/images?section=surprise&surprise=true
router.get('/', getImages);

/* -------------------- ADMIN -------------------- */
router.post('/', auth, upload.single('image'), uploadImage);
router.delete('/:id', auth, deleteImage);

module.exports = router;
