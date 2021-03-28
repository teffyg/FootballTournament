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
        public FootballTournamentController()
        {

        }

        [HttpGet]
        [Route("games/points")]
        public async Task<GamePointsModel[]> GetGamePointsAsync()
        {
            return new GamePointsModel[] { };
        }
    }
}
