import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ImageUpload extends Component {
  @service images;

  @tracked chosenFile = null;

  @tracked status = "not started"

  @tracked upload_state  = null

  @action onChange(event) {
    console.log(event.target.files);
    if (event.target.files.length != 1) {
      this.chosenFile = null;
    } else {
      this.chosenFile = event.target.files[0];
    }
  }

  @action async upload() {
    this.status = "started"
    console.log(
      await this.images.upload_advanced(this.chosenFile, this.chosenFile.type, (e)=>this.upload_state = e),
    );
    this.status = "done"
  }
}
