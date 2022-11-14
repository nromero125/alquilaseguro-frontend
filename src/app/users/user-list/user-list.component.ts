import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { BrokerUser } from 'src/app/interfaces/users-interfaces';
import { UsersService } from 'src/app/services/users.service';
import { CreateUserComponent } from '../create-user/create-user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersList: any[] = []
  paginatedUsersList:any[] = []

  constructor(
    private _userService: UsersService,
    private _toastService: ToastrService,
    private _dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUsersList()
  }

  getUsersList() {
    this._userService.getUsers().subscribe({
      next: (res: any) => {
        this.usersList = res.data
      },
      error: (err: any) => {
        this._toastService.error('Ocurrio error cargano la lista de usuarios')
      },
    })
  }

  openCreateModal(isEditing?:boolean, user?:any) {
    this._dialog.open(CreateUserComponent, {
      width: '50%',
      data:{
        isEditing,
        user
      }
    }).afterClosed().subscribe({
      next: (res: any) => {
        if (res) {
          this.getUsersList()
        }
      },
      error: (err) => {
        this._toastService.error('Ocurrio un error al crear el usuario')
      },
    })
  }

  getPaginatedRecords(paginatedRecords: any) {
    this.paginatedUsersList = paginatedRecords
  }

}
