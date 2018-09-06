let fs = require('fs');

function main(timestamp, body, response, callback) {
  const InfoObj = {
    title:body.title,
    sideTitle:body.sideTitle,
    datetime:timestamp,
    id:new Date().getTime()+''
  };
  fs.readFile('data/artice.json',function(err, data){
    if (err) { throw err }
    let fileData = JSON.parse(data)
    if(fileData.list && fileData.list.length > 0){
      fileData.list.push(InfoObj)
    }else{
      fileData.list = [InfoObj]
    }
    fs.writeFile('data/artice.json',JSON.stringify(fileData),function(errw){
      if (errw) { throw errw }
      fs.open('data/'+InfoObj.id+'.txt','w+',function(errf, fd){
        if (errf) { throw errf }
        fs.writeFile('data/'+InfoObj.id+'.txt',body.content,function(errw){
          if (errw) { throw errw }
            fs.close(fd,function(){
              callback(true)
            })
        })
      })
    })
  })
}
exports.main = main