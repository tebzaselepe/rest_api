exports.getPosts = (req,res,next) => {
    // send response in json format
    res.status(200).json({
        posts: [{
            title: 'First Post',
            content: 'This is the first post!'
        }]
    });
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    
    // insert post in DB
    res.status(201).json({
        message: 'Post successfully created',
        post: { id: new Date().toISOString(),
                title: title,
                content: content
            }
    });
};