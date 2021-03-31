using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FootballTournament.WebApp.Database
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
            : base(options)
        {
                
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TeamEntity>().ToTable("team");
            modelBuilder.Entity<TeamEntity>()
                .HasKey(p => p.TeamId)
                .IsClustered(false);

        }

        //public DbSet<TeamEntity> Team;
        public DbSet<TeamGameEntity> team_game;
    }
}
