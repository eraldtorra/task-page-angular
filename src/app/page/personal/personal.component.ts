import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoService } from '../../service/info.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css',
})
export class PersonalComponent implements OnInit {
  fb = inject(FormBuilder);
  router = inject(Router);
  infoService = inject(InfoService);

  personalForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    terms: [false, Validators.requiredTrue],
  });

  ngOnInit(): void {
    if (this.infoService.infoPersonal().time === '') {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    if (this.personalForm.valid) {
      const { firstName, lastName, email, phone, terms } =
        this.personalForm.value;

      this.infoService.setOtherInfo(
        firstName || '',
        lastName || '',
        email || '',
        phone || '',
        terms || false
      );
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Email:', email);
      console.log('Phone:', phone);
      this.router.navigate(['/details']);
    }
  }
}
