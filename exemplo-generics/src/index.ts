import MyGenericClass from './models/MyGenericClass'

const obj1 = new MyGenericClass<string>('Fala, negada!')
obj1.sayMessage()

const obj2 = new MyGenericClass<number>(42)
obj2.sayMessage()

const obj3 = new MyGenericClass<Date>(new Date())
obj3.sayMessage()
