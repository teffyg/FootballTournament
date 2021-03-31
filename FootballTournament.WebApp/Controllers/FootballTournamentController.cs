using FootballTournament.WebApp.Database;
using FootballTournament.WebApp.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FootballTournament.WebApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FootballTournamentController : Controller
    {
        private readonly DatabaseContext _dbContext;

        public FootballTournamentController(DatabaseContext databaseContext)
        {
            _dbContext = databaseContext;
        }

        [HttpGet]
        [Route("games/points")]
        public async Task<GamePointsModel[]> GetGamePointsAsync()
        {
            return new GamePointsModel[] { };
        }

        [HttpGet]
        [Route("ranking")]
        public async Task<RankingViewModel> GetRankingAsync()
        {
            var viewModel = new RankingViewModel
            {
                Teams = new RankingViewModel.TeamModel[] 
                {
                    new RankingViewModel.TeamModel
                    {
                        Name = "Instituto",
                        Points = 9,
                        Score = 10
                    },
                    new RankingViewModel.TeamModel
                    {
                        Name = "Racing",
                        Points = 2,
                        Score = 2
                    },
                    new RankingViewModel.TeamModel
                    {
                        Name = "Talleres",
                        Points = 2,
                        Score = 1
                    }
                }
            };

            return viewModel;
        }
    }
}
