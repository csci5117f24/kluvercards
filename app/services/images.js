import Service from '@ember/service';
import { service } from '@ember/service';
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { action } from '@ember/object';

export default class ImagesService extends Service {
  @service firebase;

  storage = getStorage(this.firebase.app);
  images = ref(this.storage, 'images');

  @action async upload_basic(file, mimetype) {
    // This is a bit of a flawed function -- since we don't record the uuid there's no way to delete or edit images...
    const uuid = crypto.randomUUID();
    const fileRef = ref(this.images, uuid);
    const metadata = {
      contentType: mimetype,
    };
    await uploadBytes(fileRef, file, metadata);
    return await getDownloadURL(fileRef);
  }

  @action upload_advanced(file, mimetype, state_changed) {
    // This is a bit of a flawed function -- since we don't record the uuid there's no way to delete or edit images...
    // convert to a promise at the end.
    return new Promise((resolve, reject)=>{
      const uuid = crypto.randomUUID();
      const fileRef = ref(this.images, uuid);
      const metadata = {
        contentType: mimetype,
      };
      const uploadTask = uploadBytesResumable(fileRef, file, metadata);
      uploadTask.on('state_changed', state_changed,
        (error) => {
          reject(error)
        },
        () => {
          getDownloadURL(fileRef).then(resolve);
        }
      );
    })

  }
}
