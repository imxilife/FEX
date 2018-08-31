/* 
CreateDate 2018/8/31
CreateAuthor Kelly

Note:

重点: 设计程序的关键是 解耦和封装
1、解耦是为了程序更通用，想象一下 如果数据和UI绑定了，如果你的界面变化了，数据的结构也要变化。所以要解耦UI和数据，他们对于双方都是不可感知的
各自只负责各自的事。
2、封装是为了将私有数据和公共数据区分开，内部细节私有化，对外提供能力。
3、通过架构模块的方式来构建程序
  3.1 UIModule --》负责界面的UI更新和数据获取
  3.2 DataModule--》负责数据的加工和生产
  3.3 ControllModule--》负责把UI和Data关联起来

Tip
1、模块和自执行函数的关系

2、闭包的强大
  2.1 闭包可以使得要在全局使用的变量可以放到局部环境中避免全局变量污染
  2.2 闭包在整个环境中一直存在即是原始的父函数消失了，而且它还持有原始父函数的值且保持不消失。

*/

//DataModule
var budgetController = (function () {

  var incomeTotal, expensesTotal;

  return function () {
    return {
      income: function (value) {
        return this.incomeTotal += value;
      },
      expense: function (value) {
        return this.expensesTotal -= value;
      }
    };
  };
})();

//UIModule
var uiController = (function () {
  return {
    getInput: function () {
      return {
        add_type: document.querySelector('.add__type').value,
        descript: document.querySelector('.add__description').value,
        value: document.querySelector('.add__value').value
      };
    }
  };
})();

//ControllModule
var appController = (function (budgetCtrl, uiCtrl) {

  var ui_ctrl = uiCtrl;
  var budget_ctrl = budgetCtrl;
  document.querySelector('.add__btn').addEventListener('click', execCtrl);

  function execCtrl() {
    //1 get input value
    console.log(ui_ctrl());
    //2 add item to data struct
    //3 update income or expenses ui
    //4 calc budget result
    //5 update budget ui  
    /* console.log(uiCtrl.descript); */ //uictrl 这里返回的是uiController自执行函数返回的内部函数对象
  }

  document.addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
      execCtrl();
    }
  });
})(budgetController, uiController);