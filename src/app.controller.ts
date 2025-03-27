import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  @Render('index.html')
  getPage1() {}

  @Get('/page2')
  @Render('page2.html')
  getPage2() {}
}