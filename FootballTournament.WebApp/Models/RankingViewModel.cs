using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FootballTournament.WebApp.Models
{
    public class RankingViewModel
    {
        public TeamModel[] Teams { get; set; }

        public class TeamModel 
        {
            public string Name { get; set; }
            public int Points { get; set; }
            public int Score { get; set; }
        }
    }
}
