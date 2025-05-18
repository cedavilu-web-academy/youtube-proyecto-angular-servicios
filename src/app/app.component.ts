import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PresentacionComponent } from './pages/presentacion/presentacion.component';
import { FooterComponent } from './components/footer/footer.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CursosGratuitosComponent } from './pages/cursos-gratuitos/cursos-gratuitos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,PresentacionComponent,FooterComponent,NosotrosComponent,CursosComponent,CursosGratuitosComponent,ContactoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-angular';
}
