using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MarcassinLightBO
{
    public class Categorie_BO
    {
        public int Id_Categorie { get; set; }
        public int? Id_Categorie_mere { get; set; }
        public string Intitule { get; set; }
        public override string ToString()
        {
            return this.Intitule;
        }
    }
}
