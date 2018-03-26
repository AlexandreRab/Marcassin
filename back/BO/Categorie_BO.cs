using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO
{
    class Categorie_BO
    {
        public int id_categorie { get; set;}
        public string intitule { get; set; }
        public string categorie_mere { get; set; }
        public List<Categorie_BO> Categorie { get; set; }
        //public List<Competance_BO> Competance { get; set; }
    }
}
