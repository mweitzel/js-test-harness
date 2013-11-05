;
(function(){

  assert = function(truthy, message){
    if(!truthy){
      throw messageFrom(message)
    }
  }

  assertNot = function(falsy, message){
    assert(!falsy, message)
  }

  equals = function(obj1, obj2){
    return JSON.stringify(obj1) == JSON.stringify(obj2)
  }
  
  assertEquals = function(obj1, obj2, message){
    assert(equals(obj1, obj2), message)
  }  

  it = describe = function(name, callback){
    nameStack.push(name)
    try{
      callback()
      console.log("T ~ " + name)
    }
    catch(err){
      err.name = name
      console.error("~ " + err)
    }
    delete nameStack.pop()
  }

  throws = function(callback){
    try{
      callback()
      return false
    }catch(err){
      return true
    }
  }

  var nameStack = []

  var messageFrom = __messageFrom__ = function(maybe_message){
    var message = nameStack.join("..") + ": " + maybe_message
    return message
  }
})()
