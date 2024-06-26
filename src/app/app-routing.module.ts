import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './_pages/member-list/member-list.component';
import { CreateMemberComponent } from './_components/create/create-member/create-member.component';
import { UpdateMemberComponent } from './_components/update/update-member/update-member.component';

const routes: Routes = [
  {
    path: 'members',
    component: MemberListComponent,
  },
  {
    path: 'create',
    component: CreateMemberComponent,
  },
  {
    path: 'update',
    component: UpdateMemberComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
