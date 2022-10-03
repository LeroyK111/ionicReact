import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const NewItem: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {/* 可以手动添加返回路径 */}
            <IonBackButton text={"上一页"} defaultHref={"/tab1"} />
          </IonButtons>
          <IonTitle>子页面</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div>内容</div>
      </IonContent>
    </IonPage>
  );
};
export default NewItem;
