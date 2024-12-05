const finalParticipants = ["Taylor", "Donald", "Don", "Natasha", "Boby"];

const announcement = finalParticipants.map((member) => {
    return member += "joined the contest.";
});

console.log(announcement);
