async function homePage(req, res) {
    res.setHeader("Content-Type", "text/plain");
    return res.send(`We have four functions here!\n\n
1. We will show USER1, USER2, and USER3 on /users\n
2. We will show info of each user on /user/:id`);
}

module.exports = {homePage};