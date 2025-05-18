// Sample player data - we'll expand this in future labs I'm just getting started again.
const players = [
    {
        name: "LeBron James",
        team: "Los Angeles Lakers",
        stats: {
            ppg: 27.2,
            rpg: 7.4,
            apg: 8.3,
            spg: 1.2,
            bpg: 0.8
        }
    },
    {
        name: "Stephen Curry",
        team: "Golden State Warriors",
        stats: {
            ppg: 25.8,
            rpg: 5.2,
            apg: 6.3,
            spg: 1.3,
            bpg: 0.2
        }
    },
    {
        name: "Giannis Antetokounmpo",
        team: "Milwaukee Bucks",
        stats: {
            ppg: 29.9,
            rpg: 11.6,
            apg: 5.8,
            spg: 1.1,
            bpg: 1.4
        }
    }
];

// Calculate advanced stats (we'll implement these in future labs)
function calculatePER(player) {
    // Player Efficiency Rating - simplified version
    return (player.stats.ppg + player.stats.rpg * 1.2 + 
            player.stats.apg * 1.5 + player.stats.spg * 2 + 
            player.stats.bpg * 2).toFixed(2);
}

// Display PER for each player in the console
console.log("Player Efficiency Ratings:");
players.forEach(player => {
    console.log(`${player.name}: ${calculatePER(player)}`);
});

// If we're in a Node.js environment (for testing in workflows)
if (typeof module !== 'undefined') {
    module.exports = {
        players,
        calculatePER
    };
}