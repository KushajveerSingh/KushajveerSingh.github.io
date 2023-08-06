Primitives
- `string`
- `number`
- `boolean` (is an alias for `true | false`)
- `bigint`
- `symbol`

Arrays
- Add `[]` at the end of type like `string[]`.
- Or, use `Array<type>`, like `Array<number>`.

Any
- `any`. Use when you don't want a particular value to cause typechecking errors.
- When you don't provide a type, and TypeScript can't infer a type, then `any` is assigned to it. You can control this behavior using `noImplicitAny`.

Variables
- In most cases, when declaring variables (`const`, `var`, `let`) TypeScript can automatically infer types. `let val: string = 'something';` is the same as `let val = 'something';`.

Functions
- Even if you don't have type annotations on paramters, TS will still check that you passed the right number of arguments.
- Return type annotation can be inferred similar to variables. You should include them though, as it ensures the function returns exactly what you want, acts as a documentation source, and if someone makes a change in the future they cannot accidently change the return type.

    ```ts
    function func(param1: string, param2: number): boolean {

    }
    ```
- Function as parameter `fn: (a: string) => void`. `void` means that it dosen't have a return value.
- To use optional parameters use `?`
    ```ts
    // optional argument ('undefined' is used when argument is not provided)
    function f(x?: number) {}
    // f()
    // f(10)

    // default argument ('undefined' would be replaced with 10)
    function f(x = 10) {}
    ```

    - When writing a callback, do not use an optional parameter unless you intend to call the function without passing that argument
        ```ts
        function forEach(arr: any[], callback: (arg: any, index?: number) => void) {}

        // The optional parameter allows us to call the above function in two ways
        forEach([1,2,3], (a) => console.log(a));
        forEach([1,2,3], (a,i) => console.log(a, i));

        // The following code will fail, as 'i' is optional, so we cannot use
        // 'toFixed' without first checking if it is a number. So we have imposed a
        // limitation on the user's that want to write the callback, as they have to
        // explicitly check for 'undefined'
        forEach([1,2,3], (a,i) => {
        console.log(i.toFiexed());
        })
        ```
    - To resolve, the above issue use function overloading.

- Function overloading. If you want the same function to be called using different number of arguments, and possibly with different types, write an *overload signature* followed by the body of the function
    - *Tip*. Always prefer parameters with union types instead of overloads when possible.
        ```ts
        function makeDate(timestamp: number): Date; // first overload
        function makeDate(m: number, d: number, y: number): Date; // second overload
        function makeDate(mOrTimestamp: number, d?: number, y?: number): Data { // implementation

        }


        // The above code get's compiled to
        function makeDate(mOrTimestamp, d, y) {
        
        }
        ```

    - First, write all the *overload signatures*
    - Then, write the function *implementation signature* with a compatible signature. Note, that the function cannot be calleed with this signature.

        ```ts
        function fn(x: boolean): void;
        function fn(x: string): void; // Error, as 'string' is not compatible with
                                      // 'boolean', which is defined in the
                                      // 'implementation signature'
        function fn(x: boolean) {}


        function fn(x: string): string;
        function fn(x: number): boolean; // Error, as return type 'boolean' is not
                                         // compatible with the return type 'string'
                                         // in the 'implementation signature'
        function fn(x: string | number): string {
        }
        ```

- Functions can have properties. You need to define the *call signature* in an object type
    ```ts
    type Func = {
      description: string;
      (someArg: number): boolean;
    };
    
    function doSomething(fn: Func) {}
    ```
- Functions can also act as constructors and be invoked using `new`. You can write the *constructor signature* by adding the `new` keyword in front of a call signature
    ```ts
    type Constructor = {
      new (s: string): SomeObject;
      (n?: number): string; // if the function can also be called without 'new'
                            // like 'Date'
    };
    
    function fn(ctor: Constructor) {
      return new ctor('hello');
    }
    ```
