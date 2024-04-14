// File: index.ts
import seriesData from './Data'; // Importa los datos de las series

// Calcula el total de temporadas
const totalSeasons = seriesData.reduce((acc, serie) => acc + serie.seasons, 0);

// Calcula el promedio
const averageSeasons = totalSeasons / seriesData.length;

console.log(`El promedio de temporadas de todas las series es: ${averageSeasons.toFixed(2)}`);
