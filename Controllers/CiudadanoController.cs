using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Bolsa_De_Empleo.Models;
using Microsoft.EntityFrameworkCore;

namespace Bolsa_De_Empleo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CiudadanoController : ControllerBase
    {

        private readonly BolsaEmpleoDBContext _dbContext;

        public CiudadanoController(BolsaEmpleoDBContext context)
        {
            _dbContext = context;
        }

        [HttpGet]
        [Route("ListarCiudadanos")]
        public async Task<IActionResult> Lista()
        {
            List<Ciudadano> lista = await _dbContext.Ciudadanos.OrderByDescending(p => p.IdCiudadano).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("GuardarCiudadano")]
        public async Task<IActionResult> Guardar([FromBody] Ciudadano Ciudadano)
        {
            await _dbContext.Ciudadanos.AddAsync(Ciudadano);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpPut]
        [Route("EditarCiudadano")]
        public async Task<IActionResult> Editar([FromBody] Ciudadano Ciudadano)
        {
            _dbContext.Ciudadanos.Update(Ciudadano);
            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }

        [HttpDelete]
        [Route("EliminarCiudadano/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Ciudadano ciudadano = _dbContext.Ciudadanos.Find(id);

            _dbContext.Ciudadanos.Remove(ciudadano);

            await _dbContext.SaveChangesAsync();

            return StatusCode(StatusCodes.Status200OK, "ok");
        }
    }
}
