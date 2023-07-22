import { Usuario } from '../modelos/usuario.model';

export const USERMOCK: Usuario[] = [
  {
    id: '1',
    email: 'jhonjairo@hotmail.com',
    passWord: '81dc9bdb52d04dc20036dbd8313ed055',
    idPersona: 1,
    nombre: 'Jhon jairo ',
    apellido: 'Obando Cano',
    telefono: '3177777777',
    token: '',
    sesionActiva: false,
  },
  {
    id: '2',
    email: 'santi@hotmail.com',
    passWord: '1234',
    idPersona: 2,
    nombre: 'Santiago',
    apellido: 'Obando Cano',
    telefono: '3166666666',
    token: '',
    sesionActiva: false,
  },
];
