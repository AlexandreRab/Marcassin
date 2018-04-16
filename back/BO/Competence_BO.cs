using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO
{
    public class Competence_BO
    {
        public int id_Competence { get; set; }
        public Nullable<int> id_Competence_ref { get; set; }
        public int id_Categorie { get; set; }
        public bool est_actif { get; set; }
    }
}
