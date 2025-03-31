import { IonToast } from "@ionic/react";

interface ToastProps {
  onDismiss: () => void;
  message: string;
  showToast: boolean;
  infoIcon: string;
}
const ToastComponent: React.FC<ToastProps> = ({
  onDismiss,
  showToast,
  message,
  infoIcon,
}) => {
  return (
    <IonToast
      isOpen={showToast}
      onDidDismiss={onDismiss}
      message={message}
      duration={3000}
      color="dark"
      icon={infoIcon}
      cssClass="toast"
      position="top"
    />
  );
};

export default ToastComponent;
