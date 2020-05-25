const uArticle = [{ id:0, name: 'Article 1', image: 'image'}]

let id = 1

module.exports = {
    getSearchedArticle: (req, res) => {},
    postSearchedArticle: (req, res) = {},
    saveArticle: (req, res) => {},
    deleteArticle: (req, res) => {},
}


//Need to create an index array,  storing/containing the different saved components (the articles), the users selected. Have to be able to perform full CRUD:
//  - get: return userArticles from the custom search engine
//  - post: saved desired article to user directory
//  - put:  replace older article directory with new directory containing additional file 
//  - delete: delete any unwanted saved articles in directory