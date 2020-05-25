const express = require('express')
const app = express()

const profileCtrl = require('./controllers/profileInfoController')
const searchCtrl = require('./controllers/articleSearchController')
const articleCtrl = require('./controllers/userArticlesSavedController')

const SERVER_PORT = 6039

app.use(express.json())



// Article Search Endpoints
app.get('/api/Google-Custom-search', articleCtrl.getSearchedArticle)
app.post('/api/Google-Custom-search', articleCtrl.saveArticle )
app.delete('/api/Google-Custom-search', articleCtrl.deleteArticle )

// User articles saved Endpoints

app.get('/api/', searchCtrl.findRelevantArticle )
app.post('/api/profileCrtl')

// Profile info Endpoints
app.get('api/userProfileInfo', profileCtrl.findUserInfo)
app.put('api/userProfileInfo_id', profileCtrl.editUserInfo)
app.delete('api/userProfileInfo_id', profileCtrl.deleteUserInfo)

app.put('api/articleCtrl.uArticle_id',)




app.listen(SERVER_PORT, () => console.log(`Getting past Venting ${SERVER_PORT}`))
