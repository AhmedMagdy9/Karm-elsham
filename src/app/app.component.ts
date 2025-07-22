import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './core/services/flowbite/flowbite.service';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from "./shared/reusableComp/navbar/navbar.component";
import { FooterComponent } from "./shared/reusableComp/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'karamAlsham';
   constructor(private flowbiteService: FlowbiteService) {}


    ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      initFlowbite();
    });
  }
}
