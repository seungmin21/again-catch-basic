def greet(name):
    print("Hello,", name)

greet("ohmin")

def basic(x, y):
    sum = x + y
    return sum

x = "Hello"
y = " World!"
result = basic(x, y)
print(result)


# 만약 매개변수가 문자열일 경우 맞으면 정답 틀리면 틀림

def question(parameter):
    if isinstance (parameter, str):
        return "정답"
    else:
        return "틀림"

string = "문자"
print(question(string))

def dataType(every):
    if (type(every) == str):
        return "정답"
    else:
        return "틀림"

every = "문장"
print(dataType(every))

