using System;
using System.Collections.Generic;

namespace Bolsa_De_Empleo.Models
{
    public partial class Ciudadano
    {
        public Ciudadano()
        {
            Aplicaciones = new HashSet<Aplicacion>();
        }

        public int IdCiudadano { get; set; }
        public int? IdTipoDocumento { get; set; }
        public int? NumeroDocumento { get; set; }
        public string? Nombres { get; set; }
        public string? Apellidos { get; set; }
        public string? FechaNacimiento { get; set; }
        public string? Profesion { get; set; }
        public long? AspiracionSalarial { get; set; }
        public string? CorreoElectronico { get; set; }

        public virtual TipoDocumento? IdTipoDocumentoNavigation { get; set; }
        public virtual ICollection<Aplicacion> Aplicaciones { get; set; }
    }
}
