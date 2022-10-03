// 引入jsx
import React from "react";
// 引入路由组件
import { Redirect, Route } from "react-router-dom";
// !引入核心包装组件,这里也是官方UI组件库，
import {
  // 根节点专用
  IonApp,
  // 图标专用
  IonIcon,
  // 导航标签专用
  IonLabel,
  // 包装页面组件
  IonRouterOutlet,
  // 导航栏
  IonTabBar,
  // 标准按钮
  IonTabButton,
  // 整体导航栏
  IonTabs,
  // 自定义配置组件
  setupIonicReact,
} from "@ionic/react";
// !专用离子路由器
import { IonReactRouter } from "@ionic/react-router";
// !自带图标库
import { ellipse, square, triangle } from "ionicons/icons";

// 导入三个页面
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
// 子路由
import NewItem from "./pages/NewItem";

// 导入核心样式
import "@ionic/react/css/core.css";

/* 基础移动端样式 */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* 可选css样式，可以被注释 */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* 全局样式主题 */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    {/* 等价于BrowserRouter */}
    <IonReactRouter>
      {/* 调用一个导航栏 */}
      <IonTabs>
        {/* 包装导航页面 */}
        <IonRouterOutlet>
          <Route exact path="/tab1">
            {/* tab1还有嵌套路由 */}
            <Tab1 />
          </Route>
          <Route exact path="/tab2" component={Tab2}></Route>
          {/* 动态路由 */}
          <Route exact path="/tab2/:myid" component={Tab2}></Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route path={"/new"} component={NewItem}></Route>
          <Route exact path="">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
