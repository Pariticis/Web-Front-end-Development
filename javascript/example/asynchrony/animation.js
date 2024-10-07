const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

//promise链式调用写法

//element.animate()返回一个Animation对象  其finished属性来获取动画结束的Promise对象
/*const alice1Promise = alice1.animate(aliceTumbling, aliceTiming);
alice1Promise.finished
 .then( () => 
      alice2.animate(aliceTumbling, aliceTiming).finished
  )
 .then( () =>   
      alice3.animate(aliceTumbling, aliceTiming).finished
  )
 .catch( (error) => {
    console.error("Animation failed: ", error);
  });
*/

//async/await异步函数写法

//async函数返回Animation的finished对象  可以用await等待动画结束
const alice1Promise = alice1.animate(aliceTumbling, aliceTiming);
async function animateAlice() {
  try {
    await alice1Promise.finished;
    const finish2 = await alice2.animate(aliceTumbling, aliceTiming).finished;

    if (finish2) {alice3.animate(aliceTumbling, aliceTiming)};
    
  } catch (error) {
    throw new Error("Animation failed: ", error);
  };
};

animateAlice();