https://dmitripavlutin.com/what-every-javascript-developer-should-know-about-unicode/

next topic
https://javascript.info/object

## 'use strict'
- Add `use strict;` at the top. Strict mode can be enabled on per function basis also, by adding it at the top of a function.
- Browser consoles do not use strict mode by default. So add it to every cell and use <kbd>Shift</kbd>+<kbd>Enter</kbd> to enter the code after that.
- "classes" and "modules" use strict mode by default.

## Variable
- Names must contain only letter, digits, `$`, `_`
- First character must not be a digit

```js
let x; // typeof x == 'undefined'

let var1 = 'something',
  var2 = 'something',
  var3 = 'seomthing';

let var1 = 'something'
  , var2 = 'something'
  , var3 = 'something';

const val = 'something';

// For values known prior to execution, the convention is to use capital 
// letters with underscores
const COLOR_RED = '#FOO';
```

## Data types
8 data types

### 1. Number
- Both integer and floating point numbers.
- Stores values from $[-(2^{53}-1), 2^{53}-1]$
- `typeof x == 'number`

```js
let n = 123;

let inf = Infinity;
let minusInf = -Infinity;

let nan = NaN; // When there is a computational error, `let x = "not a number" / 2;`
```

**Convert to Number**
- Use `let v = Number(val);`. `NaN` is returned if `val` cannot be converted to `Number`
- Use `let v = +val;` to do the same thing also
- happens automatically in mathematical functions and expressions (like `'6' / '2' == 3`)
- `Number(undefined)` -> `NaN`
- `Number(null)` -> `0`
- `Number(true)` -> `1`
- `Number(false)` -> `0`
- `Number(string)`
    - whitespaces (`\t`, `\n` also) from the start and end are removed.
    - if remaining string is empty, then return `0`
    - if the remaining string is a valid number then return it, otherwise return `NaN` (e.g. `123x` returns `NaN`)

### 2. BigInt
- Append `n` to the end of an integer to convert it to `BigInt`.
- `typeof x == 'bigint'`

```js
let bigInt = 123n;
```

### 3. String
- `typeof x == 'string'`
- `+` is the only binary operator that works on strings. It will convert both the operands to string and do string concatenation, so `'1' + 2 == '12'`

```js
let s1 = "Using double quotes";
let s2 = 'Using single quotes'; // No difference between single and double quotes
let s3 = `Using backticks ${1 + 2}`;
```

**Convert to String**
- Use `let v = String(val);`
- `String(null)` -> `"null"`
- `String(true)` -> `"true"`
- `String({name: 'something'})` -> `"[object Object]"`
- `String(prompt)` -> `"function prompt() { [native code] }"`
- If you pass a function, then it will print the actual code of the function

```js
function myFunc () {
  const x = 10;
}
String(myFunc) == 'function myFunc () {\n  const x = 10;\n}';
```

**Comparison**
Dictionary or lexicographical order is used for string comparisons
- Compare the first character of both strings.
- If one character is greater, then that string is the bigger one.
- If the character is same, move to the next character and repeat until end of either string.
- If both strings have the same length, then they are equal, otherwise the longer string is greater.

```js
'Z' > 'A' // true
'Glow' > 'Glee' // true
'Bee' > 'Be' // true
```

### 4. Boolean
- `typeof x == 'boolean'`

```js
let t = true;
let f = false;
```

**Convert to Boolean**
- Use `let v = Boolean(val);`
- Use `let v = !!val;` to do the same thing also
- `0` -> `false`
- `''` -> `false`
- `null` -> `false`
- `undefined` -> `false`
- `NaN` -> `false`

### 5. null
- `typeof x == 'object'` (mistake of JS)
- Represents "nothing", "empty", "value unknown"

```js
let x = null; // typeof x == 'object'

// To filter out `null` values
if (x) {
    console.log('yes');
} else {
    console.log('no'); // <-- This would be printed
}
```

### 6. undefined
- Represents "value not assigned"
- `typeof x == 'undefined`

