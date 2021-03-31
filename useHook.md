## vue_Hook

- _computed_  
> tips 与vue2的计算属性差不多
```
const count=ref(0)
const setCount=computed(()=>count.value++)
```
******
- _watch_
```
const count =ref(0)
watch(()=>count,(val,oldVal)=>{
  // Do what you want....
})
```
******
- _watchEffect_
> tips watch双胞胎，升级版
```
<script>
setup(){
  const count=ref(0);
  watchEffect(()=>{
  consolle.log(count.value);
})
}
</script>
```
******
- _ref_
> tips 使用需访问ref下的value属性
```
1.对变量使用
const count =ref(0)
2.对dom使用
<div ref="cesRef">Do what you want....</div>
const cesRef=ref(null);
```
******
- _reactive_
> tips 包裹可响应式对象
```
const state=reactive({
  number:0
})
```
******
- _toRefs_
```
<script>
setup(){
  const state=reactive({
  number:0
})
return {
  ...toRefs(state)
}
}
</script>
```


