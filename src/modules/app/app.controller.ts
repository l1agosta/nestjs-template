import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import {ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiTags('Template controller')
@Controller('/api/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary: 'Get hello world',
    description: 'Test swagger module',
  })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
