import React, { Component } from "react";
import { Image } from "react-native";
import PhotoUpload from "react-native-photo-upload";

export default class fileUpload extends Component {

  sendImage = async (avatar) => {
    try {
      const formData = new FormData();
      console.log('send image avatar');
      console.log(avatar);

      let fetchInit = {
        method: 'POST',
        headers: {
          'Name': 'Alek',
        },
        body: "data=" + avatar,
      }
      const test = await fetch('https://requestb.in/10cfp3d1', fetchInit);
      console.log('success');
      console.log(test);
    }
    catch (error) {
      console.log('ERROR');
      console.log(error);

    }
  }

  render() {
    return (
      <PhotoUpload
        onPhotoSelect={avatar => {
          if (avatar) {
            console.log('Image base64 string: ', avatar)
          }
          //Let's also upload this photo somewhere?
          this.sendImage(avatar);
        }}
      >
        <Image
          style={{
            paddingVertical: 30,
            width: 150,
            height: 150,
            borderRadius: 75
          }}
          resizeMode='cover'
          source={{
            uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
          }}
        />
      </PhotoUpload>
    );
  }

};


