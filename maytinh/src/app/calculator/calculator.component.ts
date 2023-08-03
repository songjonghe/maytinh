import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit{
  firstNumber = "0";
  currentNumber = '0';
  firstOperand: any = null;
  operator:any = null;
  waitForSecondNumber = false;

  

  constructor() { }

  ngOnInit() {
  }

  public getNumber(v: string){
    console.log(v);
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;
      
      

    }
  }

  getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }

  private doCalculation(op:any , secondOp:any){
    switch (op){
      case '+':
      return this.firstOperand + secondOp; 
      case '-': 
      return this.firstOperand - secondOp; 
      case '*': 
      return this.firstOperand * secondOp; 
      case '/': 
      return this.firstOperand / secondOp; 
      case '=':
      return secondOp;
    }
  }
  public getOperation(op: string){
    console.log(op);

    if(this.firstOperand === null){
      this.firstOperand = Number(this.currentNumber);
      

    }else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.currentNumber))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);
 
  }

  public clearAll(){
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }

  public clear() {

  }
}