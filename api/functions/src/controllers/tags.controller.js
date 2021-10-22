const { db } = require('../config/db');

const Tags = {
    Retrieve: async (req, res) => {},

    List: async (req, res) => {
        try {
            let tags = [];

            const data = await db.collection(`tags`).where('userId', '==', req.userId).get();
            if (!data) return res.json([]);

            data.forEach(doc => {
                if (doc.exists) {
                    const tag = doc.data();
                    tag.tagId = doc.id;
                    tags.push(tag);
                }
            });

            return res.json(tags);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error });
        }
    },

    Create: async (req, res) => {
        try {
            let newTag = { ...req.body };
            
            if (!newTag.name) return res.status(400).json({ error: 'errors.tag.bad_name' });

            newTag.createdAt = new Date().toISOString();
            newTag.updatedAt = new Date().toISOString();
            newTag.userId = req.userId;

            const data = await db.collection('tags').add(newTag);
            newTag.tagId = data.id;

            return res.json({ tag: newTag });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ error });
        }
    },

    Update: async (req, res) => {},

    Delete: async (req, res) => {}
}

module.exports = Tags;