function justInvoke(fn) {
return fn();
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
}

<<<<<<< HEAD
function setThisWithApply(fn, thisValue, arg) {
  return fn.apply(thisValue, arg)
=======
function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, [arg])
>>>>>>> 230def3c5f1ac6f2e7de886eabeec88b9533a3a3
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  const newFunction = functionToBeCopied.bind(thisValue)
  return newFunction
<<<<<<< HEAD
}
=======
}
>>>>>>> 230def3c5f1ac6f2e7de886eabeec88b9533a3a3
