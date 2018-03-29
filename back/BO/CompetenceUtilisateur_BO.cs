using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO
{
    public class CompetenceUtilisateur_BO
    {
        public List<Competence_BO> Competences { get; set; }
        public List<Utilisateur_BO> Utilisateurs { get; set; }
        public int Note { get; set; }
    }
}