```js
let x; // By default, it is undefined

let y = undefined; // Not recommended. As one should use `null` to assign an 'empty'
                    // or 'unknown' value to a variable, while `undefined` is
                    // reserved as a default initial value for unassigned things.
```

### 7. Object
- To store collections of data
- Functions belong to the object type, but `typeof alert == 'function'` (mistake of JS like `typeof null == 'object'`)
- `typeof x == 'object'`

```js
let x = {};
```

### 8. Symbol
- To create unique identifiers for objects
- `typeof Symbol("id") == 'symbol'`

```js

```

## Interaction with user

**alert**
- Show a message and waits for user to press "OK".
```js
alert("Hello");
```

**prompt**
- Show message and wait for input, till the user presses "OK"/"Cancel"
- If "OK" is pressed, return the input string
- If "Cancel" is pressed, return `null`
- The default value of the input is empty string
```js
let result = prompt('Title of the prompt', default_value_of_input_field);
result = result ?? 'default value if user does not enter anything';
```

**confirm**
- Show question with "OK" and "Cancel"
- If "OK" is pressed, return `true`
- If "Cancel" is pressed, return `false`
```js
let isTrue = confirm('Are you above 18?');
```

## Comparisons
**Equality (==)**
- When comparing value of different types, JS converts the values to numbers
- It cannot differentiate between `0` and `false`

```js
'2' > 1 // true
true > false // true
'01' == 1 // true

0 == '0' // true
Boolean(0) == Boolean('0') // false, as Boolean(0) = false, Boolean('0') = true
```

**Strict equality (===)**
- Check equality without type conversion to number
- So, if `a` and `b` are of different types, then it returns `false`

**null/undefined**
- `null` is only equal (`==`) to `null`
- `undefined` is only equal (`==`) to `undefined`
- `null == undefined` exception to the rule
- `NaN` returns `false` for all comparisons

```js
null === undefined // false (as different type)
null == undefined // true (exception to rule of converting to Number)

// For other comparisons, null/undefined are converted to numbers
null > 0 // false (as Number(null) = 0)
null == 0 // false (null is always equal to null, and same for undefined)
null >= 0 // true (as Number(null) = 0)

undefined > 0 // false (because undefined becomes NaN, and NaN always returns false)
undefined < 0 // false (because undefined becomes NaN)
undefined == 0 // false (undefined only equal to null/undefined)

NaN == NaN // false (NaN always returns false in comparions)
```

**Note:** To avoid problems, check for `null` and `undefined` separately (in case you are not sure).

## Conditional branching
- Converts the expression to boolean

```js
if (year < 2015) {

} else if (year > 2015) {

} else {

}

let val = (condition) > value1 : value2; // Addign parenthesis makes it more readable

let val = (condition1) ? value1 :
  (condition2) ? value2 :
  (condition3) ? value3 :
  value4;
```

