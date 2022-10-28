import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useContext, useEffect } from "react";

import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";

// 引入全局状态树
import { myContext } from "../mobx/Store";

const Tab2: React.FC = (props: any) => {
  useEffect(() => {
    console.log(props.match.params);
  }, []);

  const store = useContext(myContext);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>{props.match.params.myid}</h1>
        <span>
          测试tab1页面的数据能否传入到tab2: <br /><b>{store.double}</b>{" "}
        </span>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
