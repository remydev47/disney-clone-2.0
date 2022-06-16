function MoviesCollection (results, title) {
    return(
        <div className="relative flex flex-col space-y-2 my-10 px-8
        max-w-[1400] mx-auto">
            <h2 className="font-semibold">{title}</h2>
            {results.map((result) => (
                <MovieThumbnail key={result.id} />
            ))}
        </div>
    );
}

export default MoviesCollection;