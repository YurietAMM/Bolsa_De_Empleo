using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using Bolsa_De_Empleo.Models;
using Microsoft.EntityFrameworkCore;

namespace Bolsa_De_Empleo.Controllers;

[Route("api/[controller]")]
[ApiController]
public class TipoDocumentoController : ControllerBase
{
    private readonly BolsaEmpleoDBContext _dbContext;

    public TipoDocumentoController(BolsaEmpleoDBContext context)
    {
        _dbContext = context;
    }

    [HttpGet]
    [Route("ListarTipoDocumento")]
    public async Task<IActionResult> Lista()
    {
        List<TipoDocumento> lista = await _dbContext.TipoDocumentos.OrderByDescending(p => p.IdTipoDocumento).ToListAsync();

        return StatusCode(StatusCodes.Status200OK, lista);
    }
}
