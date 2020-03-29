var stringifiableObjects = [
    9,
    null,
    true,
    false,
    "Hello world",
    [],
    [8],
    ["hi"],
    [8, "hi"],
    [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
    [8, [[],3,4]],
    [[[["foo"]]]],
    {},
    {"a": "apple"},
    {"foo": true, "bar": false, "baz": null},
    {"boolean, true": true, "boolean, false": false, "null": null },
    // basic nesting
    {"a":{"b":"c"}},
    {"a":["b", "c"]},
    [{"a":"b"}, {"c":"d"}],
    {"a":[],"c": {}, "b": true}
  ];

console.log(stringifiableObjects.length);

/*          Array.prototype.join()
  * join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.
  * syntax : arr.join([separator])
  * separator(Optional) : separator가 빈 문자열이면 모든 요소들이 사이에 아무 문자도 없이 연결됩니다.
*/

/*
function getString (obj) {
    let doubleQuotes = "\"";
    let leftBracket = "[";
    let rightBracket = "]";
    let answer = [];
    let result;
    if (typeof obj === 'string') {
        answer.push(obj);
    }
    console.log(answer);
    return leftBracket + doubleQuotes + answer.join() + doubleQuotes + rightBracket; // .join() : 배열 안의 요소들만 모아서 문자열로 만드는거고, 
                                                        // [] 대괄호는 문자열로 만들지 않음
}

console.log(getString('obj'));
*/

// 배열부터 하자

function getString (obj) {
    let doubleQuotes = "\"";
    let leftBracket = "[";
    let rightBracket = "]";
    let answer = [];

    function fl (arr) {
        answer.push(arr);
        return leftBracket + answer.join() + rightBracket;
    }

    if (Array.isArray(obj)) {
        let check = [];
        check.push(leftBracket);
        for (let i=0; i<obj.length; i++) {
            check.push(getString(obj[i]));
        }
        check.push(rightBracket);
        return fl(check);
    } 
    //else if (typeof obj === 'string') {
    //    let check = [];
        
    //}
       

    //console.log(answer);
    //return leftBracket + answer.join() + rightBracket; // .join() : 배열 안의 요소들만 모아서 문자열로 만드는거고, 
                                                        // [] 대괄호는 문자열로 만들지 않음
}

let arr = [ [] , [] , [] ];
let arr1 = [ ['a'] , ['b'] , ['c'] ];
let arr2 = [  [  [], [] ] , [ [ [], [] ] ] , [] ];

getString(arr);
JSON.stringify(arr);