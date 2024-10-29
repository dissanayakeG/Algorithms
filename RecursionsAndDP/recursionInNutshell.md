### Recursions and Call Stack

### memory management and stack frames:

references::
-   https://www.youtube.com/watch?v=Q2sFmqvpBe0&ab_channel=ComputerScienceLessons
-   https://stackoverflow.com/questions/10057443/explain-the-concept-of-a-stack-frame-in-a-nutshell

### Stack vs. Heap

-   **Local Scope**: Local variables (like those in a recursive function) are typically stored in the **stack**. Each function call creates a new **stack frame** on the stack, which contains all the local variables and parameters for that particular call.

-   **Heap**: The heap is a different area of memory used for dynamic memory allocation. It’s not directly related to local scope but is used when you allocate memory that needs to persist beyond the lifetime of a single function call (e.g., objects or arrays allocated with `new` in C++ or `malloc` in C).

-   **Stack Frame**: When a function is called, a new stack frame is pushed onto the call stack, containing the local scope of that function.

### Stack frame

##### A stack frame typically contains the following components:

-   **Return Address**: This is the address in the program where control should return after the function finishes executing. It allows the program to continue from the point right after the function call.

-   **Function Parameters**: The values passed to the function are stored here. For example, in `fib(n)`, `n` is stored in the stack frame for that call.

-   **Local Variables**: Any local variables declared within the function (e.g., intermediate results) are stored in the stack frame. These variables only exist during the function’s execution.

-   **Saved Registers**: Some architectures require saving the state of certain registers so that they can be restored when the function returns. This ensures that the CPU's state is maintained properly.

-   **Stack Pointer**: The stack frame keeps track of the base of the frame, which helps manage the scope of local variables and parameters.

### Summary

-   So, the "local scope" of a function in a recursive call is stored in the **stack** as part of a **stack frame**. Each function call has its own stack frame that keeps track of the function’s state, including local variables, parameters, and the return address. This structure allows for the management of recursive calls without losing track of the execution context for each instance.

_Example_

Assume we calculate fib of 4 --> fib(4)

```js
function main() {
	console.log(fib(4));
}

function fib(n) {
	if (1 <= n) return n;
	return fib(n - 1) + fib(n - 2);
}
```

-   It evaluates all the left branches of the tree until it hits the base case.

```js
      fib(2) 
     /       
   fib(1);
```

now, the stack looks like

```js
fib(1);
fib(2);
fib(3);
fib(4);
main();
```

##### Once `fib(1)` `return 1` as it hits the base case. How does the system know `it has to evaluate fib(0)`, and how does it know `fib(1) is already evaluated`?

-   In recursive function calls, the stack retains the specific context of each call, so each call is aware of where it left off.

Here's how this works in detail:

**Call State Tracking**

-   When `fib(2)` is called, it starts by evaluating `fib(1)`. Once `fib(1)` returns `1`, the stack frame for `fib(2)` keeps track of this result before it proceeds to evaluate `fib(0)`.

**Local Scope of Each Call**:

-   Each instance of `fib(n)` in recursion has its own "local scope" in memory. This means `fib(2)` only knows about `fib(1)` and `fib(0)` calls it directly makes, not any other `fib(1)` calls made by other instances (like `fib(3)`).
-   When `fib(1)` returns `1` for `fib(2)`, that value is stored locally within the scope of `fib(2)`.

**Execution Order Control by Stack**:

-   When `fib(2)` finishes `fib(1)`, it doesn’t need to re-evaluate it because the result (`1`) is locally stored in `fib(2)`'s stack frame.
-   The call stack's structure ensures that once `fib(1)` returns to `fib(2)`, control simply goes to the next statement in `fib(2)`—in this case, `fib(0)`.
-   This is how it avoids re-evaluating `fib(1)` within the same `fib(2)` call; the context "knows" it already completed this call in the current frame.

**No Caching Across Calls**:

-   Note that this doesn’t apply across different instances; if `fib(3)` calls `fib(1)` again later, it would compute `fib(1)` again because it’s a separate instance with a separate local scope.

In a more optimized implementation, like with **memoization**, results of function calls are stored globally, so every function call can check this shared storage and reuse results. However, in naive recursion, each call’s stack frame individually keeps track of its progress, ensuring `fib(2)` won’t recompute `fib(1)` because it locally stores that intermediate result before moving on to `fib(0)`.

##### works step-by-step for fib(2):

-   Call fib(2):
-   The fib(2) call creates a new stack frame and tries to evaluate fib(1) + fib(0).
-   Evaluate fib(1):
-   To evaluate fib(1), a new stack frame for fib(1) is pushed onto the stack.
-   Since fib(1) is a base case, it immediately returns 1.
-   The fib(1) frame is then popped off the stack, and control goes back to fib(2).
-   The return value (1) is saved in the fib(2) stack frame as part of its expression fib(1) + fib(0).
-   Evaluate fib(0):

Now, fib(2) evaluates the second part of its expression, fib(0).

-   A stack frame for fib(0) is created, which is also a base case, so it returns 0.
-   The fib(0) frame is popped off the stack, and control goes back to fib(2).
-   Complete fib(2) Calculation:

The fib(2) frame now has both fib(1) and fib(0) results stored.

-   It calculates 1 + 0 = 1, returns this value, and the fib(2) frame is popped off the stack.
-   In this process, each call to fib(n) only knows what it has calculated within that specific call.
-   Without memoization, there’s no memory of previous values across different recursive calls.
-   Instead, each stack frame simply holds results for each part of its calculation independently as each sub-call completes.
