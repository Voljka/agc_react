// function liftToList(transformer) {
//   return function (input) {
//     var data = (input instanceof Array) ? input : [input];
//     var result = [].map.call(transformer, data);
    
//     return  (input instanceof Array) ? result : result[0];
//   };
// }

// var polymorphicTransformer = liftToList(transformer);

// function transformer(data) {
// 	return {
// 		id: data.group_id,
// 		name: group_name
// 	}
// }

var polymorphicTransformer = function(transformer, input){

  var data = (input instanceof Array) ? input : [input];
  var result = [].map.call(data, transformer);

  return  (input instanceof Array) ? result : result[0];
}

module.exports = polymorphicTransformer;