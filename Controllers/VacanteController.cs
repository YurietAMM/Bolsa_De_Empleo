using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Bolsa_De_Empleo.Models;
using Microsoft.EntityFrameworkCore;

namespace Bolsa_De_Empleo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VacanteController : ControllerBase
    {
        private readonly BolsaEmpleoDBContext _dbContext;

        public VacanteController(BolsaEmpleoDBContext context)
        {
            _dbContext = context;
        }

        [HttpGet]
        [Route("ListarVacantes")]
        public async Task<IActionResult> Lista()
        {
            List<Vacante> lista = await _dbContext.Vacantes.OrderByDescending(p => p.IdVacante).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);
        }
    }
}
