using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace academy_docker_demo.Models;

[PrimaryKey(nameof(ID))] // New way EF Core >= 7.0
public class Recipe
{
    [Key] // Old way EF Core < 7.0
    public int ID { get; set; }

    public int UserID { get; set; }

    public DateTime Date { get; set; }

    [Required]
    public string? Title { get; set; }

    public string? Summary { get; set; }

    [Required]
    public string? Author { get; set; }
}
