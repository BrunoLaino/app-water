import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private cpf: String;
  private nome: String;
  private objective: number;
  private consumption: number;

  constructor() {
    this.cpf = "123456789";
    this.nome = "Bruno";
    this.objective = 2;
    this.consumption = 0;
   }

   public getObjective(): number {
      return this.objective;
   }

   public getConsumption(): number {
    return this.consumption;
 }
}
