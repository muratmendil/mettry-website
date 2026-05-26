// Décorations visuelles uniques pour chaque module, affichées en bas-droite
// des cards de la section Modules. Chacune est un SVG inline.

export function DecorGmao() {
    // Mini sparkline horizontal avec 3 séries colorées
    return (
        <svg viewBox="0 0 140 60" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
            {[
                { y: 14, color: "#058985", x: 12 },
                { y: 30, color: "#0D4A4D", x: 36 },
                { y: 46, color: "#9CCFCD", x: 20 },
            ].map((row, i) => (
                <g key={i}>
                    <circle cx={row.x} cy={row.y} r="3" fill={row.color} />
                    <line x1={row.x + 6} y1={row.y} x2={130} y2={row.y} stroke={row.color} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                </g>
            ))}
        </svg>
    );
}

export function DecorEnergy() {
    // Mini bar chart gradient orange
    const heights = [12, 22, 16, 28, 24, 34, 30, 40, 36, 48, 44, 56];
    return (
        <svg viewBox="0 0 140 60" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
            <defs>
                <linearGradient id="grad-energy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F5A042" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#F5A042" stopOpacity="0.5" />
                </linearGradient>
            </defs>
            {heights.map((h, i) => (
                <rect
                    key={i}
                    x={i * 11 + 4}
                    y={60 - h}
                    width="7"
                    height={h}
                    rx="1.5"
                    fill="url(#grad-energy)"
                />
            ))}
        </svg>
    );
}

export function DecorTicketing() {
    // Bars horizontales bleues avec point coloré à gauche (style liste de tickets)
    const rows = [
        { color: "#3498DB", w: 60, dot: "#F5A042" },
        { color: "#3498DB", w: 80, dot: "#07BC0C" },
        { color: "#3498DB", w: 50, dot: "#3498DB" },
        { color: "#3498DB", w: 90, dot: "#0D4A4D" },
    ];
    return (
        <svg viewBox="0 0 140 60" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
            {rows.map((r, i) => (
                <g key={i} opacity="0.75">
                    <rect x="5" y={i * 14 + 4} width="3" height="6" rx="1" fill={r.dot} />
                    <rect x="14" y={i * 14 + 5} width={r.w} height="4" rx="2" fill={r.color} />
                </g>
            ))}
        </svg>
    );
}

export function DecorGed() {
    // Grille 3x3 de carrés violets
    return (
        <svg viewBox="0 0 80 80" className="w-full h-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            {[0, 1, 2].map((row) =>
                [0, 1, 2].map((col) => (
                    <rect
                        key={`${row}-${col}`}
                        x={col * 24 + 4}
                        y={row * 24 + 4}
                        width="20"
                        height="20"
                        rx="3"
                        fill="#7A5AE0"
                        opacity={0.45 + (row + col) * 0.08}
                    />
                ))
            )}
        </svg>
    );
}

export function DecorContracts() {
    // Lignes de "texte" stylisées (gris)
    const rows = [88, 64, 78, 52];
    return (
        <svg viewBox="0 0 140 60" className="w-full h-full" preserveAspectRatio="none" aria-hidden="true">
            {rows.map((w, i) => (
                <rect key={i} x="5" y={i * 14 + 4} width={w} height="4" rx="2" fill="#8A95A0" opacity="0.35" />
            ))}
        </svg>
    );
}

export function DecorPlanning() {
    // Mini calendrier en grille avec quelques cases colorées
    const cells = [
        [0, 1, 0, 1, 0, 0, 0],
        [1, 1, 0, 0, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 1],
    ];
    return (
        <svg viewBox="0 0 140 60" className="w-full h-full" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
            {cells.flatMap((row, rowI) =>
                row.map((filled, colI) => (
                    <rect
                        key={`${rowI}-${colI}`}
                        x={colI * 18 + 6}
                        y={rowI * 17 + 4}
                        width="14"
                        height="13"
                        rx="2"
                        fill={filled ? "#07BC0C" : "#E5E8EB"}
                        opacity={filled ? 0.65 : 0.7}
                    />
                ))
            )}
        </svg>
    );
}