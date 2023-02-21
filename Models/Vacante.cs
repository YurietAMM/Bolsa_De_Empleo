using System;
using System.Collections.Generic;

namespace Bolsa_De_Empleo.Models
{
    public partial class Vacante
    {
        public Vacante()
        {
            Aplicaciones = new HashSet<Aplicacion>();
        }

        public int IdVacante { get; set; }
        public string? Codigo { get; set; }
        public string? Cargo { get; set; }
        public string? Descripcion { get; set; }
        public string? Empresa { get; set; }
        public long? Salario { get; set; }
        public int Estado { get; set; }

        public virtual ICollection<Aplicacion> Aplicaciones { get; set; }
    }
}
