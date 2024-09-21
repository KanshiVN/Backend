const fs = require('fs');

// fs.appendFile("newfile.txt"," Hello",function(){
//     if(err) console.log(err)
//     else console.log("appended")
// })

// // fs.rename("abcd.txt","newfile.txt",function(err){
// //     if(err) console.log(err)
// //     else console.log(Renamed)
// // })

// fs.unlink("newfile.txt",function(err){
//     if(err)console.log('err')
//     else console.log("deleted")
// })

fs.mkdir("newFD",function(err){
    if(err) console.log(err)
})

fs.readdir("newFD",function(err,files){
    if(err) console.log(err)
    else console.log(files)
})