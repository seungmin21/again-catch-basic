class Dog:
  def __init__(self, name, age):
    self.name = name
    self.age = age

dog = Dog("Buddy", 3)
print(dog) # <__main__.Dog object at 0x0000023B4A6FB2D0>
print(dog.name) # 

class Cat(Dog):
  def catSound(self):
    print(self.name, "sound is purrs")

cat = Cat("Tom", 2)
print(cat) # <__main__.Cat object at 0x
