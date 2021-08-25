import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  users = [
    {
      name: 'Juan',
      lastName: 'Perez',
      age: 23,
      married: false
    },
    {
      name: 'Pedro',
      lastName: 'Aguilar',
      age: 34,
      married: true
    },
    {
      name: 'Maria',
      lastName: 'Jimenez',
      age: 23,
      married: false
    },
    {
      name: 'Luis',
      lastName: 'Carmona',
      age: 29,
      married: false
    },
    {
      name: 'Carmen',
      lastName: 'Herrera',
      age: 24,
      married: true
    },
    {
      name: 'Mario',
      lastName: 'Ruiz',
      age: 32,
      married: true
    },
    {
      name: 'Pablo',
      lastName: 'Rodriguez',
      age: 35,
      married: false
    },
    {
      name: 'Liliana',
      lastName: 'Quintero',
      age: 29,
      married: false
    }
  ];

  constructor() {
    console.log('Hola desde constructor');
  }

  ngOnInit() {
    console.log('Hola desde ngOnInit');
  }

  getAverage() {
    console.log('Calcular Promedio');

    let promedio = 0;
    this.users.forEach(data => {
      promedio += data.age;
    });

    console.log('Promedio de edad', promedio / this.users.length);
  }

  getMarried() {
    console.log('Calcular Promedio');

    const casados = this.users.filter(data => data.married == true);

    console.log('Casados', { casados });
  }

  addUser() {
    let item = {
      name: 'Rodrigo',
      lastName: 'Muñoz',
      age: 35,
      married: false
    };
    this.users.push(item);
    console.log('Usuario agregado', this.users);

    let item2 = {
      name: 'Rosa',
      lastName: 'Molina',
      age: 25,
      married: true
    };
    this.users.unshift(item2);
    console.log('Usuario agregado al inicio', this.users);

    this.users.splice(0, 1);
    console.log('Primer usuario eliminado', this.users);
  }
}
