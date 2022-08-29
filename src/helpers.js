/** choose a random item from an array of items */

function choice(items){
  //math random out of length of array
  let i = Math.floor(Math.random()*items.length);
  //return item at index
  return items[i];
}

/** given an input array and an item, removes first occurence of the
 * input item from the array and returns the removed item.
 * 
 * If input item is not found in array, returns undefined.
*/

function remove(items, item){
  let removeIdx = items.indexOf(item);
  
  if(removeIdx === -1) return undefined;
  
  return items.splice(removeIdx, 1);
  // [...items.slice(0, removeIdx), ...items.slice(removeIdx+1)]
}

export {choice, remove};