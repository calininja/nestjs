import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller("movies") // 라우트
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}
    @Get()
    getAll(): Movie[] {
        return this.moviesService.getAll(); // 해당 서비스로 연결하여 메소드 실행
    }
    @Get("/:id")
    getOne(@Param('id') movieId: number): Movie {
        console.log(typeof(movieId));
        return this.moviesService.getOne(movieId);
    }
    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesService.create(movieData);
    }
    @Delete("/:id")
    deleteMovie(@Param("id") movieId: number) {
        return this.moviesService.deleteOne(movieId);
    }
    @Patch("/:id")
    patch(@Param("id") movieId: number, @Body() updateData: UpdateMovieDto) {
        return this.moviesService.update(movieId, updateData);
    }
}
