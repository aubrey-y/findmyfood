import {Component, Input, OnInit} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StartupModalComponent } from '../startup-modal.component';
import {PrepopulateService, LocalstorageService, LocationService} from '../../../../services';

@Component({
  selector: 'app-startup-modal-btn',
  templateUrl: 'modal-button.component.html'
})
class ModalButtonComponent implements OnInit {
  constructor(private modalService: NgbModal,
              private prepopulateService: PrepopulateService,
              private locationService: LocationService,
              private localstorageService: LocalstorageService) {
    this.locationService.locationButtonText.subscribe(buttonText => this.buttonText = buttonText);
  }

  public buttonText: string;

  setButtonText(buttonText: string): void {
    this.buttonText = buttonText;
  }

  open() {
    this.modalService.open(StartupModalComponent);
  }

  ngOnInit(): void {
    const locationPref = this.localstorageService.getItem('locationPref');
    if(locationPref === true) {
      this.prepopulateService.prepopulate();
    }
    else if(locationPref === false) {
      this.setButtonText('Enable location services');
    }
    else {
      this.open();
    }
  }
}

export { ModalButtonComponent }
