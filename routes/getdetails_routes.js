const express = require('express');
const router = express.Router();

var authorization = require('../middleware/middleware');


const getDetailController = require('../controller/getUserDetailsController');
const getDetailByUserIdController = require('../controller/getUserDetailByIdController');
const saveDetailController = require('../controller/saveUserDetailsController');
const updateDetailController = require('../controller/updateUserDetailController');
const deleteDetailController = require('../controller/deleteUserDetailsController')





router.post('/get-user-detail',getDetailController.getUserDetail);
router.post('/get-user-detail-by-userID', authorization.getUserAuthorization, getDetailByUserIdController.getUserDetail);
router.post('/save-user-detail', authorization.checkEmail,saveDetailController.saveUserDetail);

router.post('/update-user-detail', authorization.getUserAuthorization, updateDetailController.updateUserDetail);
router.post('/delete-user-detail', authorization.getUserAuthorization, deleteDetailController.deleteUserDetail);

module.exports = router;