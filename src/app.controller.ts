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
}
