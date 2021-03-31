namespace FootballTournament.WebApp.Database
{
    public class TeamGameEntity
    {
        public TeamGameEntity()
        {

        }

        public int TeamId { get; set; }
        public int GameId { get; set; }
        public int Score { get; set; }
        public int Points { get; set; }
        public bool IsLocal { get; set; }

    }
}