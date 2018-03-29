using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO
{
    public class Competence_BO
    {
        public int id_competence { get; set; }

        public string Intitule { get; set; }

        public string Competence_ref { get; set; }

        public List<Competence_BO> Competences { get; set; }
    }
}
