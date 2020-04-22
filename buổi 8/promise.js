var p1 = new Promise(
    function(resolve,reject){
    resolve(20);
})
p1.then(
    function(value){
        console.log(value)
        return
    }
)
.catch(function(err){
    console.log(err, "err")
})