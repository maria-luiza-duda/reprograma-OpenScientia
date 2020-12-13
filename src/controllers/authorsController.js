const authors = require('../models/authors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const getallauthors = (req, res) => {
    authors.find(function(err, authors){
        if (err) {
            res.status(500).send({ message: err.message})
        } else {
            res.status(200).send(authors) 
        }  
    })
}

const createauthor = (req, res) => {
    let author = new author(req.body);
    author.save(function(err){
        if (err) {
            res.status(500).send({ message: err.message})
        } else {
            res.status(201).send({message : "Author succesfull added"})
        }  
    })
}

const createpassword = (req, res) => {
    const password = bcrypt.hashSync(req.body.password, 10);
  req.body.password = password;
  const author = new authors(req.body);
  author.save(function(err) {
    if (err) {
      res.status(500).send({ message: err.message })
    } else {
      res.status(201).send(author.toJSON())  
    }
  })
}

const login = (req, res) => {
    authors.findOne({ email: req.body.email }, function(error, author) {
      if (!author) {
        return res.status(404).send(`There is no author with this email ${req.body.email}`);
      }
  
      const rightPassword = bcrypt.compareSync(req.body.password, author.password);
  
      if (!rightPassword) {
        return res.status(403).send('Incorrect password!');
      }
  
      const token = jwt.sign({ email: req.body.email }, SECRET);
  
      return res.status(200).send(token);
    });
  }

const getbyname = (req, res) => {
    const parametros = req.query
    authors.find(parametros, function (err, authors) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(authors)
        }
    })
}

const getbycitation = (req, res) => {
    const parametros = req.query
    authors.find(parametros, function (err, authors) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(authors)
        }
    })
}

const updateauthor = (req, res) => {
    const id = req.params.id
    authors.updateMany({ id }, { $set : req.body}, { upsert : true }, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message: "Author updated succesfuly!"})
      }
    })
}

const updatefollowingstatus = (req, res) => {
    const following = req.params.following
    authors.update({ following }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message: "Following status updated succesfuly!"})
      }
    })
}

const deleteauthor = (req, res) => {
    const id = req.params.id
        authors.find({ id }, function(err, author){
        if(author.length > 0){
            authors.deleteOne({ id }, function(err){
                if (err) {
                    res.status(500).send({ 
                    message: err.message,
                    status: "Fail"
                    })
                }
                res.status(200).send({ 
                    message: 'Author profile deleted succesful!',
                    status: "Succesful"
                })
            })  
        } else {  
            res.status(200).send({
                message: 'Author not found to be deleted',
                status: "Empty"
            })
        }
    
    })
}

module.exports = {
    getallauthors,
    createauthor,
    createpassword,
    login,
    getbyname,
    getbycitation,
    updateauthor,
    updatefollowingstatus,
    deleteauthor
}