import { Component } from '@angular/core';
import { SDKService } from '../../../services/sdk.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent {
  public request_uri;

  constructor(private readonly sdkService: SDKService) { 
    this.getrequestUri();
  }

  public verifyUser(): void {
    this.sdkService.getRequestUri().subscribe((res: string) => {
      window.location.href = res;
    });
  }

  public getrequestUri(): void {
    this.sdkService.getRequestUri().subscribe((res: string) => {
      this.request_uri = res;
    });
  }
}
