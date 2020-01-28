const express = require("express");
const router = express.Router();
const Post = require("./model/Post");
router.post("/",function(req,res){
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    })
    post.save().then((data)=>{
        res.json(data)
    }).catch((err)=>{
        res.json({message:err});
    })
    
});

router.get("/", async function(req,res){
    try{
        const getPost = await Post.find();
        res.json(getPost);
    }
    catch(err){
        res.json({message:err});
    }
});
//delete post

///deleting some of the post
router.delete("/:postId", async function(req,res){
    try{
        const deletedPost = await Post.remove();
        res.json(deletedPost)
    }
    catch(err){
        res.json({message:err})
    }
});
///update the post
router.patch("/",async function(req,res){
    try{
        const updatePost = await Post.updateOne({title:'This is my first api'},{$set:{title:"Rest API"}});
        res.json(updatePost);
    }
    catch(err){
        res.json({message:err})
    }
})
module.exports = router;