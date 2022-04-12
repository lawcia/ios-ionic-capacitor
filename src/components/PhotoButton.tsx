import React from "react";
import { IonButton, IonIcon } from "@ionic/react";
import { logoAndroid, logoApple } from "ionicons/icons";

interface PhotoButtonProps {
    takePhoto: () => Promise<void>
}

export const PhotoButton: React.FC<PhotoButtonProps> = ({ takePhoto }) => (
  <IonButton onClick={takePhoto}>
    <IonIcon ios={logoApple} md={logoAndroid} />
    Take Picture
  </IonButton>
);

export default PhotoButton;
