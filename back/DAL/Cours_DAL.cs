using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BO;

namespace DAL
{
    class Cours_DAL
    {
        public List<Cours_BO> GetCours()
        {
            using (var context = new MarcassinEntities())
            {
                List<Cour> listCours = context.Cours.ToList();

                List<Cours_BO> listCoursBO = listCours.ToListCoursBO();

                return listCoursBO;
            }
        }

    }
}
