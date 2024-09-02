var posts=["2022/05/18/JVM/","2022/03/18/泛型/","2022/03/18/多线程/","2023/04/19/Swagger/","2022/04/20/Mysql/","2022/04/21/环形链表/","2022/04/21/相交链表/","2022/04/22/MySql进阶/","2023/04/23/JWT/","2023/04/23/spring-security/","2022/05/01/ThreadLocal/","2022/05/05/springmvc执行流程/","2022/05/13/Linux/","2022/05/18/HahMap/","2022/05/18/spring-ioc/","2023/05/19/Docker/","2023/05/20/RBAC模型/","2022/05/21/AVL树/","2023/05/23/MySQL三大日志/","2023/05/25/Redis/","2023/05/25/单例模式/","2023/05/26/工厂模式/","2023/05/27/JUC/","2023/05/28/三大I-O/","2023/05/28/原型模式/","2023/05/29/建造者模式/","2023/05/30/代理模式/","2023/06/01/适配器模式/","2023/06/02/装饰者模式/","2023/06/03/享元模式/","2023/06/03/外观模式/","2023/06/03/桥接模式/","2023/06/03/组合模式/","2023/06/04/模板方法模式/","2023/06/04/策略模式/","2023/06/05/命令模式/","2023/06/05/责任链模式/","2023/06/09/自定义IOC容器/","2023/06/10/迭代器模式/","2023/06/12/哲学家就餐/","2023/06/13/JMM/","2023/06/14/Atomic/","2023/06/14/ThreadPool/","2023/07/29/跨域/","2023/08/06/ResponseBodyAdvice/","2023/08/08/Kafka/","2023/11/04/Vue组件/","2023/11/08/Vuex/","2023/11/10/Vue路由/","2023/11/11/Promise/","2023/11/12/Axios/","2024/07/22/Linux进阶/","2024/09/01/WPF基础/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"史诗予","link":"http://yiyecreb.top","avatar":"https://yiyecreb.top/avatar/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"陈子康","link":"https://www.parak.top","avatar":"https://khighness-blog.oss-cn-shanghai.aliyuncs.com/avatar/Khighness.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"卜庆爽","link":"https://www.qimi.work/","avatar":"https://www.qimi.work/medias/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true},{"name":"王率宇","link":"https://www.wsyssl.top","avatar":"https://www.wsyssl.top/img/cat.png","descr":"生活明朗，万物可爱","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };