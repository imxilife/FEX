/* 
CreateDate 2018/8/31
CreateAuthor Kelly

Note:

重点: 设计程序的关键是 解耦和封装
1、解耦是为了程序更通用，想象一下 如果数据和UI绑定了，如果你的界面变化了，数据的结构也要变化。所以要解耦UI和数据，他们对于双方都是不可感知的
各自只负责各自的事。
2、封装是为了将私有数据和公共数据区分开，内部细节私有化，对外提供能力。
3、通过架构模块的方式来构建程序  (这里所指的模块一般是通过匿名函数来达到的，然后在内部通过构建对象的方式来封装功能模块以及通过闭包的方式来构建私有变量外面访问)
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

  //1 create item construct
  function incomeItem(id, desc, value) {
    this.id = id;
    this.desc = desc;
    this.value = value;
  }

  function expenses(id, desc, value) {
    this.id = id;
    this.desc = desc;
    this.value = value;
  }

  //save item date construct
  var date = {
    allItems: {
      inc: [], //every item date
      exp: []
    },
    allTotal: {
      incTotal: 0, //all item data sum
      expTotal: 0,
      spareMoney:0
    }
  };

  //add item
  return {
    add: function (type, desc, value) {
      var item, id;
      if (date.allItems[type].length > 0) {
        id = date.allItems[type][date.allItems[type].length - 1].id + 1;
      } else {
        id = 0;
      }

      if (type === 'inc') {
        item = new incomeItem(id, desc, value);
        date.allTotal.incTotal += Number.parseInt(value,10);
      } else if (type === 'exp') {
        date.allTotal.expTotal -= Number.parseInt(value, 10);
        item = new expenses(id, desc, value);
      }
      
      date.allItems[type].push(item);
      return item;
    },

    delete: function (type, index) {
      if (type === 'exp') {
        data.allItem[type].remove();
      }
    },

    getBudgetValue:function () {
       
       var inc = date.allTotal.incTotal;
       var exp = date.allTotal.expTotal;
       return [inc,exp,inc+exp,Math.floor(exp/inc*100)];
    }
  };



})();

//UIModule
var uiController = (function () {

  var domNameStr = {
    type: '.add__type',
    desc: '.add__description',
    value: '.add__value',
    btn: '.add__btn',
    incomeItemList: '.income__list',
    expensesList: '.expenses__list',
    budget_income_text: '.budget__income--value',
    budget_exp_text: '.budget__expenses--value',
    budget_exp_percent: '.budget__expenses--percentage',
    budget_spare_money_text: '.budget__value'
  };

  return {
    getInput: function () {
      return {
        type: document.querySelector(domNameStr.type).value,
        descript: document.querySelector(domNameStr.desc).value,
        value: document.querySelector(domNameStr.value).value
      };
    },
    getDomNameString: function () {
      return domNameStr;
    },
    updateItem: function (type,item) {
        var html,listType;
      //create html with plachehold instead;
      console.log(type);

      if (type === 'inc') {
        listType = domNameStr.incomeItemList;
        html = '<div class="item clearfix" id="%id%"> <div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === 'exp') {
        listType = domNameStr.expensesList;
        html = '<div class="item clearfix" id=%id%><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }
      console.log(html);
      //replace placehold with actual value
      var newHtmlText = html.replace('%id%',item.id);
      newHtmlText = newHtmlText.replace('%desc%', item.desc);
      newHtmlText = newHtmlText.replace('%value%',item.value);
      //insert html 
      document.querySelector(listType).insertAdjacentHTML('beforeend',newHtmlText);
    },

     updateBudget:function (incVlaue,expValue,spareMoney,precent) {
      //更新预算
      document.querySelector(domNameStr.budget_income_text).textContent = incVlaue;
      document.querySelector(domNameStr.budget_exp_text).textContent = expValue;
      document.querySelector(domNameStr.budget_spare_money_text).textContent = spareMoney;
       document.querySelector(domNameStr.budget_exp_percent).textContent = precent+'%';
    } 

  };


})();

//ControllModule
var appController = (function (budgetCtrl, uiCtrl) {

  var ui_ctrl = uiCtrl;
  var budget_ctrl = budgetCtrl;

  document.querySelector(ui_ctrl.getDomNameString().btn).addEventListener('click', addCtrl);

  function addCtrl() {

    //1 get input value
    var input = ui_ctrl.getInput();
    //console.log('type:'+input.type+"|"+"desc:"+input.descript+"|"+"value:"+input.value);

    //2 add item to data struct
    var newItem = budget_ctrl.add(input.type, input.descript, input.value);
    console.log("id:" + newItem.id + "|" + "desc:" + newItem.desc + "|" + "value:" + newItem.value);

    //3 update income or expenses ui
      ui_ctrl.updateItem(input.type,newItem);

    //4 calc budget result
      var budgetValue = budget_ctrl.getBudgetValue();

    //5 update budget ui  
     ui_ctrl.updateBudget(budgetValue[0], budgetValue[1], budgetValue[2],budgetValue[3]);
  }

  document.addEventListener('keypress', function (event) {
    if (event.keyCode == 13) {
      addCtrl();
    }
  });
})(budgetController, uiController);