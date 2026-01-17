const cloudinary = require('../utils/cloudinary');
const Image = require('../models/image.model');

/* -------------------- UPLOAD IMAGE (ADMIN) -------------------- */
exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image file provided' });
    }

    const {
      caption = '',
      takenAt,
      section,
      order = 0,
      isDraft = false,
    } = req.body;

    if (!section) {
      return res.status(400).json({
        message: 'Image section is required',
      });
    }

    // ✅ AUTO-DETERMINE SURPRISE FLAG
    // If section === 'surprise', it IS a surprise image. No ambiguity.
    const isSurprise = section === 'surprise';

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`,
      {
        folder: 'romantic-album',
        resource_type: 'image',
      }
    );

    // Save to MongoDB
    const image = await Image.create({
      url: result.secure_url,
      publicId: result.public_id,
      caption,
      section,
      takenAt,
      order,
      isDraft,
      isSurprise, // ✅ ALWAYS CORRECT NOW
    });

    res.status(201).json({
      success: true,
      image,
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({
      success: false,
      message: 'Image upload failed',
    });
  }
};

/* -------------------- GET IMAGES (PUBLIC + ADMIN) -------------------- */
exports.getImages = async (req, res) => {
  try {
    const { section, surprise } = req.query;

    const filter = {};

    if (section) filter.section = section;
    if (surprise === 'true') filter.isSurprise = true;
    if (surprise === 'false') filter.isSurprise = false;

    const images = await Image.find(filter).sort({
      order: 1,
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: images.length,
      images,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch images',
    });
  }
};

/* -------------------- DELETE IMAGE (ADMIN) -------------------- */
exports.deleteImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    await cloudinary.uploader.destroy(image.publicId);
    await image.deleteOne();

    res.json({
      success: true,
      message: 'Image deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete image',
    });
  }
};
