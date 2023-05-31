using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace academy_docker_demo.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Recipes",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    Title = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Summary = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Author = table.Column<string>(type: "longtext", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Recipes", x => x.ID);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.InsertData(
                table: "Recipes",
                columns: new[] { "ID", "Author", "Date", "Summary", "Title", "UserID" },
                values: new object[,]
                {
                    { 1, "Kalle", new DateTime(2023, 5, 2, 0, 0, 0, 0, DateTimeKind.Unspecified), "Mix some stuff, cook it in the oven, enjoy!", "Best meal ever", 0 },
                    { 2, "Victoria", new DateTime(2023, 5, 7, 0, 0, 0, 0, DateTimeKind.Unspecified), "Mix some stuff, cook it in the oven, enjoy!", "Cupcake extravaganza", 0 },
                    { 3, "Anna", new DateTime(2023, 5, 12, 0, 0, 0, 0, DateTimeKind.Unspecified), "Mix some stuff, cook it in the oven, enjoy!", "American pancakes", 0 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Recipes");
        }
    }
}
