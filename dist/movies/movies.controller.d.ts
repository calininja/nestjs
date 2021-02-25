export declare class MoviesController {
    getAll(): string;
    search(searchingYear: string): string;
    getOne(id: string): string;
    create(movieData: any): any;
    deleteMovie(movieId: string): string;
    patch(movieId: string, updateData: any): any;
}
