import LinkModel from "../models/LinkModel.js";

const LinksController = {
  getAllLinks: async (req, res) => {
    try {
      const links = await LinkModel.find();
      res.json(links);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  addLink: async (req, res) => {
    try {
      const newLink = new LinkModel(req.body);
      const savedLink = await newLink.save();
      res.json(savedLink);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateLink: async (req, res) => {
    try {
      const updatedLink = await LinkModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedLink);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteLink: async (req, res) => {
    try {
      const deletedLink = await LinkModel.findByIdAndDelete(req.params.id);
      res.json(deletedLink);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  redirect:  async (req, res) => {
    const { id } = req.params;

    try {
      const link = await LinkModel.findById(id);
      if (!link) {
        return res.status(404).send('Link not found');
      }
  
      // בדיקה עבור הפרמטר ב-query string
      const targetParamValue = req.query[link.targetParamName] || "";
  
      // עדכון הקליק במסד הנתונים
      const click = {
        insertedAt: new Date(),
        ipAddress: req.ip,
        targetParamValue: targetParamValue
      };
      link.clicks.push(click);
      await LinkModel.save();
  
      // הפניה מחדש לקישור המקורי
      res.redirect(link.originalUrl);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  },
  getClicksBySource: async (req, res) => {
    try {
      const linkId = req.params.id;
      const link = await LinkModel.findById(linkId);
      if (!link) {
        return res.status(404).send('Link not found');
      }

      const clicksBySource = await LinkModel.aggregate([
        { $match: { _id: link._id } },
        { $unwind: '$clicks' },
        { $group: { _id: '$clicks.targetParamValue', count: { $sum: 1 } } }
      ]);

      res.json(clicksBySource);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
  
};

export default LinksController;