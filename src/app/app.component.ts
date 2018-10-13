import {Component} from '@angular/core';
import {ModalService} from '../../projects/components/src/lib/shared-services/modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-sm-ui';

  constructor(private modalService: ModalService) {

  }

  handleClick() {
    this.modalService.modal.alert({
      input: {
        title: '警告',
        text: '123'
      }
    });
  }
}
