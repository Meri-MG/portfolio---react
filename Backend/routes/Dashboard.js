const express = require("express");
const Router = express.Router();
const Article = require("../model/Article");
const cors = require("cors");
const bodyParser = require("body-parser");



const app = express();

app.use(bodyParser.json());
app.use(express.json())
app.use(cors());





Router.get("/", async(req, res) => {
    try {
        const articles = await Article.find();


        res.json({ articles });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



Router.get('/article/:id', async(req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) {
            return res.status(404).json({ message: 'Article non trouvé' });
        }
        res.json({ article });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});


Router.post("/addArticle", async(req, res) => {
    const { titre, content } = req.body;
    console.log("titre : ", titre);
    console.log("content : ", content);

    const existingArticle = await Article.findOne({ titre });
    if (existingArticle) {
        return res.status(400).json({ message: 'Ce titre est déjà utilisé.' });
    }
    const newArticle = new Article({ titre, content });
    const savedArticle = await newArticle.save();
    res.json({ savedArticle });

});


Router.patch("/editArticle/:id", async(req, res) => {
    const { id } = req.params;
    const { titre, content } = req.body;

    try {
        const updatedArticle = await Article.findByIdAndUpdate(
            id, { titre, content }, { new: true }
        );
        if (!updatedArticle) {
            return res.status(404).json({ message: "Article not Trouvé" });
        }
        res.status(200).json({ updatedArticle });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating article" });
    }
});


Router.delete("/deleteArticle/:id", async(req, res) => {
    const id = req.params.id;

    try {
        const deletedArticle = await Article.findByIdAndDelete(id);
        console.log('Article deleted');
        res.status(200).json({ message: 'Article deleted', deletedArticle });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error deleting article' });
    }
});







module.exports = Router;