- Types used mostly in the context of functions (can be used in other places also)
    - `void`
        - when function does not return a value, or does not have a return statement
        - In JS, a function that does not return any value will implicitly return the value `undefined`. But `void` is different from `undefined`.
            ```ts
            // Inferred return type is 'void'
            function f1() {

            }

            // Inferred return type is 'void'
            function f2() {
            return;
            }
            ```
        - Using the return type `void`, does not force functions to *not* return something
            ```ts
            type voidFunc = () => void;

            const f1: voidFunc = () => { return true };
            const f2: voidFunc = () => true;
            const f3: voidFunc = function () { return true };

            const v1 = f1(); // 'v1' has the type 'void'

            // This exists because of the following code
            const src = [1,2,3];
            const dst = [0];
            src.forEach(item => dst.push(item));
            // `const s = src.push(10);`, actually assigns `s` the value 10.
            // So in the above code `dst.push(item)`, returns `item` but
            // `forEach` method expects a function with a return type of `void`
            ```
    - `object`
        - refers to any value that isn't a primitive (string, number, boolean, bigint, symbol, null, undefined). It is different from the empty object type `{ }`.
        - In JS function values are objects. So in `function func() {}`, `func` is an object. For this reason, function types are considered to be `object`s in TS, as you can call `Object.prototype`, `Object.keys` on function values. (this is more of an internal compiler detail).
    - `unknown`
        - represents any value. Similar to `any` but is safer because it's not legal to do anything with an `unknown` value.
        - You can use this to describe function that accept any value (without using `any`)
        - You can use this as a return type to return unknown type.
    - `never`
        - For functions that never return return a value. Like if the function is supposed to throw an error.
        - Also, used while narrowing down a union type, when there's nothing left.
    - `Function`
        - Describes the properties like bind/call/apply, that all function values in JS have. When the function is called, its return type is `any`
            ```ts
            function func(f: Function) {
                let x = f(); // Inferred type of 'x' is 'any'
            }    
            ```
        - Try to avoid this, because of the `any` return type. Instead use `() => void`.
    
- *Generic functions*. Function where the types of input relate to type of output, or where the type of two inputs are related. For example, function that returns the first elemment of the array
    ```ts
    function firstElement(arr: any[]) {
      return arr[0];
    }
    ```

    To do this with generics
    ```ts
    function firstElement<Type>(arr: Type[]): Type | undefined {
      return arr[0];
    }
    ```

    You can extend this to multiple type parameters
    ```ts
    function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
      return arr.map(func);
    }
    ```

    You can pass a union to the `Type` as input also
    ```ts
    function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
      return arr1.concat(arr2);
    }

    const arr = combine([1,2,3], ['hello']); // Error, as second array is of different type

    const arr = combine<number | string>([1,2,3], ['hello']); // Works
    ```
- `this`. Type of `this` is inferred via code flow analysis. To provide a custom type, you can provide the type in the function definition (JS does not allow `this` in function definition, so this would be removed by the compiler)
    ```ts
    interface DB {
      filterUsers(filter: (this: User) => boolean): User[];
    }

    const db = getDB();
    const admins = db.filterUsers(function (this: User) {
      return this.admin;
    });
    ```

- *Constraints*. Generics help to work on any kind of value. But what if we want to operate on a subset of values. We can use constraints to limit the kinds of types that a type parameter can accept.
    ```ts
    function longest<Type extends { length: number }>(a: Type, b: Type) {
      return (a.length > b.length) ? a : b;
    }

    longest([1,2], [1,2,3]);
    longest('alice', 'bob');
    longest(10, 100); // fails, because it does not have 'length'
    ```

- Tips
    - When possible, use the type parameter itself rather than constraining it. Consider this example
        ```ts
        // Use this, as the inferred return type is 'Type'
        function firstElement1<Type>(arr: Type[]) {
          return arr[0];
        };

        // Bad, as the inferrred return type is 'any' because TS has to resolve
        // 'arr[0]' expression using the constraint type, rather than 'waiting'
        // to resolve the element during a call
        function firstElement2<Type extends any[]>(arr: Type) {
          return arr[0];
        }
        ```
    - Use as few type parameters as possible. The type parameters should relate two values. So if a type parameter is only used once in the function, then it is not relating anything.
        ```ts
        // Use this
        function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {}

        // Bad, as 'Func' dosen't relate two values
        function filter2<Type, Func extends (arg: Type) => boolean>(
          arr: Type[],
          func: Func
        ): Type[] {

        }
        ```
