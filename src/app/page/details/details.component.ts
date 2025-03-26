import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { InfoService } from '../../service/info.service';
import { Router } from '@angular/router';
import { empty } from 'rxjs';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
 
})
export class DetailsComponent implements OnInit {

  infoService = inject(InfoService);
  router = inject(Router);

  ngOnInit(): void {
    console.log(this.verifyInfo());
   if (!this.verifyInfo()) {
      this.router.navigate(['/personal']);
    }
  }


  verifyInfo(): boolean {
    const personalInfo = this.infoService.infoPersonal();
  
    return !(personalInfo.firstName === '' ||
      personalInfo.lastName === '' ||
      personalInfo.email === '' ||
      personalInfo.phone === '')
  }

}
