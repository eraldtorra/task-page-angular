import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { InfoService } from '../../service/info.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-time',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './time.component.html',
  styleUrl: './time.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  infoService = inject(InfoService);

  timeOptions: string[] = [
    '8 AM CST',
    '9 AM CST',
    '10 AM CST',
    '11 AM CST',
    '12 PM CST',
    '1 PM CST',
    '2 PM CST',
    '3 PM CST',
    '4 PM CST',
    '5 PM CST',
    '6 PM CST',
  ];

  timeForm = this.fb.group({
    selectedTime: ['', Validators.required],
  });

  onSubmit() {
    if (this.timeForm.valid) {
      const selectedTime = this.timeForm.value.selectedTime || '';
      this.infoService.setTime(selectedTime);
      console.log('Selected Time:', selectedTime);
      this.router.navigate(['/personal']);
    }
  }
}
