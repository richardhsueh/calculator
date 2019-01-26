Challenge: Create a simple calculator using HTML and Javascript
===
 
## Before you begin
 
- You need to setup command line Git for this task.
- Create a new local directory for your source codes.
- Checkout the blanket project from Git with "git clone".
- Create a local branch for your work with "git checkout -b {yourname}-work".
 
## Part 1: Create a function to perform simple arithmetics on inputs stored in strings
*Skills needed: string operations, integer arithmetics, array manipulation, looping*
 
Requirements:
- Modify the Javascript file "calculator.js".
- Implement the function calculate(), that takes a single string argument and returns an integer.
- The string argument contains two or more integers (may be negative), with at least one operator in between two integers.
- There must be at least one space character around an operator.
- The operators must be one of +, -, * and /.
- If there are more than one consecutive operators, only the last one counts.
- When the function is well tested, commit the changes locally with "git commit".
 
Constraints/assumptions:
- The string must begin and end with an integer.
- Neither the inputs nor any results during calculation shall exceed the range [-2147483648, 2147483647].
- For divisions, the divisor shall completely divide the dividend (i.e. the remainder must be zero).
- The divisor shall not be zero.
- You are not allowed to use Javascript function eval().
 
Notes:
- You may copy and paste the content of "calculator.js" to jsFiddle and click Run to see the test results.
- You may need to open developer console (shortcut F12) to help debugging your code.
 
Example 1:
---
Input: "1 + 2 - 3 + 4"
Output: 4
 
Example 2:
---
Input: "42 / -7 + 6"
Output: 0
 
Example 3:
---
Input: "2046 +  - * /   6  / 11"
Output: 31
 
 
## Part 2: Create a user interface that mimics a simple calculator, which is capable of capturing inputs from button clicks
*Skills needed: HTML, Javascript, DOM*
 
Requirements:
- Modify the HTML file "calculator.html".
- Add the UI components inside the HTML body.
- Use only simple HTML for this part.
- Hint: use div/span for layout, and use form button for the keys.
- When the UI is well-tested, commit the changes locally with "git commit".
 
Example:
 
    +-------------------+
    | =           -1234 |
    +-------------------+
    |  + |  - |  * |  / |
    +-------------------+
    |  7 |  8 |  9 |  C |
    +-------------------+
    |  4 |  5 |  6 |  ± |
    +-------------------+
    |  1 |  2 |  3 |    |
    +-------------------+
    |    |  0 |    |  = |
    +-------------------+
 
Note:
- In this part you are not required to perform calculation of inputs. You just need show that the buttons respond to
  mouse clicks and produce the correct inputs.
- You are not allowed to use any third-party library (e.g JQuery).
- You can open the HTML file with local browser for testing.
 
## Part 3: Combine the results of Part 1 and Part 2 to produce a functional calculator.
 
Requirements:
- Modify the HTML file "calculator.html".
- If any digit button is clicked, the inputs are accumulated and displayed in the display area.
- If any operator button is clicked, display the operator at the left side of the display area. Further clicks on
  digit buttons shall cause the currently displayed value cleared and start a new one. You must find ways to remember
  the previous value for later use.
- If an operator button is clicked and there is previously remembered value, you need to calculate the intermediate
  value with the remembered value, the currently displayed value, and the operator last seen.
- If the C button is clicked, clear the display area and reset the display to zero. Any intermediate results
  must be abandoned.
- If the ± button is clicked, toggle the sign of the currently displayed value.
- If the = button is clicked, calculate and display the final result. Any intermediate results must be abandoned.
- When the calculator is well-tested, commit the changes locally with "git commit".
- Publish your local changes for the first time with "git push -u origin {yourname}-work". (only when in office)
 
Constraints/assumptions:
- No need to handle overflow or underflow.
- No need to handle division by zero.
- No need to follow the normal rules of arithmetics (i.e. mul/div before plus/minus)
 
Example 1:
---
Input: 1 + + 2 =
Output: 3   (note that the duplicate plus has no effect)
 
Example 2:
---
Input: 1 + 2 * 3 ± =
Output: -9   (not -5) (note that the intermediate value 3 shall be calculated and displayed when * is clicked)
 
Example 3:
---
Input: 1 + 2 * 3 - 45 / 6 + 7 =
Output: 1   (not 7)
 
## Part 4: Enhance the calculator UI to make it responsive
*Skills needed: CSS, Bootstrap, JQuery (optional)*
 
Requirements:
- Make the UI fill the whole browser viewport, where components shall resize automatically in proportion to the window.
- Support at least two device form factors: desktop, mobile, tablet (optional)
- Use appropriate font size.
- When the calculator is well-tested, commit the changes locally with "git commit".
- Publish your local changes with "git push". (only when in office)
 
 
## Part 5: Advanced algorithms and data validation
 
Requirements:
- Validates inputs and results to avoid overflow or underflow, i.e. within the range [-2147483648, 2147483647].
  Display the string "ERR" in case something go wrong.
- If divsion by zero occured, display the string "ERR".
- User must click C button to reset calculator if "ERR" is displayed. Any other buttons shall stop functioning temporarily.
- If the divisor cannot completely divide the dividend, the fractional part of the quotient is _truncated_.
- Modify the logic to follow normal rules of arithmetics (i.e. mul/div before plus/minus)
- When the calculator is well-tested, commit the changes locally with "git commit".
- Publish your local changes with "git push". (only when in office)
 
Example 1:
---
Input: 65536 * 65536 =
Output: ERR
 
Example 2:
---
Input: 1 / 0 =
Output: ERR
 
Example 3:
---
Input: 1 + 2 * 3 - 45 / 6 + 7 =
Output: 7   (not 1)