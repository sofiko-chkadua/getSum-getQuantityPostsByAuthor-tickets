function getQuantityPostsByAuthor (listOfPosts, name) {
  const filteredPost = listOfPosts.filter(function(item) {
     if(item['author'] === name) {
       return true;
     }
   })
   const postCount = filteredPost.length
   
   let counter = 0
   listOfPosts.forEach(function(item) {
     const comments = item['comments'] // underined, [{}, {}]
     if (comments !== undefined){
       comments.forEach(function(item2) {
          if(item2['author'] === name) {
             counter++
           } 
       })
     }
   })
   
   // 'Post:1,comments:3' 
   return `Post:${postCount},comments:${counter}`
 }
 
 // console.log(getQuntityPostsByAuthor(listOfPosts2, 'Rimus'))
 // console.log(getQuntityPostsByAuthor(listOfPosts2, 'Uncle'))
  
 // Your result should be a string like this :  'Post:1,comments:3'  ,
 // If there aren't post or comments your result will be a string like this 'Post:0,comments:0'
 
 
 
 
 // If your arguments are not strings of number your function should return false
 // If your arguments are objects,arrays,numbers or not a string that contains only numbers, your function should return false
 // If your argument is an empty string '' it should be converted into 0
 
 const getSum = (str1, str2) => {
   let newstr1 = parseInt(str1); 
   let newstr2 = parseInt(str2);
   
   if (str1 === '') {
     newstr1 = 0
   }
   
     if (str2 === '') {
     newstr2 = 0
   }
   
   
   if (typeof str1 !== 'string' || typeof str2 !== 'string') {
     return false;
   }
   
   if (isNaN(Number(str1)) ||  isNaN(Number(str2))) {
     return false;
   }
   // console.log(newstr1 + newstr2)
   return newstr1 + newstr2 + '';
 };
 
 
 // console.log(getSum({}, []))//  ->  false
 // console.log(getSum('123maxim', '3coding24'))//  ->  fasle
 // console.log(getSum('', '4444'))//  ->  '4444'
 // console.log(getSum('123', '324'))//  ->  '447'
 // console.log(getSum('111111111111111111111111111111111111111111111111111','23333333333333333333333333333333333333333333333333')) //-> '3444444.......4444444'
 
 
 
 // Number('123maxim') // NAN
 // Number('123') // NAN
 // Number('332342') // 332342
 // parseInt('332342sdfsdfsdsdfs') //332342
 
 
 const tickets=(people)=> {
   let total = {
     25: 0,
     50: 0
   } 
   for (let i = 0; i < people.length; i++) {
     // console.log(people[i])
     const bill = parseInt(people[i])
     
     if (bill === 25) {
       total['25'] +=1
       continue
     }
     
     let rest = bill - 25 // 100 =>  75.  50 => 25
     
     if(rest === 75) {
       if(total['50'] && total['25']) {
         total['50']--
         total['25']--
         continue
       }
       
       if(total['25'] >=3) {
         total['25'] -=3
         continue
       }
       
       return 'NO'
     }
     
     if(rest === 25) {
       if(total['25']) {
         total['25']--
         total['50']++
         continue;
       }
       return 'NO'
     }
   }
   return 'YES';
 };



module.exports = {getSum, getQuantityPostsByAuthor, tickets};
