import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll(): Movie[] { // 지금은 엔티티에 객체(더미데이터)로 만들었지만, 실제 프로젝트 할때는 데이터베이스 모델을 만들어야 함.
        return this.movies;
    }
    getOne(id: number): Movie {
        const movie = this.movies.find(movie => movie.id === id);
        if (!movie) {
            throw new NotFoundException(`Movie with ID ${id} not found.`)
        }
        return movie;
    }

    deleteOne(id: number) {
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== id);
    }
    create(movieData: CreateMovieDto) {
        this.movies.push({
            id: this.movies.length + 1,
            ...movieData
        })
    }
    update(id: number, updateData: UpdateMovieDto) {
        const movie = this.getOne(id);
        this.deleteOne(id);
        this.movies.push({ ...movie, ...updateData });
    }
}
