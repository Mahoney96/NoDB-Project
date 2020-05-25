const express = require('express')
const app = express()

const profileCtrl = require('./controllers/profileInfoController')
const searchCtrl = require('./controllers/articleSearchController')
const articleCtrl = require('./controllers/userArticlesSavedController')

const SERVER_PORT = 6039

app.use(express.json())



// Article Search Endpoints
app.get('/api/Google-Custom-search', articleCtrl.getSearchedArticle)
app.post('/api/Google-Custom-search', articleCtrl.displayArticle )

app.post('/api/Google-Custom-search', articleCtrl.displayArticle )

app.delete('/api/Google-Custom-search', articleCtrl.deleteArticle )

// User articles saved Endpoints

app.get('/api/', searchCtrl.findRelevantArticle )
app.post('/api/profileCrtl')

// Profile info Endpoints
app.get('api/userProfileInfo')
app.get('api/articleCtrl.uArticle.[]')




app.listen(SERVER_PORT, () => console.log(`Getting past Venting ${SERVER_PORT}`))
