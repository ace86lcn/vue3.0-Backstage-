const express = require("express");
const app = express();

// 设置路由
app.get("/", (req, res) => {
    res.send("Hello, World!")
})

// 设置请求
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})