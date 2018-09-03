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
1、模块模式(Module patten)和自执行函数以及闭包之间的关系
  1.1、JavaScript模块是指封装代码达到形参一个功能块的目的
  1.2、不管是自执行函数还是普通函数等都可以封装模块，只不过自执行函数不用主动去调用，对于一加载就主动执行，自执行函数的优势。
  1.3、闭包概念是函数和声明该函数的词法环境的组合，这里提到的是函数，同时也包括方法。

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
        },
        budget:0,
        percentage:-1
        };

        function calculateTotal(type){
                //计算exp和inc
        var sum = 0;
        date.allItems[type].forEach(function (item,index,array) {
            sum += item.value;
        });
        date.allTotal[type+"Total"]  = sum;
        }

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
        } else if (type === 'exp') {
            item = new expenses(id, desc, value);
        }

        date.allItems[type].push(item);
        return item;
        },

        delete: function (type, index) {
        if (type === 'exp') {
            date.allItem[type].remove();
          }
        },

        calculateBudget: function () {
            //calc incom and exprenses budget
            calculateTotal('inc');
            calculateTotal('exp');
            //calc budget
            date.budget = date.allTotal.incTotal -  date.allTotal.expTotal;
            //calc precent
            if(date.allTotal.incTotal > 0){
                date.percentage = Math.round((date.allTotal.expTotal / date.allTotal.incTotal) * 100);
            }else{
                date.percentage = -1;
            }
        },
        getBudget:function () {
            return {
                budget:date.budget,
                totalInc:date.allTotal.incTotal,
                totalexp:date.allTotal.expTotal,
                percentage:date.percentage
            };
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
        budget: '.budget__value'
     };

        return {
        getInput: function () {
        return {
                type: document.querySelector(domNameStr.type).value,
                descript: document.querySelector(domNameStr.desc).value,
                value: Number.parseFloat(document.querySelector(domNameStr.value).value)
        };
    },
        getDomNameString: function () {
        return domNameStr;
    },
        addListItem: function (type, item) {
        var html, listType;
        //create html with plachehold instead;

        if (type === 'inc') {
            listType = domNameStr.incomeItemList;
            html = '<div class="item clearfix" id="%id%"> <div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        } else if (type === 'exp') {
            listType = domNameStr.expensesList;
            html = '<div class="item clearfix" id=%id%><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
        }
        console.log(html);
        //replace placehold with actual value
        var newHtmlText = html.replace('%id%', item.id);
        newHtmlText = newHtmlText.replace('%desc%', item.desc);
        newHtmlText = newHtmlText.replace('%value%', item.value);
        //insert html 
        document.querySelector(listType).insertAdjacentHTML('beforeend', newHtmlText);
    },

        displayBudget: function (budget) {
        //更新预算
        document.querySelector(domNameStr.budget_income_text).textContent = budget.totalInc;
        document.querySelector(domNameStr.budget_exp_text).textContent = budget.totalexp;
        document.querySelector(domNameStr.budget).textContent = budget.budget;
        if(budget.percentage > 0 ){
            document.querySelector(domNameStr.budget_exp_percent).textContent = budget.percentage + '%';
        }else{
            document.querySelector(domNameStr.budget_exp_percent).textContent = '---';
        }
    },
      clearInputField:function () {
        var fields,fieldsArr;
          fields = document.querySelectorAll(domNameStr.desc + ',' + domNameStr.value);
          console.log(fields);
          fieldsArr = Array.prototype.slice.call(fields);
          fieldsArr.forEach(function (element,index,array) {
            element.value = '';
          });

        fieldsArr[0].focus();
      }
    };
})();

        //ControllModule
var appController = (function (budgetCtrl, uiCtrl) {

        var ui_ctrl = uiCtrl;
        var budget_ctrl = budgetCtrl;

        function setEventListener() {
          document.addEventListener('keypress', function (event) {
                if (event.keyCode == 13) {
                addCtrl();
                }
        });
          document.querySelector(ui_ctrl.getDomNameString().btn).addEventListener('click', addCtrl);
        }

        function updateBudget() {
            //calculate budget
            budget_ctrl.calculateBudget();

            //getbudget
            var budget = budget_ctrl.getBudget();

            //show budget
            ui_ctrl.displayBudget(budget);
        }

        function addCtrl() {

        //1 get input field's value
        var input = ui_ctrl.getInput();
        if(input.descript==='' || Number.isNaN(input.value) || input.value === 0){
          alert('请输入正确信息');
          ui_ctrl.clearInputField();
          return;
        }
        //console.log('type:'+input.type+"|"+"desc:"+input.descript+"|"+"value:"+input.value);

        //2add item to the budget controller
        var newItem = budget_ctrl.add(input.type, input.descript, input.value);
        console.log("id:" + newItem.id + "|" + "desc:" + newItem.desc + "|" + "value:" + newItem.value);

        //3 add the item to the UI
        ui_ctrl.addListItem(input.type, newItem);

        //4 clear input Fields
        ui_ctrl.clearInputField();

        //5 calculate budget and update ui
        updateBudget();

        //6 calculate and update percentage
        //updatePercentages();

    }

        return {
            init : function () {
            /* ui_ctrl.displayMonth(); */
            ui_ctrl.displayBudget({
                budget:0,
                totalInc:0,
                totalexp:0,
                percentage:-1
            });
              setEventListener();
             }
        };

        })(budgetController, uiController);

  //初始化函数      
　appController.init();