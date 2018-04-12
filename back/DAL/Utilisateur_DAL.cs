using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BO;

namespace DAL
{
    class Utilisateur_DAL
    {
        public List<Utilisateur_BO> GetUtilisateur()
        {
            using (var context = new MarcassinEntities())
            {
                List<Utilisateur> listUtilisateurs = context.Utilisateurs.ToList();

                List<Utilisateur_BO> listUtilisateursBO = listUtilisateurs.ToListUtilisateurBO();

                return listUtilisateursBO;
            }
        }
    }
}
