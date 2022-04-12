import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import { Camera, CameraResultType } from "@capacitor/camera";
import PhotoButton from "../components/PhotoButton";

const NewItem: React.FC = () => {
  const [photo, setPhoto] = useState<string>();
  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    setPhoto(image.webPath);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>New Item</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <img src={photo} alt="user" />
        <PhotoButton takePhoto={takePhoto} />
      </IonContent>
    </IonPage>
  );
};
export default NewItem;
