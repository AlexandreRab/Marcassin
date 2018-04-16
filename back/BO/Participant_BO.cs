using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO
{
    public class Participant_BO
    {
        public int id_Utilisateur { get; set; }
        public int id_Cours { get; set; }
        public bool est_orga { get; set; }
    }
}
