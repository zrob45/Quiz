var exercise = {};

exercise.hello = function(){
    // ----------------------------------------
    //   QUESTION 01
    //   Return a string that says "Hello!"
    // ----------------------------------------
    return 'Hello!';
};

exercise.numberArray = function(){
    // ----------------------------------------
    //   QUESTION 02
    //   Return an array of numbers
    // ----------------------------------------

    var numarray = [0,1,2,3]

    return numarray;
};

exercise.nameAndAge = function(){
    // ----------------------------------------
    //   QUESTION 03
    //   Return an object with
    //   a 'name' and 'age' property
    // ----------------------------------------

    var nameage = [
        {
            Name: "Paul McCartney",
            Age: 75
        },{
            Name: "Ringo Starr",
            Age: 70
        },{
            Name: "George Harrison",
            Age: 35
        },{
            Name: "John Lennon",
            Age: 40
        }
    ]

    return nameage;
};

exercise.objectArray = function(){
    // ----------------------------------------
    //   QUESTION 04
    //   Return an array of empty objects
    //   The array can have any length you like.
    // ----------------------------------------

    var emptyarray = new Array(5);
    return emptyarray;
};

exercise.addProperty = function(someObject){
    // ----------------------------------------
    //   QUESTION 05
    //   Add the property 'name' to someObject
    //   Give 'name' any value you like.
    // ----------------------------------------

    someObject.name = 'Barry Gibb';
    return someObject;

    return 'Error: Question 05 not implemented';
};

exercise.thirdElement = function(someArray){
    // ----------------------------------------
    //   QUESTION 06
    //   Return the third element of array
    // ----------------------------------------

    var arrayelement = [
        {
            Team: "Philadelphia Eagles"
        },{
            Team: "Dallas Cowboys"
        },{
            Team: "Washington Redskins"
        },{
            Team: "New York Giants"
        }
    ];

    return arrayelement[2].Team;
};

exercise.concatenate = function(string1, string2, string3){
    // ----------------------------------------
    //   QUESTION 07
    //   Return the concatenation of
    //   string1, string2, string3
    // ----------------------------------------

    var str = string1 + string2 + string3;
    return str;
};

exercise.greaterThanSix = function(someNumbers){
    // ----------------------------------------
    //   QUESTION 08
    //   Filter array for values greater than 6
    //   Return the filtered array
    // ----------------------------------------

    var newNumbers = [];
    var length = someNumbers.length;

    for(var i=0; i<length; i++){
        if(someNumbers[i]>6){
            newNumbers.push(someNumbers[i]);
        }
    }

    return newNumbers;
};

exercise.getNames = function(people){
    // ----------------------------------------
    //   QUESTION 09
    //   Return a new array with
    //   the "name" property values.
    //
    //   Example, for:
    //   people = [
    //         {name:'peter', age:18},
    //         {name:'bruce', age:22},
    //         {name:'clark', age:25},
    //         {name:'diana', age:29}
    //   ];
    //
    //   You should return
    //     ['peter','bruce','clark','diana']
    // ----------------------------------------

    var peoplenames = [];
    var peoplelength = people.length;

    for (var i=0; i<peoplelength;i++){
        peoplenames.push(people[i].name);
    }

    return peoplenames;
};

exercise.getSalaryTotal = function(people){
    // ----------------------------------------
    //   QUESTION 10
    //   Return the sum of all the
    //   salaries in array.
    //
    //   Example, for:
    //   people = [
    //         {name:'peter', salary:1000},
    //         {name:'bruce', salary:2000},
    //         {name:'clark', salary:3000},
    //         {name:'diana', salary:4000}
    //     ];
    //
    //   you should return
    //     10000
    // ----------------------------------------

    var salaryaccumulator = 0;
    var peoplelength = people.length;

    for (var i=0; i<peoplelength;i++){
        salaryaccumulator = salaryaccumulator + people[i].salary;
    }

    return salaryaccumulator;
};

exercise.sortNumbers = function(someNumbers,a,b){
    // ----------------------------------------
    //   QUESTION 11
    //   Sort numbers in array,
    //   return the sorted array
    //   Ascending or descenging.
    // ----------------------------------------

    return someNumbers.sort((a,b) => a - b);
};

exercise.executeCallback = function(callback){
    // ----------------------------------------
    //   QUESTION 12
    //   Execute callback
    // ----------------------------------------
    return callback();
};

exercise.getPersonAndJob = function(payroll){
    // ----------------------------------------
    //   QUESTION 13
    //   Return an array of people and jobs
    //  [['person', 'job'], ['person,job'];
    // ----------------------------------------

    var peopleandjob = [];
    var length = payroll.length;

    for (var i=0; i<length;i++){
        peopleandjob.push([payroll[i][1],payroll[i][2]]);
    }

    return peopleandjob;

    return 'Error: Question 13 not implemented';
};

exercise.getTotalPayroll = function(payroll){
    // ----------------------------------------
    //   QUESTION 14
    //   Return the total payroll
    //   as an integer, use reduce
    // ----------------------------------------

    var payrollamount = [];
    var total = 0;
    var length = payroll.length;

    for(var i=0; i<length; i++){
        payrollamount.push(payroll[i][3]);
    }

    for ( var i = 0; i < payrollamount.length; i++ ){
        total += payrollamount[i];
    }

    return total;
};

exercise.getEarningsAbove = function(payroll,target){
    // ----------------------------------------
    //   QUESTION 15
    //   Return the number of people with
    //   earnings above target
    // ----------------------------------------

    var moneymakers = [];
    var length = payroll.length;

    for(var i=0; i<length; i++){
        if(payroll[i][3]>target){
            moneymakers.push(payroll[i][3]);
        }
    }

    return moneymakers.length;

};

exercise.getNumberOfZipCodesWith = function(payroll,num){
    // ----------------------------------------
    //   QUESTION 16
    //   Return the number of zip codes
    //   with 'num' anywhere in them
    // ----------------------------------------

    var hasnum = [];
    var length = payroll.length;

    for(var i=0; i<length; i++){
        if(payroll[i][4].includes(num)){
            hasnum.push(payroll[i][4]);
        }
    }

    return hasnum.length;
};


module.exports = exercise;
