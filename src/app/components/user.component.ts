import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: 
	`<h1>Hello {{name}}</h1>
	<p>email: {{email}}</p>`
})
export class UserComponent  { 
	name = "Elena Novichkova";
	email = "elenanovichkova@gmail.com"
}