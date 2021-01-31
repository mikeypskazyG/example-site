// written by mprzekaza (function() {'use strict';
const express = require('express')
const router = express.Router()
const ProjectController= require('../controllers/ProjectController')
// this is the original:
//const ProjectController= require('../controllers/ProjectController')

router.get('/', (req, res) =>{
  const data = req.context

  const projectCtr = new ProjectController() //new
  projectCtr.get()
  .then(projects => {
    data['projects'] = projects
    //console.log('Projects: '+ JSON.stringify(projects))
    res.render('landing', data)
  })
  .catch(err=>{
    res.send('Oops! '+ err.message)
  })

})

router.get('/project/:slug', (req,res) => {
  const data = req.context
  const projectSlug = req.params.slug

  //res.send('SLUG == ' +projectSlug)
  const projectCtr = new ProjectController()
  projectCtr.get({slug:projectSlug})
  .then(projects => {
    if (projects.length ==0){
      throw new Error('Project not found')
      return
    }

    const project = projects[0]
    data['project']= project
    res.render('project', data)
  })
  .catch(err => {
    res.send('OOPS - ' +err.message)
  })
})
//This active code is a test of my router 2020-1218
router.get('/projectstatus', (req, res, next )=> {
    //res.render('home', req.context)
    res.send('this page is only a test /p Thank you.')
    //res.render('project', data)
    //res.

})
// MIKES ROUTERS TERS FROM COFFEE SHOT WEBSITE 2020-1218
/*
router.get('/', (req, res, next )=> {
    res.render('home', req.context)
})
router.get('/blog', (req, res, next) => {
    res.render('blog', req.context)
})
*/
module.exports = router
