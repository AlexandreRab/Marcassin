using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO
{
    class CategorieLangue_BO
    {
        public List<Categorie_BO> Categorie{ get; set;}
        public List<Langue_BO> Langue { get; set; }
        public string traduction { get; set; }
    }
}
