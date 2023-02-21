using System;
using System.Collections.Generic;

namespace Bolsa_De_Empleo.Models
{
    public partial class Aplicacion
    {
        public int IdAplicacion { get; set; }
        public int? IdVacante { get; set; }
        public int? IdCiudadano { get; set; }

        public virtual Ciudadano? IdCiudadanoNavigation { get; set; }
        public virtual Vacante? IdVacanteNavigation { get; set; }
    }
}
