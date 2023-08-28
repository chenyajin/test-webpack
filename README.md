# Tapable
**概念**
Tapable是一个提供异步/同步钩子的类库，控制着钩子的发布和订阅，将这些钩子暴露出去，为插件提供挂载的钩子。
**如何与webpack联系**
> 1、插件是一个类，提供了apply方法，传入complier实例对象。
> 2、插件实际上就是做一些事件的监听，监听complier上面的hooks关键的事件节点（webpack的生命周期钩子，如brake ），一旦事件节点触发，就会执行相应的操作，如文件的写入 代码的构建等 
````js
if (typeof options === 'object') {
  ...
  const compiler = new Compiler(options)
  compiler.options = options
  new NodeEnvironmentPlugin().apply(compiler)
  if (Array.isArray(options.plugins)) {
    for(const plugin of options.plugins) {
      plugin.apply(compiler)
    }
  }
  compiler.hooks.environment,.call()
  compiler.hooks.afterEnvironment,.call()
  compiler.run() 
} 
`````

# webpack流程-准备阶段

> 将options对应的插件挂载在complier对象实例上，并去做一些r入口entryPlugin的初始化,创建模块工
> 厂（NormalModuleFactory、ContextModuleFactory），最终进行complier.run。

# webpack流程-模块构建和chunk生成

# complier
- 流程：.make .(after-)emit .done
- 监听：.watch-run .watch.-close

# compilation
- complier调用compilation 生命周期
- .addEntry（添加入口）
- .finish（上报模块错误）
- .seal（资源的生成）
