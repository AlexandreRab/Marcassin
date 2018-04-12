using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO
{
    public class CompetenceLangue_BO
    {
        public List<Competence_BO> Competence{ get; set;}
        public List<Langue_BO> Langue { get; set; }
        public string Traduction { get; set; }
    }
}
