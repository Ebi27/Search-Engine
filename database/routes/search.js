





//create search
app.post("/searchdb", async(req, res) => {
  try {
const{ title } = req.body;
const newSearch = await client.query( 
  "INSERT INTO searchdb (title) VALUES ($1) RETURNING *", [title]
  );
  res.json(newSearch.rows[0]);
} catch(err){
    console.log(err.message);
  }
});






// const searchKey = "403f36c6d6dd8458e";
// const searchBaseUrl = "https://cse.google.com/cse";
// const searchBtnn = document.getElementById("searchBtn");
// class Result(db.Model):
//     id = db.Column(db.Integer, primary_key=True)
//     title = db.Column(db.String(20))
//     description = db.Column(db.String(100))
//     snippet=db.Column(db.String(500))
//     url= db.Column(db.String(100));

// module.exports = {
//   searchKey,
//   searchBaseUrl,
//   searchBtnn,
// };