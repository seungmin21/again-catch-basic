def applyOperation(x, y, operation):
    return operation(x, y)

def add(x, y):
    return x + y

result = applyOperation(5, 3, add)
print(result)

