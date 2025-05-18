import { Injectable } from '@angular/core';
import {Curso} from '../models/curso.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }
  private cursos: Curso[] = [
    {
      id: 1,
      nombre: 'Angular Básico',
      tecnologias: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      descripcion: 'Aprende los fundamentos de Angular para construir aplicaciones web dinámicas.'
    },
    {
      id: 2,
      nombre: 'Angular Avanzado',
      tecnologias: ['Angular', 'RxJS', 'NgRx'],
      descripcion: 'Profundiza en conceptos avanzados de Angular y mejora tus habilidades.'
    },
    {
      id: 3,
      nombre: 'Full Stack con Angular y Node.js',
      tecnologias: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      descripcion: 'Desarrolla aplicaciones completas del lado del cliente y del servidor.'
    },
    {
      id: 4,
      nombre: 'Angular Básico',
      tecnologias: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      descripcion: 'Aprende los fundamentos de Angular para construir aplicaciones web dinámicas.'
    },
    {
      id: 5,
      nombre: 'Angular Avanzado',
      tecnologias: ['Angular', 'RxJS', 'NgRx'],
      descripcion: 'Profundiza en conceptos avanzados de Angular y mejora tus habilidades.'
    },
    {
      id: 6,
      nombre: 'Full Stack con Angular y Node.js',
      tecnologias: ['Angular', 'Node.js', 'Express', 'MongoDB'],
      descripcion: 'Desarrolla aplicaciones completas del lado del cliente y del servidor.'
    }

  ];
  obtenerCursos():Curso[]{
    return this.cursos;
  }
}
