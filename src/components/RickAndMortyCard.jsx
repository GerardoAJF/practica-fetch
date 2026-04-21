import React from "react";

const RickAndMortyCard = ({ character }) => {
    return (
        <article tabIndex={0} className="group mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/40 bg-white/65">
            <div className="flex h-72 items-center justify-center rounded-b-2xl bg-[radial-gradient(circle_at_20%_20%, rgba(255,248,216,0.95),rgba(237,246,255,0.78)_75%)]">
                <img src={character.image} alt={character.name} className="h-full w-full rounded-2xl object-contain transition-all duration-300" loading="lazy"
                    onError={(event) => {
                        event.currentTarget.src = "https://via.placeholder.com/420x420?text=Imagen+no+disponible";
                    }}
                />
            </div>
            <div className="space-y-3 p-4 text-left">
                <div className="flex items-start justify-between gap-3">
                    <h2 className="text-xl font-semibold leading-tight text-gray-900">{character.name}</h2>
                    <span className="rounded-full bg-amber-100/80 px-3 py-1 text-xs font-semibold text-amber-800 backdrop-blur-sm transition-all duration-300 hover:bg-amber-200/90">{character.species}</span>
                </div>
                <div className="grid gap-2 text-sm text-slate-600">
                    <p className="rounded-full bg-green-100/75 px-3 py-2">
                        <span className="font-bold text-green-800">Status:</span> {character.status}
                    </p>
                    <p className="rounded-full bg-green-100/75 px-3 py-2">
                        <span className="font-bold text-green-800">Gender:</span> {character.gender}
                    </p>
                    {character.type && (
                        <p className="rounded-full bg-green-100/75 px-3 py-2">
                            <span className="font-bold text-green-800">Type:</span> {character.type}
                        </p>
                    )}
                    {character.origin.name != "unknown" && (
                        <p className="rounded-full bg-sky-100/75 px-3 py-2">
                            <span className="font-bold text-sky-800">Origin:</span> {character.origin.name}
                        </p>
                    )}
                    {character.location.name != "unknown" && (
                        <p className="rounded-full bg-sky-100/75 px-3 py-2">
                            <span className="font-bold text-sky-800">Location:</span> {character.location.name}
                        </p>
                    )}
                </div>
            </div>
            <div className="border-t border-gray-200 p-4">
                <h3 className="text-xl font-semibold leading-tight text-gray-900 text-center">Episodios:</h3>
                <div className="flex flex-wrap gap-3 mt-4 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 max-h-64">
                    {character.episode.map((episode, index) => (
                        <span key={index} className="bg-slate-100/75 px-3 py-2 text-sm font-semibold text-slate-800">
                            {episode.name} ({episode.episode})
                        </span>
                    ))}
                </div>
            </div>
        </article>
    )
}

export default RickAndMortyCard;