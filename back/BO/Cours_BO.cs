using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO
{
    public class Cours_BO
    {
        private int id_Cours { get; set; }
        private Competence_BO Competence { get; set; }
        private string Lieu { get; set; }
        private DateTime DateReu { get; set; }
        private string Statut { get; set; }
       
    }
}
