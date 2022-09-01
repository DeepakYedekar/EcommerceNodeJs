const express = require('express')
const routes = express.Router()
const { signUp,signIn } = require('../controller/auth')
const {checkDuplicateUsernameAndEmail, checkRoles} = require('../middleware')

routes.post('/ecom/api/auth/signup',[checkDuplicateUsernameAndEmail, checkRoles],
signUp)

routes.post('/ecom/api/auth/signin',signIn)

module.exports = {authRoutes : routes}