import {
  // 内容
  IonContent,
  // 头部
  IonHeader,
  // 页面组件
  IonPage,
  // 标题
  IonTitle,
  // 工具栏
  IonToolbar,
  // 搜索栏
  IonSearchbar,
  IonList,
  IonItem,
  IonCheckbox,
  IonLabel,
  IonNote,
  IonBadge,
  IonFab,
  IonFabButton,
  IonIcon,
} from "@ionic/react";
import { add } from "ionicons/icons";

// 使用钩子跳转页面
import { useHistory } from "react-router-dom";

// 引入原始组件
import ExploreContainer from "../components/ExploreContainer";

import "./Tab1.css";

const Tab1: React.FC = (props: any) => {
  // 整个跳转钩子
  let history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonSearchbar></IonSearchbar>
        <IonToolbar>
          <IonTitle>第一页</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* 可以放入任何原生jsx，tsx组件 */}
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">选项卡1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />
        <IonList>
          {/* 列表组件 */}
          <IonItem>
            {/* 单选盒 */}
            <IonCheckbox slot="start" />
            {/* 盒子中的内容 */}
            <IonLabel>
              <h1>会员</h1>
              <IonNote>最终解释权归我所有</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              5天
            </IonBadge>
          </IonItem>
        </IonList>
        {/* 添加了一个按钮 */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton
            onClick={() => {
              history.push("/new");
            }}
          >
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
