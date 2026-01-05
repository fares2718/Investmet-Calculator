import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputService } from './user-input.service';
import { AnnualData } from '../annual-data.model';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<AnnualData[]>();
  enteredInitialInvestment = '0';
  enteredAnnualInvestmen = '0';
  enterdExpectedReturn = '5';
  enterdDuration = '10';

  private userInputService = inject(UserInputService);

  onCalculat() {
    this.calculate.emit(
      this.userInputService.calculateInvestmentResults(
        Number(this.enteredInitialInvestment),
        Number(this.enteredAnnualInvestmen),
        Number(this.enterdExpectedReturn),
        Number(this.enterdDuration)
      )
    );
    this.enteredInitialInvestment = '0';
    this.enteredAnnualInvestmen = '0';
    this.enterdExpectedReturn = '5';
    this.enterdDuration = '10';
  }
}
