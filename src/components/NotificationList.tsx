import {
  IonItem,
  IonText,
  IonLabel,
  IonPage,
  IonContent,
  IonButtons,
  IonButton,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonList,
  IonIcon,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import useStore from "../store";

interface NotificationProps {
  notifications: Array<any>;
  exitModal: () => void;
}

const NotificationList: React.FC<NotificationProps> = ({
  notifications,
  exitModal,
}) => {
  return (
    <IonPage id="notification-list-page">
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonButton onClick={exitModal}>
              <IonIcon icon={closeOutline} slot="icon-only" />
            </IonButton>
          </IonButtons>
          <IonTitle>Notifications</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {notifications.length > 0 ? (
          <IonList lines="full">
            {notifications.map((notification, index) => (
              <IonItem key={index}>
                <IonLabel>
                  <h2>{notification.title}</h2>
                  <p>{notification.message}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        ) : (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>No notifications available</h2>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default NotificationList;
