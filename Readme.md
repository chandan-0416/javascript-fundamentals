## Basic JS Concepts
1. MODULE 1 — JAVASCRIPT FUNDAMENTALS
- What JavaScript actually is
- ECMAScript
- JavaScript engines
- V8
- How JavaScript code executes
- Browser JavaScript vs Node.js
- Statements vs expressions
- Variables
- var, let and const
- Primitive data types
- Reference types
- Dynamic typing
- Type coercion
- Truthy and falsy values
- Equality: == vs ===
- Operators
- Logical operators
- Nullish coalescing
- Optional chaining
- Strict mode

2. Mental Model
```
                         ECMAScript
                             │
                             │ defines language
                             ▼
                       JavaScript code
                             │
                             ▼
                      JavaScript Engine
                             │
                  ┌──────────┴──────────┐
                  │                     │
                 V8             SpiderMonkey / JSC
                  │
                  ▼
          Runtime Environment
             │           │
          Browser       Node.js
             │           │
          DOM/Web       fs/http/etc.
           APIs          APIs
```
3. MODULE 2 — CONTROL FLOW
- if/else
- else if
- switch
- for loops
- while loops
- do while loops
- break
- continue
- nested loops
- early returns
- guard clauses
- conditional expressions

4. MODULE 3 — FUNCTIONS
- Function declarations
- Function expressions
- Arrow functions
- Parameters
- Arguments
- Default parameters
- Rest parameters
- Return values
- Higher-order functions
- Callbacks
- First-class functions
- Pure functions
- Side effects
- Function composition
- IIFE (Immediately Invoked Function Expression)