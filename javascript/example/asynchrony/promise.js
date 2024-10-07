//Promise 异步函数返回的对象 指示当前操作所处的状态 并提供对其进行管理和跟踪的方法
//Promise 三种状态：pending（进行中） fulfilled（已成功） rejected（已失败）

//调用fetch()API 赋值给fetchPromise
const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
console.log(fetchPromise);

//链式调用then()与catch() 处理成功和失败的情况
//此处的response参数是fetch()返回的Promise对象  其状态由fetch()决定
//参数只可调用一次
fetchPromise
    //.then( (response) => response.json() )
    .then( (response) => {console.log(`已收到响应: ${response.status}`)} )
    .then( (data) => {console.log(data[1].name)} )
    .catch( (error) => {console.error(`获取出错：${error}`)} );                   //使用`而不是'

console.log('fetchPromise 已完成');

//同时使用多个Promise
const fetchPromise1 = fetchPromise;
const fetchPromise2 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

//使用Promise.all() 并行处理多个Promise
Promise.all([fetchPromise1 , fetchPromise2 , fetchPromise3])
    .then( (responses) => {
        for(const response of responses) {
            console.log(`${response.url}:${response.status}`);
        }
    })
    .catch( (error) => {console.error(`出错：${error}`)} );

console.log(`Promise.all() 已完成`);

//任一成功则执行对象
Promise.any([fetchPromise1 , fetchPromise2 , fetchPromise3])
    .then( (response) => {console.log(`${response.url}:${response.status}`)} )
    .catch( (error) => {console.error(`出错：${error}`)} );

console.log(`Promise.any() 已完成`);

//以async关键字构造异步函数  使得同步函数写法可用于构造异步函数
//await关键字只能在async函数中使用  其会等待异步操作完成
async function fetchData() {
    try {
        //调用fetch()  得到一个response对象而非Promise对象
        const response = await fetch(
            "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
        );
        if(!response.ok) {throw new Error(`HTTP 请求错误 ${response.status}`)};  //response请求失败则会抛出错误

        const data = await response.json();
        console.log(data[2].name);
    } catch (error) {
        console.error(`获取数据出错：${error}`);
    }
};

fetchData();