- *Rest parameters*. The default type is `any[]`. Only array or tuple type are allowed.
    ```ts
    function func(n: number, ...m: number[]) {}

    // Error. TS does not assume the arrays are immutable. So type of args is number[]
    // meaning it can have 0 or more numbers (which causes an error in the function)
    const args = [8,5];
    const angle = Math.atan2(...args);

    // To fix the above problem you can use 'as const'
    const args = [8, 5] as const;
    ```
- *Parameter destructuring*. The type goes after the destructuring syntax.
    ```ts
    function sum({ a, b, c }: { a: number, b: number, c: number }) {}
    ```

Contextual typing
- In the following examples the types are automatically inferred

    ```ts
    const names = ['Alice', 'Bob'];

    names.forEach(function (s) {

    });

    names.forEach((s) => {

    });
    ```

- Contextual typing - The context that the function occurred within informs what type it should have. TS used the types of the `forEach` function, along with the inferred type of the array to determine the type `s` will have.

Object types
- List property and type, separated with `;` or `,`

    ```ts
    function Coord(pt: { x: number; y: number }) {

    }
    ```

- Use `?` to make a property optional (i.e. `undefined`)

    ```ts
    function func(obj: {prop?: string }) {
      if (obj.prop !== undefined) {
        // This works
      }

      // Modern alternative
      obj.prop?.toUpperCase();
    }
    ```

Union types
- Use pipe operator `|` to define a union
- TS will only allow opeartions that are valid for every member of the union, so you have to narrow the union with code

    ```ts
    function func(id: string | number) {
      if (typeof id === "string") {
    
      } else {
        // 'id' is 'number' here
      }
    }
    ```

Type aliases
- Can be used to name any type (object, union)
- Provide a *name* for a type, so you can use it at other places.
- When you use *alias*, it's exactly as if you had written the aliased type (no magic is going underneath).

    ```ts
    type Point = {
      x: number;
      y: number;
    };

    type ID = number | string;

    function Coord(pt: Point) {}
    ```

- A type cannot be changed after it is created.
- Types can be extended via intersections

    ```ts
    type Animal = {
      name: string;
    };

    type Bear = Animal & {
      honey: boolean;
    };
    ```

Interface
- Another way to name an object type

    ```ts
    interface Point {
      x: number;
      y: number;
    }

    function Coord(pt: Point) {}
    ```

- New fields can be added to an existing interface
- Interfaces can be extended

    ```ts
    interface Animal {
      name: string;
    }

    // Add to an existing interface
    interface Animal {
      prop: boolean;
    }

    // Extend
    interface Bear extends Animal {
      honey: boolean;
    }
    ```

Type assertions
- When you know a type, that TS cannot infer. So you can manually set the type.
- There is no runtime checking associated with a type assertion, so there won't be an exception or `null` generated if the type assertion is wrong.

    ```ts
    const myCanvas = document.getElementById('main_canvas') as HTMLCanvasElement;

    // This is not allowed in '.tsx' files
    const myCanvas = <HTMLCanvasElement>document.getElementById('main_canvas');
    ```

- Type assertions are only allowed to convert to a *more specific* or *less specific* version of a type. So you cannot do `const x = 'hello' as number;`.
- A workaround for the above rule is to use two assertioons, first to any like `const a = (expr as any) as T;` or `const x = ('hello' as any) as numbber;`.

Literal Types
- It means assign a literal value (like `true, false, 1, 0, 'someString'` as a type).
- When you do `const x = 'hello';`
    - `x` has the type `hello`
    - which is the same as doing `let x: 'hello' = 'hello';`
    - So `x` can only take one value
- These are useful to specify a list of valid values like

    ```ts
    function func(alignment: CustomType | 'left' | 'center' | 'right') {}
    ```

