import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  //Assignment 1: Fibonacci Sequence
  @Get('fibonacci/:n')
  fibonacci(@Param('n', ParseIntPipe)n: number){
    let sequence = [];
    let a = 0, b = 1;

    for(let i = 0; i < n; i++){
      sequence.push(a);
      [a, b] = [b, a + b];
    }return sequence;
  }

  //Assignment 2: Prime Number Checker
  @Get('prime/:number')
  checkPrime(@Param('number', ParseIntPipe)number: number){
      const isPrime = this.isPrime(number);
      return {isPrime};
  }

  //Prime number checker logic
  isPrime(num: number){
      if(num <= 1){
        return false};
      if(num == 2 || num == 3) {
        return true};
      if(num % 2 == 0 || num % 3 == 0) {
        return false};

      for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      return true;
  }

  //Assginment 3: Factorial Calculator
  @Get('factorial/:number')
  factorial(@Param('number', ParseIntPipe)number: number){
     let answer = 1;
     for(let i = 1; i <= number; i++){
      answer = answer * i;
     }return answer;
  }
}
