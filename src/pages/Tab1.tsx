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
  IonRippleEffect,
  IonIcon,
} from "@ionic/react";
import { add } from "ionicons/icons";
import { useContext } from "react";
// 使用钩子跳转页面
import { useHistory } from "react-router-dom";
// 引入原始组件
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

// 引入全局状态树
import { myContext } from "../mobx/Store";
// 引入监听mobx-react专用监听对象
import { Observer } from "mobx-react";

const Tab1: React.FC = (props: any) => {
  const store = useContext(myContext);
  // 整个跳转钩子
  let history = useHistory();

  // 手动构建单向数据流
  // const [first, setfirst] = useState(store.value);

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
              <Observer>{() => <h1>{store.vip}</h1>}</Observer>
              <IonNote>最终解释权归我所有</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              5天
            </IonBadge>
          </IonItem>
        </IonList>
        {/* 添加一个按钮 */}
        <div
          className="ion-activatable ripple-parent circle"
          onClick={() => {
            store.increment();
            // 手动实现响应式
            // setfirst(store.value);

            console.log(store.msg);
            
          }}
        >
          {/* 自动响应式hoc */}
          <Observer>{() => store.value}</Observer>
          <IonRippleEffect
            type="unbounded"
            class="custom-ripple"
          ></IonRippleEffect>
        </div>
        <Observer>{() => store.obj.b.c}</Observer>
        
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
