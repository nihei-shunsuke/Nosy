const express = require('express');
const router = express.Router();

router.post('/plan', (req, res) => {
    // プランを作成する処理をかく
    const plan = req.body.plan;

    // plan変数をdbにcreateする
})

router.get('/plan', (req, res) => {
    // プランの情報を取得する処理を書く
    res.send('plan get')
})

router.put('/plan', (req, res) => {
    // プランの更新処理を書く
    
})

router.delete('/plan', (req, res) => {
    // プランの削除処理をかく
})

module.exports = router