const mongoose= require('mongoose')
const userSchema=mongoose.Schema({
    email:String,
    pass:String,
    username:String,

},{
    versionKey:false}
    )
    const UserModel=mongoose.model('User',userSchema)


    const blogPostSchema=mongoose.Schema({
        content:String,
        title:String,
        content:String,
        likes:Number,
        date : String,
        category:String,
        comments:[{ username: String, content: String }]
    },{
        versionKey:false}
        )
        const BlogPostModel=mongoose.model('Blogs',blogPostSchema)
        module.exports={
            UserModel,BlogPostModel
        }