import { Member } from './../../_interfaces/member';
import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/_services/member.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styles: [],
})
export class MemberListComponent implements OnInit {
  members: Member[] = [];
  memberToEdit!: any;

  constructor(private memberService: MemberService, private router: Router) {}

  ngOnInit(): void {
    this.memberService.getMembers().subscribe({
      next: (members) => {
        this.members = members;
      },
    });
  }

  editMember(Member: Member): void {
    this.memberToEdit = Member;
    const serializedBook = JSON.stringify(this.memberToEdit);
    this.router.navigate(['/update'], { queryParams: { member: serializedBook }});
  }
  createMember(): void {
    this.router.navigate(['/create']);
  }
}
