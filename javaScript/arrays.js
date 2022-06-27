//ADDING OF AN ARRAY
let dailyActivities = ['eat', 'sleep'];

// add an element at the end
dailyActivities.push('exercise');
console.log(dailyActivities);

//add an element at the start
dailyActivities.unshift('code'); 
console.log(dailyActivities);

// this will add the new element 'exercise' at the 2 index
dailyActivities[2] = 'code';
console.log(dailyActivities);
             