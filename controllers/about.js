const express = require('express')
const api = express.Router()

// Specify the handler for each required combination of URI and HTTP verb

// HANDLE VIEW DISPLAY REQUESTS --------------------------------------------

// GET t1
// api.get('/t3', (req, res) => {
//   console.log(`Handling GET ${req}`)
//   res.render('about/t1/index.ejs',
//         { title: 'Group 07-03', layout: 'layout.ejs' })
// })
api.get('/t3/a', (req, res) => {
  console.log(`Handling GET ${req}`)
  res.render('about/t3/a/index.ejs',
        { title: 'Ankit Prakash', layout: 'layout.ejs' })
})
api.get('/t3/b', (req, res) => {
  console.log(`Handling GET ${req}`)
  return res.render('about/t3/b/index.ejs',
        { title: 'Rohit Naini', layout: 'layout.ejs' })
})

api.get('/t3/c', (req, res) => {
    console.log(`Handling GET ${req}`)
    return res.render('about/t3/b/index.ejs',
          { title: 'Pappu Sah', layout: 'layout.ejs' })
  })


module.exports = api
