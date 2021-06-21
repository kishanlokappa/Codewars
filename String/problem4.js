/*

Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

Python: return a list;
JavaScript: returns an Array;
C#: returns a string[];
PHP: returns an array;
C++: returns a vector<string>;
Haskell: returns a [String];
Ruby: returns an Array;
Lua: returns a Table;
Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]


*/
console.log(towerBuilder(3));

function towerBuilder(nFloors) {
    let sum = 0
    let res = [];
  
    if(nFloors == 1){
        res.push('*');
        return res;
    }else{

        let j = 1;
        for(let i = 0;i < nFloors;i++){
            console.log(j)
            j = j+2;
        }

    }
    
}