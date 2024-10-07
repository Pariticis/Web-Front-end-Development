const a = document.querySelector('a');                             //查询选择a元素并赋值给变量a

a.textContent = 'Hello World!';
a.href = "https://www.xiaomi.com/";

const section = document.querySelector('section');
const p = document.createElement('p');                             //创建p元素并赋值给变量p

p.textContent = 'This is a paragraph.';
section.appendChild(p);

const text = document.createTextNode('This is a text node.');     //创建文本节点并赋值给变量text
const pa = document.querySelector('p');

pa.appendChild(text);

//section.appendChild(pa);                                          //移动p元素到section中
//section.removeChild(pa);                                          //移除基于父节点引用的p元素
//pa.remove();                                                      //移除基于自身引用的p元素方法1
//pa.parentNode.removeChild(pa);                                    //移除基于自身引用的p元素方法2(适用较旧的浏览器)