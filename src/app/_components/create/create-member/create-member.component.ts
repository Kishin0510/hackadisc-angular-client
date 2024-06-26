import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateMember } from 'src/app/_interfaces/create-member';
import { Member } from 'src/app/_interfaces/member';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {

  FormGroup!: FormGroup;
  newMember!: CreateMember;

  constructor(private memberService: MemberService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    console.log("creando miembro")
  }

  onSubmit() {
    this.newMember = this.FormGroup.value;
    this.memberService.createMember(this.newMember).subscribe({
      next: (data) => {
        console.log('Member created successfully',data);
        this.router.navigate(['/members']);
      }
    });
  }
  createForm() {
    this.FormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      semester: ['', Validators.required],
      career: ['', Validators.required],
    });
  }
  goBack() {
    this.router.navigate(['/members']);
  }

}
