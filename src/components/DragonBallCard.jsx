const DragonBallCard = ({character}) => {
    return (
        <article tabIndex={0} className="group mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-white/40 bg-white/65">
            <div className="flex h-72 items-center justify-center rounded-b-2xl bg-[radial-gradient(circle_at_20%_20%, rgba(255,248,216,0.95),rgba(237,246,255,0.78)_75%)]">
                <img src={character.image} alt={character.name} className="h-full w-full rounded-2xl object-contain transition-all duration-300"  loading="lazy" 
                    onError={(event) => {
                        event.currentTarget.src = "https://via.placeholder.com/420x420?text=Imagen+no+disponible";
                        }}
                />
            </div>
            <div className="space-y-3 p-4 text-left">
                <div className="flex items-start justify-between gap-3">
                    <h2 className="text-xl font-semibold leading-tight text-gray-900">{character.name}</h2>
                    <span className="rounded-full bg-amber-100/80 px-3 py-1 text-xs font-semibold text-amber-800 backdrop-blur-sm transition-all duration-300 hover:bg-amber-200/90">{character.race}</span>
                </div>
                <p className="text-sm text-slate-600">{character.description || "Sin descripción disponible"}</p>
                <div className="grid gap-2 text-sm text-slate-600">
                    <p className="rounded-full bg-slate-100/75 px-3 py-2">
                        <span className="font-bold text-slate-800">Race:</span> {character.race}
                    </p>
                    <p className="rounded-full bg-slate-100/75 px-3 py-2">
                        <span className="font-bold text-slate-800">Gender:</span> {character.gender}
                    </p>
                    <p className="rounded-full bg-slate-100/75 px-3 py-2">
                        <span className="font-bold text-slate-800">Ki:</span> {character.ki}
                    </p>
                    <p className="rounded-full bg-slate-100/75 px-3 py-2">
                        <span className="font-bold text-slate-800">Max Ki:</span> {character.maxKi}
                    </p>
                    <p className="rounded-full bg-slate-100/75 px-3 py-2">
                        <span className="font-bold text-slate-800">Affiliation:</span> {character.affiliation}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default DragonBallCard;