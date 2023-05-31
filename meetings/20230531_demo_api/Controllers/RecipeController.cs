using academy_docker_demo.Data;
using academy_docker_demo.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace academy_docker_demo.Controllers;

[ApiController]
[Route("[controller]")]
public class RecipeController : ControllerBase
{
    private readonly FoodzillaContext _context;

    private static readonly HttpClient httpClient = new HttpClient();

    public RecipeController(FoodzillaContext context)
    {
        _context = context;
    }

    [HttpGet(Name = "GetRecipe")]
    [Route("")]
    public ActionResult<IEnumerable<Recipe>> Get()
    {
        var _recipes = _context.Recipes.Take(10);

        if (_recipes == null)
        {
            return NotFound("Database empty.");
        }

        return Ok(_recipes);
    }

    /*
     * This function is exremely confusing and is only for demo purposes!
     * A function should NOT return different objects etc :)
     *
     */
    [HttpGet]
    [Route("{id:int}")]
    public async Task<ActionResult<Recipe>> GetRecipe(int id)
    {
        var _recipe = _context.Recipes.FirstOrDefault(r => r.ID == id);

        if (_recipe == null)
        {
            return NotFound("Recipe not found.");
        }

        // Get the user data (should be some tests here...)
        if (_recipe.UserID > 0)
        {
            // Http client - https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpclient?redirectedfrom=MSDN&view=net-7.0
            try
            {
                using (var response = await httpClient.GetAsync("http://mock-api:1080/users/" + _recipe.UserID))
                {
                    response.EnsureSuccessStatusCode();
                    if (response.StatusCode == System.Net.HttpStatusCode.OK)
                    {
                        string responseBody = await response.Content.ReadAsStringAsync();
                        
                        // Again, for demo, should be merged in a much better way
                        var options = new JsonSerializerOptions { WriteIndented = true };
                        string _recipeJSON = JsonSerializer.Serialize(_recipe, options);
                        _recipeJSON += responseBody;

                        return Ok(_recipeJSON);
                    }
                }
            }
            catch (Exception) // Only for demo, do NOT use empty Exception :)
            {
                return NotFound("User not found");
            }
        }

        return Ok(_recipe);
    }

    [HttpPost(Name = "PostRecipe")]
    public async Task<ActionResult<Recipe>> Post(Recipe recipe)
    {
        await _context.AddAsync(recipe);
        await _context.SaveChangesAsync();

        return Ok(recipe);
    }
}
