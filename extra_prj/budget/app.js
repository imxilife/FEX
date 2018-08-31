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


*/

