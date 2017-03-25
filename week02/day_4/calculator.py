__author__ = 'ylwoi'

# Create a simple calculator application which does read the parameters from the prompt
# and prints the result to the prompt.

# It should support the following operations:
# +, -, *, /, % and it should support two operands.

# The format of the expressions must be: {operation} {operand} {operand}.
# Examples: "+ 3 3" (the result will be 6) or "* 4 4" (the result will be 16)

# You should use the input() function to accept user input
# It should work like this:

# Start the program
# It prints: "Please type in the expression:"
# Waits for the user input
# Print the result
# Exit

print("This is a calculator")

def calculator(operation, num1, num2):
    if operation == "+":
        return int(num1) + int(num2)
    if operation == "-":
        return int(num1) - int(num2)
    if operation == "*":
        return int(num1) * int(num2)
    if operation == "/":
        return int(num1) / int(num2)
    if operation == "%":
        return int(num1) % int(num2)


num1, operation, num2 = map(str, input("Please type in the expression: ").split())
print(num1, operation, num2 + " = ", end="")
print(calculator(operation, num1, num2))