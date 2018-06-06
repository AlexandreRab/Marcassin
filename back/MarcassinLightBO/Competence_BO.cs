using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarcassinLightBO
{
    public class Competence_BO
    {
        public int Id_Competence { get; set; }
        public string Competence { get; set; }
        public int Id_Categorie { get; set; }
        public string Categorie { get; set; }
        public int? Id_Competence_mere { get; set; }
        public string Competence_mere { get; set; }
        public bool Est_active { get; set; }

    }
}
