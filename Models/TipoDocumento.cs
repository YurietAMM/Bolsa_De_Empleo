using System;
using System.Collections.Generic;

namespace Bolsa_De_Empleo.Models
{
    public partial class TipoDocumento
    {
        public TipoDocumento()
        {
            Ciudadanos = new HashSet<Ciudadano>();
        }

        public int IdTipoDocumento { get; set; }
        public string? Nombre { get; set; }

        public virtual ICollection<Ciudadano> Ciudadanos { get; set; }
    }
}
