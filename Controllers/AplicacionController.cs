using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Bolsa_De_Empleo.Models;
using Microsoft.EntityFrameworkCore;

namespace Bolsa_De_Empleo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AplicacionController : ControllerBase
    {
        private readonly BolsaEmpleoDBContext _dbContext;

        public AplicacionController(BolsaEmpleoDBContext context)
        {
            _dbContext = context;
        }

        [HttpGet]
        [Route("ListarAplicaciones")]
        public async Task<IActionResult> Lista()
        {
            List<Aplicacion> lista = await _dbContext.Aplicaciones.OrderByDescending(p => p.IdAplicacion).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("GuardarAplicacion")]
        public async Task<IActionResult> Guardar([FromBody] Aplicacion aplicacion)
        {
            int id = (int)aplicacion.IdVacante;

            Vacante VacanteAplicada = _dbContext.Vacantes.Find(id);
            VacanteAplicada.Estado = 1;

            await _dbContext.Aplicaciones.AddAsync(aplicacion);
            _dbContext.Vacantes.Update(VacanteAplicada);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }
    }
}
