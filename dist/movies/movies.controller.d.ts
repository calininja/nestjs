import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';
export declare class MoviesController {
    private readonly moviesService;
    constructor(moviesService: MoviesService);
    getAll(): Movie[];
    getOne(movieId: string): Movie;
    create(movieData: any): void;
    deleteMovie(movieId: string): void;
    patch(movieId: string, updateData: any): void;
}
