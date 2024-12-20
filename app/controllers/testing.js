import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { getDoc, getDocs, onSnapshot, query, where } from 'firebase/firestore';

export default class TestingController extends Controller {
  @service images;

  @tracked chosenFile = null;

  @action onChange(event) {
    console.log(event.target.files);
    if (event.target.files.length != 1) {
      this.chosenFile = null;
    } else {
      this.chosenFile = event.target.files[0];
    }
  }

  @action async upload() {
    console.log(
      await this.images.upload_basic(this.chosenFile, this.chosenFile.type),
    );
  }
}
