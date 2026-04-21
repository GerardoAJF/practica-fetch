import { useState, useEffect } from "react";

import RickAndMortyCard from "../components/RickAndMortyCard";

const RickAndMorty = () => {
    const apiUrl = "https://rickandmortyapi.com/api/character";
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    const fecthCharacters = async () => {
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            await Promise.all(
                data.results.map(async (character) => {
                    const episodes = await Promise.all(
                        character.episode.map(async (episodeUrl) => {
                            const response = await fetch(episodeUrl);
                            const episodeData = await response.json();
                            return { name: episodeData.name, episode: episodeData.episode };
                        })
                    );
                    character.episode = episodes;
                })
            );

            setCharacters(Array.isArray(data.results) ? data.results : []);
        } catch (error) {
            console.error("Error fetching characters: ", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fecthCharacters();
    }, []);

    return (
        <div>
            <h1 className="text-center text-2xl">Personajes</h1>
            {loading ? (
                <p className="text-center">Cargando...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                    {characters.map((character) => (
                        <RickAndMortyCard key={character.id} character={character} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default RickAndMorty;