using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BO;

namespace DAL
{
    class UtilisateurCompetence_DAL
    {
        public List<UtilisateurCompetence_BO> GetCompetenceUtilisateur()
        {
            using (var context = new MarcassinEntities())
            {
                List<Utilisateur_Competence> listUtilisateurCompetence = context.Utilisateur_Competence.ToList();

                List<UtilisateurCompetence_BO> listUtilisateurCompetenceBO = listUtilisateurCompetence.ToListUtilisateurCompetence();

                return listUtilisateurCompetenceBO;
                
            }
        }
    }
}
