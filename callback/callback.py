def applyOperation(x, y, operation):
    return operation(x, y)

def add(x, y):
    return x + y

result = applyOperation(5, 3, add)
print(result)


def apply(x, y, callback):
    return callback(x + y)

def resulted(resul):
    return resul

print(apply(5, 3, resulted))


def calculate(x, y, callback):
    resulted = callback(x, y)
    return resulted

def subtract(x, y):
    return x - y

print(calculate(7, 3, subtract))

def neuron(input, weight, callback):
    return callback(input, weight)

def sum(input, weight):
    return input * weight

# sum은 입력값 곱하기 가중치
# neuron은 매개변수 두개를 품은 콜백함수를 반환한다.

def hold(threshold):
    return threshold

# 비교할 매개변수가 필요

# 지역변수 대신 호출하는 함수를 사용하는 형태

if (neuron(0.7, 0.8, sum) > hold(0.5)):
    print("정답")
else:
    print("틀림")

print(neuron(1, 2, sum))


# input = 0.7
# weight = 0.8
# print(neuron(input, weight, sum))