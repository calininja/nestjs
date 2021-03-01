import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
    @Get()
    hom() {
        return "Welcome to my API";
    }
}
