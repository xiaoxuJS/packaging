## 动机

> 由于单页面的开发，js需要管理比任何时候都要多的state（状态）。
>
> state变化的复杂性，不可控性。
>
> redux试图让state的变化变得可预测

## 核心概念

​	`state`中的数据不能随意修改，需要发起一个`action`

​	`action`来描述所有变化，可以清晰的知道应用中到底发生了什么！

​	`reducer`只是一个接受state和action，并返回新的state的函数。

## 三大原则

### 单一数据源

**整个引用的`state`被储存在一颗/object tree/中，并且这个/object tree/只存在于唯一一个store中。**

## state是只读的

**唯一改变`state`的方法就是触发`action`,`action`是一个用来描述已发生事件的普通对象。**

`action`就是普通对象，因此它们可以被日志打印、序列化、储存、后期调试或测试时回放出来。

## 使用纯函数来执行修改

**为了描述`action`如何改变`state tree`，你需要编写`reducers`**

## Action

**`Action`是把数据从应用传到store的有效载荷。它是store数据的唯一来源。一般来说你会通过`store.dispatch()`将`action`传到`store`。**

- `action`内必须使用一个字符串类型的`type`字段来表示将要执行的动作。多数情况下，`type`会被定义成为字符串常量。应用规模大的时候---**建议使用单独的模块或文件存放action**

- `action创建函数`就是生成action的方法。和`action`要分清。

  - ```js
    function addTodo(text) {
      return {
        type: ADD_TODO,
        text
      }
    }
    ```

- Redux中只需要把action创建函数的结果传给`dispatch()`方法即可发起一次dispatch过程。

- 