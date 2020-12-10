const authors = require('../models/authors')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const getAllAuthors = (req, res) => {
    console.log(req.url)
    authors.find(function(err, authors){
        if (err) {
            res.status(500).send({ message: err.message})
        } else {
            res.status(200).send(authors) 
        }  
    })
}

const createPassword = (req, res) => {
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

const getAuthorsByName = (req, res) => {
    const parametros = req.query
    authors.find(parametros, function (err, authors) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(authors)
        }
    })
}

const getAuthorsByCitation = (req, res) => {
    const parametros = req.query
    authors.find(parametros, function (err, authors) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(authors)
        }
    })
}

const updateAuthor = (req, res) => {
    const id = req.params.id
    authors.updateMany({ id }, { $set : req.body}, { upsert : true }, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message: "Author updated succesfuly!"})
      }
    })
}

const updateAuthorName = (req, res) => {
    const name = req.params.name
    authors.update({ name }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message: "Name updated succesfuly!"})
        }
    })
}

const updateAuthorCitation = (req, res) => {
    const citation = req.params.citation
    authors.update({ citation }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
             res.status(200).send({ message: "Citation name updated succesfuly!"})
        }
    })
}

const updateAuthorAffiliation = (req, res) => {
    const currentAffiliation = req.params.currentAffiliation
    authors.update({ currentAffiliation }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message: "Current affiliation updated succesfuly!"})
        }
    })
}

const updateAuthorAreas = (req, res) => {
    const areas = req.params.areas
    authors.update({ areas }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message: "Areas of interest updated succesfuly!"})
        }
    })
}

const updateAuthorProject = (req, res) => {
    const currentProject = req.params.currentProject
    authors.update({ currentProject }, { $set : req.body}, function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message: "Current project updated succesfuly!"})
        }
    })
}

const updateFollowingStatus = (req, res) => {
    const following = req.params.following
    authors.update({ following }, { $set : req.body}, function (err) {
      if (err) {
          res.status(500).send({ message: err.message })
      } else {
          res.status(200).send({ message: "Following status updated succesfuly!"})
      }
    })
}

const deleteAuthor = (req, res) => {
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
    getAllAuthors,
    createPassword,
    login,
    getAuthorsByName,
    getAuthorsByCitation,
    updateAuthor,
    updateAuthorName,
    updateAuthorCitation,
    updateAuthorAffiliation,
    updateAuthorAreas,
    updateAuthorProject,
    updateFollowingStatus,
    deleteAuthor
}