- If you declare, a parameter to use a literal string value, then you cannot pass in a `string` as an argument, as the value of `string` can change. So you have to pass a `const` or explicitly change its type

    ```ts
    function handleRequest(url: string, method: 'GET' | 'POST') {}

    const req = { url: 'https://www.google.com/', method: 'GET' };

    // Error, because 'req.method' is a string
    handleRequest(req.url, req.method);

    // Solution 1. Use type assertion in 'req'
    const req = { url: 'https://www.google.com/', method: 'GET' as 'GET'};

    // Solution 2. Use type assertion when calling function
    handleRequest(req.url, req.method as 'GET');

    // Solution 3. Use 'as const' which acts like 'const' for the type system,
    // ensuring all properties are assigned the literal type
    const req = { url: 'http://www.google.com/', method: 'GET' } as const;

    // Solution 4. Use an 'if' condition and avoid type assertion
    if (req.method == 'GET') {
      handleRequest(req.url, req.method);
    }
    ```

`null` and `undefined`
- You need to test for them explicitly before using methods on properties
- You can use `!` after an expression to act as a type assertion, indicating the value is not a `null` or `undefined` (this does not change the runtime behavior, so use it only when you know the value cannot be null/undefiend)
    
    ```ts
    function func(x? : number | null) {
        // Works
        x!.toFixed();
    }
    ```

Narrowing
- You can use the following constructs for narrowing
- `typeof` which can check for
    - `string`, `number`, `bigint`, `boolean`
    - `symbol`
    - `undefined`
    - `function`
    - `object` - If the value is `null` it will also be passed as `object`, so when checking for `object` you need to also check for `null`
- truthliness. Check if value is `false/true`. The following become `false`, `0, NaN, '', 0n, null, undefined`.
- `switch`, `===`, `!==`, `==`, `!=` also works
- `in`. You can check if a property exists inside an object using this `if ('swim' in object) {}`
- `instanceof`. `x instanceof Foo` checks whether the *prototype* chain of `x` contains `Foo.prototype`.
    
    ```ts
    function func(x: Date | string) {
      if (x isinstanceof Date) {
        // x: Date
      } else {
        // x: string
      }
    }
    ```

Narrowing with unions
- Consider the following example, where we want a circle (hass radius) and a square (has sidelength)
    ```ts
    interface Shape {
        kind: 'circle' | 'square';
        radius?: number;
        sideLength?: number;
    }
    ```
- We need a way to bind radius to circle and sidelength to square, so we don't have to check for `undefined` when we know it is a circle, as shown below
    ```ts
    if (shape.kind == 'circle') {
        return Math.PI * shape.radisu! ** 2; // we have to use '!' to remove undefined
    }
    ```
- The proper way to handle this is to define an interface
    ```ts
    interface Circle {
      kind: 'circle';
      radius: number;
    }

    interface Square {
      kind: 'square';
      sideLength: number;
    }

    type Shape = Circle | Square;

    function func(shape: Shape) {
      if (shape.kind == 'circle') {
        return Math.PI * shape.radius ** 2; // this works now properly
      }
    }
    ```
- When every type contains a common property with literal types, TS considers that to be a *discriminated union*, and can narrow out the members of the union.
- In the above example, checking for `kind` got rid of every type in `Shape` that didn't have a `kind` property with the value `circle`.
- The check for `kind` can also be done in `switch` statement.

`never` type
- When narrowing, you can reducee the options of a union to point where you have removed all possibilities and have nothing left. In those cases, TS will use `never` type to represent a state which shouldn't exist.
- Use this in the `default` clause of `switch` for doing exhastiveness checking.
- `never` type is assignable to any type, but no type can be assigned to `never` (except `never`).
- Modifying the above example using switch
    ```ts
    type Shape = Circle | Square;

    function getArea(shape: Shape) {
      switch (shape.kind) {
        case 'circle':
          return Math.PI * shape.radisu ** 2;
        case 'square':
          return shape.sideLength ** 2;
        default:
          const _exchaustiveCheck: never = shape;
          return _exchastiveeCheck;
      }
    }
    ```
- Now if you modify the original type to `type Shape = Circle | Square | Triangle;`, then the above code will error, as `Triangle` would reach `default`, but only `never` can be assigned to `never`.

