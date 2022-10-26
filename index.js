const express = require('express')
const cors = require('cors');
const app = express()
const port =process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const courses = require('./data/courses.json');


app.get('/courses',(req,res)=>{
res.send(courses);
});



app.get('/courses/:id', async(req, res) =>{
  const id = req.params.id;
  const course =  courses.find(c=> c.id ===id);
  res.send(course);
});


app.get('/', (req, res) => {
  res.send('Learning Website')
})

app.listen(port, () => {
  console.log(`Learning Website listening on port ${port}`)
})