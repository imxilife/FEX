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


  重点:
  *事件委托: 通俗的讲就是将一个元素的响应事件(比如 click,keypress等)的函数委托给另一个元素。比如一个列表上有多个列表项，给列表项绑定响应事件函数后，在发生相应事件时就可以处理。
  事件委托的做法是不单独给每个列表项都绑定事件，而是把响应事件函数绑定到列表元素的父类上。这里利用了事件冒泡的机制，当相应事件发生时，响应函数可以根据是哪个列表项被点击做出处理.

  *事件冒泡:
  当一个事件发生时，事件被处理的过程会经过以下几个阶段
  1、捕获阶段：在事件冒泡的模型中，捕获阶段不会响应任何事件
  2、目标阶段: 目标阶段是指事件响应到触发事件最底层元素上
  3、冒泡阶段: 冒泡阶段就是事件的触发响应会从最底层的目标一层层地向外到最外层(根节点).事件代理即是利用事件冒泡机制把里层所需要响应的事件绑定到外层

  *委托的优点:
  1、减少内存消耗
    试想一下， 若果我们有一个列表， 列表之中有大量的列表项， 我们需要在点击列表项的时候响应一个事件；

      <
      ul id = "list" >
      <
      li > item 1 < /li> <
      li > item 2 < /li> <
      li > item 3 < /li>
      ......
      <
      li > item n < /li> <
      /ul>
    // ...... 代表中间还有未知数个 li

    如果给每个列表项一一都绑定一个函数， 那对于内存消耗是非常大的， 效率上需要消耗很多性能；

    因此， 比较好的方法就是把这个点击事件绑定到他的父层， 也就是 `ul`
    上， 然后在执行事件的时候再去匹配判断目标元素.

  2、动态绑定事件
      比如上述的例子中列表项就几个， 我们给每个列表项都绑定了事件；
      在很多时候， 我们需要通过 AJAX 或者用户操作动态的增加或者去除列表项元素， 那么在每一次改变的时候都需要重新给新增的元素绑定事件， 给即将删去的元素解绑事件；

      如果用了事件委托就没有这种麻烦了， 因为事件是绑定在父层的， 和目标元素的增减是没有关系的， 执行到目标元素是在真正响应执行事件函数的过程中去匹配的；

      所以使用事件在动态绑定事件的情况下是可以减少很多重复工作的。




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