Use TypeScript for DOM manipulation
- The srouce code with 60K lines containing all the DOM element type definitions can be found at this [link](https://github.com/microsoft/TypeScript/blob/main/src/lib/dom.generated.d.ts).
- `HTMLElement` - base interface for every other element interface

    ```ts
    // document.getElementById -> returns "HTMLElement | null"
    const app = document.getElementById('app');

    // p is 'HTMLParagraphElement'
    const p = document.createElement('p');
    p.textContent = 'hello world';

    // Handle the 'null' case
    app?.appendChild(p);
    ```
- 'children' vs 'childNode'

    ```ts
    // <div>
    //   <p>Hello, World</p>
    //   TypeScript!
    // </div>

    const div = document.getElementsByTagName('div')[0];

    div.children;
    // HTMLCollection(1) [p]

    div.childNodes;
    // NodeList(2) [p, text]
    ```

Use TypeScript in JS project
- When you use an editor which uses TypeScript to provide tooling like auto-complete, jump to symbol.
- For cases, when types cannot be inferred automatically use JSDoc comments.

    ```js
    /** @type { number } */
    let x;

    x = 0;
    x = false; // works
    ```

- Use `// @ts-check` to enable errors in JS file

    ```js
    // @ts-check
    /** @type { number } */
    let x;

    x = 0;
    x = false; // raises an error
    ```

- You can provide a list of files to check in `jsconfig.json` (instead of manually writing `// @ts-check` comment). You can also ignore the files to be checked.
- To ignore errors
    - `// @ts-nocheck` - to ignore errors in the complete file (at the beginning of the file)
    - `// @ts-expect-error` or `// @ts-ignore` - can be used to ignore errors on specific lines (use the comment on the preceding line that causes the error)


Objects
```ts
interface Person {
  name: string;
  age: number;
}

type Person = {
  name: string;
  age: number;
}

function greet(person: Person) {}
```

- *Optional property*
    - Add a `?` at the end of the name of property. It means if the property is *set*, then it must have the specified type

        ```ts
        type Person = {
          name?: string; // 'name' has the type 'string | undefined'
        }
        ```
    - You can assign a value in the destructuring syntax i.e. provide default values to the object optional property

        ```ts
        type Option = {
          xPos?: number;
        }

        function f1(opt: Option) {
          let xpos = opt.xpos === undefined ? 0 : opt.xpos;
        }

        // Destructure the object and assign it default value of 0
        // (same as above)
        function f2({ xpos = 0 }: Option) {
         
        }

        // You can further rename the object property in the destructuring assignment
        function f3( {xpos: Pos = 0 }: Option) {

        }
        ```

- *readonly* properties.
    - It is the same as when you do `const arr = [];`. You can modify the arr, but you cannot assign a new array to `arr`.
    - This does not change anything in the runtime.
        ```ts
        type Type = {
        readonly prop: string;
        }

        function f(obj: Type) {
        obj.prop = 'hello'; // Error, as property is readonly
        }
        ```
    - When checking if the types are compatible, TS does not factor into account `readonly`
        ```ts
        interface Type {
          name: string;
        }

        interface ReadOnlyType {
          readonly name: string;
        }

        const obj: Person = { name: 'hello' };
        const readOnlyObj: ReadOnlyType = obj; // works (as TS does not check if
                                               // readonly properties match)
        ```

- *Index signatures*
    - When you don't know the name of the property ahead of time, but know the shape of the value. In those cases *index signature* can describe types of possible values.
    - Only `string`, `number`, `symbol`, template string patterns (strings using backticks), and union types of above are allowed for index signature properties.
        ```ts
        // When 'StringArr' is indexed with a 'number', it will return a 'string'
        interface StringArr {
          [index: number]: string;
        }

        const arr: StringArr = getArr();
        arr[0]; // has type 'string'
        ```
    - You can make index signature *readonly* to prevent assignment to indices
        ```ts
        interface ReadOnlyArr {
          readonly [index: number]: string;
        }

        const arr: ReadOnlyArr = getArr();
        arr[1] = 'hello'; // Error, as it is readonly
        ```
    - All properties must have the same type as the return type of index signature
        ```ts
        interface Dict {
          [index: string]: number;
          length: number; // Same as return type of [index: string]
          name: string; // Error, as [index: string] return's a number
        }
        ```