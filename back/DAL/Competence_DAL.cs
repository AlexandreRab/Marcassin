using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BO;

namespace DAL
{
    class Competence_DAL
    {
        public List<Competence_BO> GetCompetence()
        {
            using (var context = new MarcassinEntities())
            {
                List<Competence> listCompetences = context.Competences.ToList();

                List<Competence_BO> listCompetencesBO = listCompetences.TolistCompetenceBO();
            }
                return null;
        }
    }
}
