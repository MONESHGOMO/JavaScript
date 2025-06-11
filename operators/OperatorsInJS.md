# JavaScript Operators Cheat Sheet

## Arithmetic Operators
| Operator | Description           | Example  |
|----------|-----------------------|----------|
| `+`      | Addition              | `x + y`  |
| `-`      | Subtraction           | `x - y`  |
| `*`      | Multiplication        | `x * y`  |
| `/`      | Division              | `x / y`  |
| `%`      | Modulus (Remainder)   | `x % y`  |
| `**`     | Exponentiation        | `x ** y` |
| `++`     | Increment             | `x++`    |
| `--`     | Decrement             | `x--`    |

## Assignment Operators
| Operator | Example    | Equivalent To |
|----------|------------|---------------|
| `=`      | `x = y`    | `x = y`       |
| `+=`     | `x += y`   | `x = x + y`   |
| `-=`     | `x -= y`   | `x = x - y`   |
| `*=`     | `x *= y`   | `x = x * y`   |
| `/=`     | `x /= y`   | `x = x / y`   |
| `%=`     | `x %= y`   | `x = x % y`   |
| `**=`    | `x **= y`  | `x = x ** y`  |

## Comparison Operators
| Operator | Description                  | Example  |
|----------|------------------------------|----------|
| `==`     | Equal to                     | `x == y` |
| `===`    | Equal value and type         | `x === y`|
| `!=`     | Not equal                    | `x != y` |
| `!==`    | Not equal value or type      | `x !== y`|
| `>`      | Greater than                 | `x > y`  |
| `<`      | Less than                    | `x < y`  |
| `>=`     | Greater than or equal to     | `x >= y` |
| `<=`     | Less than or equal to        | `x <= y` |
| `?`      | Ternary operator             | `x ? y : z` |

## Logical Operators
| Operator | Description          | Example     |
|----------|----------------------|-------------|
| `&&`     | Logical AND          | `x && y`    |
| `\|\|`   | Logical OR           | `x \|\| y`  |
| `!`      | Logical NOT          | `!x`        |

## Bitwise Operators
| Operator | Description          | Example  |
|----------|----------------------|----------|
| `&`      | AND                  | `x & y`  |
| `\|`     | OR                   | `x \| y` |
| `^`      | XOR                  | `x ^ y`  |
| `~`      | NOT                  | `~x`     |
| `<<`     | Left shift           | `x << y` |
| `>>`     | Right shift          | `x >> y` |
| `>>>`    | Unsigned right shift | `x >>> y`|

## Special Operators
| Operator | Description                  | Example        |
|----------|------------------------------|----------------|
| `typeof` | Returns variable type        | `typeof x`     |
| `instanceof` | Checks object type      | `x instanceof Array` |
| `in`     | Checks if property exists    | `"prop" in obj`|
| `delete` | Deletes object property      | `delete obj.prop` |
| `...`    | Spread operator             | `[...arr]`     |
| `?.`     | Optional chaining           | `obj?.prop`    |
| `??`     | Nullish coalescing          | `x ?? y`       |

## Operator Precedence (Highest to Lowest)
1. `()` (Grouping)
2. `++`, `--` (Postfix)
3. `!`, `~`, `+`, `-`, `++`, `--` (Prefix), `typeof`, `void`, `delete`, `await`
4. `**` (Exponentiation)
5. `*`, `/`, `%`
6. `+`, `-`
7. `<<`, `>>`, `>>>`
8. `<`, `<=`, `>`, `>=`, `in`, `instanceof`
9. `==`, `!=`, `===`, `!==`
10. `&`, `^`, `|`, `&&`, `||`, `??`, `?.`
11. `=`, `+=`, `-=`, etc.
12. `,` (Comma)

> **Tip:** Use parentheses `()` to explicitly define evaluation order when in doubt!