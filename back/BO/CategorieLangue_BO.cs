﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO
{
    public class CategorieLangue_BO
    {
        public List<Categorie_BO> Categories{ get; set;}
        public List<Langue_BO> Langues { get; set; }
        public string Traduction { get; set; }
    }
}
