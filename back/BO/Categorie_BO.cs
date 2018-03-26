using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO
{
    class Categorie_BO
    {
        public int Id_categorie { get; set;}
        public string Intitule { get; set; }
        public string Categorie_mere { get; set; }
        public List<Categorie_BO> Categorie { get; set; }
        //public List<Competence_BO> Competences { get; set; }
    }
}
