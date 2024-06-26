import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/_interfaces/member';
import { MemberService } from 'src/app/_services/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styles: [],
})
export class MemberListComponent implements OnInit {
  members: Member[] = [];

  constructor(private memberService: MemberService, private router: Router) {}

  ngOnInit(): void {
    this.memberService.getMembers().subscribe({
      next: (members) => {
        this.members = members;
      },
    });
  }

  createMember(): void {
    this.router.navigate(['/create']);
  }
}
