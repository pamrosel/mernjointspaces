// Call express
const express = require('express')
// Create router to define API routes in this file
const router = express.Router()

// Import following functions from userController
const { 
    registerUser,
    loginUser,
    getUserData,
    getUsers,
    registerAdmin,
    deleteUser,
    getUser,
    updateUser,
    getAdmin,
} = require('../controllers/userController')

// Call middleware
const { protect } = require('../middleware/authMiddleware')
const { logger } = require('../middleware/loggingMiddleware')

// Create POST api route to register a user
router.post('/users', registerUser)

// Create POST api route to register an admin
router.post('/users/admin', registerAdmin)

// Create POST api route to login a user
router.post('/users/login', loginUser)

// Create GET api route display user data
router.get('/users/me', protect, logger, getUserData)

// Create GET api route display all users
router.get('/allusers', getUsers)

// Create GET api route display all admin users
router.get('/alladmin', getAdmin)

// Create GET api route display all users
router.get('/allusers/:id', getUser)

// Create DELETE api route display all users
router.delete('/allusers/:id', deleteUser)

// Create PUT api route to update a user
router.put('/allusers/:id', updateUser)

// Export the router
module.exports = router 