class person {                                 //类中可定义属性和函数  属性可被初始化  函数可被调用
    name;                                      //可写可不写  方便查明有哪些属性
    
    constructor(name) {                        //类中构造函数  关键词为constructor
        this.name = name;                      //this指向实例对象  实例对象中可调用属性和函数
    };

    introduce() {
        console.log(`Hello, I am ${this.name}`);
    };
};

const example = new person("John");            //调用类中的函数时引用类名而不是函数名
example.introduce();                           // Output: Hello, I am John

class person2 {
    name = "";

    introduce() {
        console.log(`Hello, I am not ${this.name}`);
    };
};

const example2 = new person2();                //new表示执行构造函数
example2.introduce();                          // Output: Hello, I am not

class professor extends person {               //继承person类
    teaches = "";

    constructor(name, teaches) {
        super(name);                           //调用父类的构造函数
        this.teaches = teaches;
    };

    introduce() {
        console.log(`Hello, I am ${this.name} and I teach ${this.teaches}`);
    };

    grade(paper) {
        const grade = Math.floor(Math.random() * 100);
        console.log(grade);
    };
};

const example3 = new professor("0","Math");
example3.introduce();                          // Output: Hello, I am 0 and I teach Math
example3.grade();                              // Output: 80

class student extends person {
    #year = "";                                //私有属性  以#开头  只能在类内部访问  不能在外部访问  也可设立私有函数

    constructor(name,year) {
        super(name);
        this.#year = year;
    };

    introduce() {
        console.log(`Hello, I am ${this.name} and I am in ${this.#year}`);
    };

    canStudyArchery(){
        return this.#year > 1;
    };
};

const example4 = new student("1",4);
example4.introduce();                          // Output: Hello, I am 1 and I study Math
example4.canStudyArchery();                     // Output: true