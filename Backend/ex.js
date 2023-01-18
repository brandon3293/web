const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Hello user');
});

const courses = [
    {id:1, name:'web dev'},
    {id:2, name:'IT'},
    {id:3, name:'cyberSecurity'}

];

app.get('/api/courses',(req,res)=>{
    res.send(courses);
});

app.get('/api/courses/:id',(req,res)=>{
    const course=courses.find(c=> c.id ===parseInt(req.params.id));
    if(!course){
        res.status(404).send("The course with the given ID was not found");
        return
    }
    res.send(course);
})
app.listen(500,()=>{
    console.log('listening on por 500 ...');
});
