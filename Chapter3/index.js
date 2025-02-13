const app = express();

app.get('/', (req, res) => {
    return res.send("Hello From The HomePage"+" hey "+ req.query.name);

});

app.get('/about', (req, res) => {
    return res.send("Hello From About Page");
});

app.listen(8000, () => console.log("Server Started"));
