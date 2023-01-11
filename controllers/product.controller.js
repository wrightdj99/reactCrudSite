//Our main method for this whole thing (kinda)

var dbCon = require("../config/db_connection");

//It all comes down to this!
var connection = dbCon.getConnection();

connection.connect();

var express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
var cors = require('cors');

var router = express.Router();
router.use(cors());

//Dump
router.get("/", (req, res)=> {
    connection.query("select * from product", (err, records, fields)=>{
        if(err){
            console.error("Error while getting data");
        }
        else{
            res.send(records);
        }
    })
})

//Get
router.get("/:id",(req, res) => {
    //Down here you can type in whatever SQL query you want.
    connection.query("select * from product where id="+req.params.id, (err,records,fields)=> {
        if(err){
            console.error("Error while getting data");
        }
        else{
            res.send(records);
            console.log(records);
        }
    })
})

//Post is modified a bit to accept an id
router.post("/",(req, res) => {
    var id = req.body.id;
    var name = req.body.name;
    var price = req.body.price;
    //Down here you can type in whatever SQL query you want.
    connection.query("insert into product values("+id+",'" +name +"',"+price+")", (err,records)=> {
        if(err){
            console.error("Error while posting data" + err);
        }
        else{
            res.send({insert:"success"});
        }
    })
})

//Put is modified a bit more still
router.put("/",(req, res) => {
    var id = req.body.id;
    var name = req.body.name;
    var price = req.body.price;
    //Down here you can type in whatever SQL query you want.
    connection.query("update product set name='" + name + "',price="+price+" where id="+id, (err,records)=> {
        if(err){
            console.error("Error while updating data" + err);
        }
        else{
            res.send({insert:"success"});
        }
    })
})

//Delete finally
router.delete("/:id",(req, res) => {
    //Down here you can type in whatever SQL query you want.
    connection.query("delete from product where id="+req.params.id, (err,records)=> {
        if(err){
            console.error("Error while deleting data" + err);
        }
        else{
            res.send({delete: "success"});
        }
    })
})



module.exports = router;