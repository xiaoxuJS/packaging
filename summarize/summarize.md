## css img 和span 不再一个水平线上
> 给他们每个元素都加 **vertical-align: middle**这个属性！
## css 加padding 使宽度不变
```css
box-sizing:border-box;
```

## react 点击筛选--类似于boos直聘首页筛选--单选

- 首先应该想的是怎么写？react是操作数据来改变样式，就是要有一个数据来确定是不是给要点击的元素加一个`className = { true_and_false ? "show" : null }`就是给不给元素添加show这个class名字！

- 第二个就是判断是不是点击的自己，怎么能判断点击的是自己！

  - ```html
    <div 
         index = { key } 
         onClick ={ (event) => handleClickJobwantedtype( event ) }>
        { Data[key].jobwantedtype_name }
    </div>
    ```

  - ```js
    handleClickJobwantedtype( event ){
    	console.log(event.currentTarget.getAttribute('index'))
        //e.currentTarget.getAttribute('index') 可以获取当前点击元素的index值
    }
    ```

- 我们获取到当前元素的index的值 ，把他存起来（`jobwantedtypeIndex`），然后用来对比index的值就可以判断加不加class了。

  - ```js
    className = { jobwantedtypeIndex === key ? "show" : null } 
    //判断我存的index 是不是等于当前元素的index，等于就给他加点击样式。
    //当jobwantedtypeIndex改变的时候，react就是自动对比出index一样的 给他加上样式
    ```

- 加上样式之后再点击需要把样式再去掉，就是把点击样式的时候把`jobwantedtypeIndex`清空就行了！
- 多选的话就把`jobwantedtypeIndex`变成个数组 循环数组对比就行了，删除时候把当前点击的index在数组中删除就行了！