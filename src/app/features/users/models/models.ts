//Tipos para tipado de respuestas y las entradas del formulario
export interface User {
    id: number;
    name: string;
    email: string;
    username?: string;
}

//DTO tipa lo que envia el formulario
export interface CreateUserDto {
    name: string;
    email: string;
}