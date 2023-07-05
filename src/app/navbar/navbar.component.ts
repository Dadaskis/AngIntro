import {Component} from '@angular/core';

@Component({
	selector: 'app-navbar',
	template: `
		<h1>Navbar Component</h1>
		<p>Any text over here</p>
	`,
	styles: [
		`
		h1 { 
			color: blue;
			font-size: 50px;
		}
		`
	]
})
export class NavbarComponent {

}