using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO
{
    public class Categorie_BO
    {
        public int id_categorie { get; set;}
        public string Intitule { get; set; }
        public Nullable<int> id_Categorie_mere { get; set; }
        public List<Competence_BO> Competences { get; set; }
    }
}