### switch
- Checks done using `===`.
- When a `case` is matched, the code runs till `break` is found or till the end of the switch (this also includes `default`'s code).
- If no `case` is matched, then `default` is executed.
- Expressions can also be used in place of `x` and `case` val's.

```js
switch(x) {
  case val1:
    break;
  case val2:
    break;
  case val3:
  case val4:
    // case can be grouped also
    break; // If you forget this break, then default would also run
  default:
    // code
}
```


## Logical Operators
`|| (OR)`
- Convert operands to `Boolean`

```js
if (condition1 || condition2) {}

let result = a || b; // Find the first truthy value

// Same as
if (a) {
  result = a;
} else if (b) {
  result = b;
} else {
  result = false;
}

1 || 0 // 1
null || 1 // 1
null || 0 || 1 // 1
undefined || null || 0 // 0
```

`&& (AND)`
- Convert operands to `Boolean`

```js
if (condition1 && condition2) {}

let result = a && b; // Find the first false value
if (!a) {
  result = a;
} else if (!b) {
  result = b;
} else {
  return b; // the last operand
}

1 && 0 // 0
1 && 5 // 5
null && 5 // null
0 && 'something' // 0
```

`! (NOT)`
- Convert operand to boolean and return the inverse value

```js
result = !value;
```

`?? (Nullish coalescing)`
- It treats `null` and `undefined` the same
- Used to provide default value

```js
result = a ?? b; // if 'a' is defined then 'a', else 'b'

if (a !== null && a !== undefined) {
  result = a;
} else {
  result = b;
}

// Select the first value that is not `null/undefined` from multiple variables
result = firstName ?? lastName ?? nickName ?? 'Anonymous';
```

## Loops
- `break/continue` do not work when using `?`, e.g. `(i > 5) ? alert(i) : continue;` is an error

**while**
```js
while (condition == true) {
  break;
  continue;
}

do {

} while (condition == true);
```

**for**
```js
for (begin; condition; step) {
  break;
  continue;
}
```

To `break/continue` from multiple loops, assign the loop a label
```js
labelName: for (...) {
  break labelName;
}

outer: for (let i=0; i< 3; i++){
  for (let j=0; j < 3; j++) {
    break outer;
  }
}
```

## Functions
- Functions are actions, so prefix function name with a verb which vaguely describes the action like
    - `get...`
    - `calc...`
    - `create...`
    - `check...`
    - `show...`
- A function should do exactly what is suggested by its name, no more.
- Two independent actions usually deserve two function, and a third to to call them together (if they are always supposed to be called together).
- Function is a "value" that is stored in the variable name provided.

### Function declaration
- In strict mode, function declarations have "block" visibility i.e. it is only visibile inside the code block in which it resides.
- A function declaration can be called earlier that it is defined.
- This is because, when JS prepares to run the script, it first processes all the function declarations, and then the code is executed.

```js
function name(param1, param2 = defaultVal, param3 = anotherFunction()) {
  // - outer variables can be accessed and modified here also
  // - If an argument is not passed, it becomes `undefined`
  // - `anotherFunction()` is only executed, when the value is not provided

  param1 = param1 ?? defaultVal; // Provide default val, if arg not provided

  return; // Same as `return undefined;`
          // This is also true, if no `return` statement is provided

  // This does not work, as `return` becomes `return;`
  return
    (something)

  // Instead do this
  return (
    something
  )
}

name(arg1, arg2);
```

### Function expressions
- Function declration should be your first choice.
- Function expression is created when the execution reaches it and is usable only from that moment.

```js
const name = function() {

};
```

### Arrow functions
```js
let name1 = (arg1, arg2) => one_line_code;

// The above is the same as
let name1 = function (arg1, arg2) {
  return one_line_code;
}

let name2 = arg1 => one_line_code;
let name3 = () => one_line_code;

let name4 = (arg1, arg2) => (
  one_line_code
);

let name5 = (arg1, arg2) => {
  multi_line_code
}
```

Arrow function v/s regular function
1. `this` (execution context)
    - In regular functions, `this` is dynamic i.e. it depends on hwo the function is invoked.

    ```js
    // `this` = `undefined` if function runs in strict mode (or global object)
    function first() {
      console.log(this);
    }
    first();

    // `this` = the object owwning the method
    const obj = {
      method() {
        console.log(this);
      }
    }
    obj.method();

    // `this` = newly created instance when using `new`
    function Function() {
      console.log(this);
    }
    new Function(); // logs an instance of Function
    ```

    - Arrow function, does not define its own execution context, but resolves to the one from the outer function. This is useful when defining methods inside callbacks, as you don't have to manually bind `this` inside the method.

2. `arguments` object
    - In regular functions, `arguments` is a special array-like object containing the list of arguments with which the function is invoked.
    
    ```js
    function myFunc() {
      console.log(arguments);
    }

    myFunc('a', 'b'); // { 0: 'a', 1: 'b', length: 2 }
    ```

    - Arrow functions, don't define its own `arguments` object, but resolves to the one from the outer function. You need to use "rest" parameters for this
    
    ```js
    const func = (...args) => {};
    ```

3. When they are compiled
    - Regular functions are compiled before loading the script.
    - Arrow functions are compiled when you reach them in code.