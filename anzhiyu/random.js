var posts=["2022/03/18/多线程/","2022/03/18/泛型/","2023/04/19/Swagger/","2022/04/21/环形链表/","2022/05/18/JVM/","2022/04/20/Mysql/","2022/04/21/相交链表/","2022/04/22/MySql进阶/","2023/04/23/JWT/","2023/04/23/spring-security/","2022/05/01/ThreadLocal/","2022/05/05/springmvc执行流程/","2022/05/18/HahMap/","2022/05/13/Linux/","2022/05/18/spring-ioc/","2022/05/21/AVL树/","2023/05/19/Docker/","2023/05/20/RBAC模型/","2022/05/22/红黑树/","2023/05/23/MySQL三大日志/","2023/05/25/Redis/","2023/05/26/工厂模式/","2023/05/25/单例模式/","2023/05/27/JUC/","2023/05/28/原型模式/","2023/05/28/三大I-O/","2023/05/29/建造者模式/","2023/06/01/适配器模式/","2023/05/30/代理模式/","2023/06/03/享元模式/","2023/06/02/装饰者模式/","2023/06/03/外观模式/","2023/06/03/组合模式/","2023/06/03/桥接模式/","2023/06/04/模板方法模式/","2023/06/04/策略模式/","2023/06/05/责任链模式/","2023/06/05/命令模式/","2023/06/10/迭代器模式/","2023/06/12/哲学家就餐/","2023/06/14/Atomic/","2023/06/14/ThreadPool/","2023/06/09/自定义IOC容器/","2023/07/29/跨域/","2023/06/13/JMM/","2023/08/01/文件/","2023/08/06/ResponseBodyAdvice/","2023/08/08/Kafka/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};