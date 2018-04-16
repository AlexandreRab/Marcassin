using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO
{
    public class Cours_BO
    {
        public int id_Cours { get; set; }
        public Competence_BO Competence { get; set; }
        public string Lieu { get; set; }
        public DateTime DateReu { get; set; }
        public string Statut { get; set; }
        public string Description { get; set; }
       
    }
}
