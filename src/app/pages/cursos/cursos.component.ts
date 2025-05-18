import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service';
import { Curso } from '../../models/curso.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [];
  constructor(private cursosService: CursosService){

  }
  ngOnInit(): void {
      this.cursos = this.cursosService.obtenerCursos();
  }
}
