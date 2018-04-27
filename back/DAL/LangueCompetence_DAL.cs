using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BO;

namespace DAL
{
    class LangueCompetence_DAL
    {
        public List<LangueCompetence_BO> GetLangueCompetence()
        {
            using (var context = new MarcassinEntities())
            {
                List<Langue_Competence> listLangueCompetence = context.Langue_Competence.ToList();

                List<LangueCompetence_BO> listLangueCompetenceBO = listLangueCompetence.ToListLangueCompetence();

                return listLangueCompetenceBO;
                
            }
        }
    }
}
