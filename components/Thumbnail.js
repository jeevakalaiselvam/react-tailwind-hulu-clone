import Image from 'next/image';

function Thumbnail({ result }) {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/';
    console.log(
        `${BASE_URL}${result.backdrop_path}|| ${BASE_URL}${result.poster_path}`
    );
    return (
        <div>
            <Image
                layout="responsive"
                src={
                    `${BASE_URL}${result.backdrop_path}` ||
                    `${BASE_URL}${result.poster_path}`
                }
                height={1080}
                width={1920}
            />
            <p className="text-pink-500">{result.overview}</p>
        </div>
    );
}

export default Thumbnail;
