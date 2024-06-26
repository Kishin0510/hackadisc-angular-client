import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateMember } from 'src/app/_interfaces/create-member';
import { MemberService } from 'src/app/_services/member.service';
import { Member } from 'src/app/_interfaces/member';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {

  FormGroup!: FormGroup;
  member!: Member;

  constructor(
    private FormBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params['member']) {
        this.member = JSON.parse(decodeURIComponent(params['member']));
        console.log("Se editara el siguiente miembro: ",this.member);
      }
    });
  }

  initForm(): void {
    this.FormGroup = this.FormBuilder.group({
      name: [this.member.name, Validators.required],
      email: [this.member.email, Validators.required],
      semester: [this.member.semester, Validators.required],
      career: [this.member.career, Validators.required],
    });
  }

  editMember(): void {
    try {
      this.memberService.editMember(this.FormGroup.value as CreateMember, this.member.id).subscribe({
        next: () => {
          this.router.navigate(['/members']);
        },
        error: (error) => {
          console.error('There was an error editing the member', error);
          return;
        }
      });
  } catch (error) {
    console.error('There was an error editing the member', error);
  }}

  goBack(): void {
    this.router.navigate(['/members']);
  }
}
