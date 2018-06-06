using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MarcassinLightBO;

namespace MarcassinLightDAL
{
    public class Langue_DAL
    {
        public static List<Langue_BO> GetLangue()
        {
            using (var context = new MarcassinEntities())
            {
                List<Langue> listLangues = context.Langue.ToList();
                List<Langue_BO> listLanguesBO = listLangues.ToListLangueBO();

                return listLanguesBO;
            }
        }

        public static void AddLangue(Langue_BO langBO)
        {
            using (var db = new MarcassinEntities())
            {
                db.Langue.Add(new Langue
                {
                    Langue_intitule = langBO.Intitule
                });


                db.SaveChanges();
            }

        }
    }
}
