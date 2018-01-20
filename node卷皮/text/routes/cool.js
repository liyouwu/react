var express = require('express');
var router = express.Router();

var User = require('../module/user.js')
var Detail = require('../module/detail.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cool', { title: 'cool' });
});

router.post('/register', function(req, res, next) {
	User.find({email:req.body.email},function(error,info){
		if(info.length==0){
			User.create({
				username:req.body.username,
				password:req.body.password,
				email:req.body.email},function(error,info){
				if(!error){
					console.log(info)
					res.send({result:true,message:"注册成功"})
				}
			})
		}
		else{
			res.send({result:false,message:"用户名已存在"})
		}
	})
});


router.post('/login',function(req,res,next){
	console.log(33333)
	console.log(req.body.email)
	console.log(req.body.password)
	User.find({
		//username:req.body.username,
		email:req.body.email,
		password:req.body.password
	},function(error,info){
		console.log(info)
		if(info.length==0){
			console.log(4444)
			res.send({result:false,message:"登录失败"})
		}
		else{
			console.log(55555)
			res.send({result:true,message:"登录成功"})
			console.log(error);
		}
	})
});


router.post('/detail',function(req,res,next){
	Detail.create({
				title:req.body.title,
				img:req.body.img,
				pirce:req.body.pirce,
				count:req.body.count
			},function(error,info){
				if(!error){
					console.log(info)
					res.send({result:true,message:"传送成功"})
				}
			})
})

router.post('/shop',function(req,res,next){

	console.log("进入shop")
		Detail.find({
			
	},function(error,info){
		res.send({result:true,message:info})
	})
	})

router.post('/remove',function(req,res,next){
		console.log(req.body.id)
	Detail.findByIdAndRemove(req.body.id,function(error,info){
		res.send({result:true})
	})
})






module.exports = router;
