namespace academy_docker_demo.Data;

using academy_docker_demo.Models;
using Microsoft.EntityFrameworkCore;


public class FoodzillaContext : DbContext
{
    public DbSet<Recipe> Recipes { get; set; } = default!;
    private readonly IConfiguration Configuration;

    public FoodzillaContext(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        var connectionString = Configuration.GetConnectionString("Foodzilla");
        optionsBuilder.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Recipe>().HasData(
            new Recipe()
            {
                ID = 1,
                Author = "Kalle",
                Date = new DateTime(2023, 5, 2),
                Summary = "Mix some stuff, cook it in the oven, enjoy!",
                Title = "Best meal ever"
            },
            new Recipe()
            {
                ID = 2,
                Author = "Victoria",
                Date = new DateTime(2023, 5, 7),
                Summary = "Mix some stuff, cook it in the oven, enjoy!",
                Title = "Cupcake extravaganza"
            },
            new Recipe()
            {
                ID = 3,
                Author = "Anna",
                Date = new DateTime(2023, 5, 12),
                Summary = "Mix some stuff, cook it in the oven, enjoy!",
                Title = "American pancakes"
            }
        );
    }
}
