import { Component } from '@angular/core';
import { Usuario } from './usuario';
@Component({
    selector: 'registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
    model = new Usuario('', '', '','' , '', '', '');
    submitted = false;
    nuevoUsuario() {
       var usuarioCreado: Usuario = this.model;
    }
    onSubmit() { this.submitted = true; }
   
    sendNewUser() {
       console.log(this.model);
    }
    get diagnostic() { return JSON.stringify(this.model); }
}