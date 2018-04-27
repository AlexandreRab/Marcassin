using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BO;

namespace DAL
{
    class CategoreLangue_DAL
    {
        public List<CategoreLangue_BO> GetCategoreLangue()
        {
            using (var context = new MarcassinEntities())
            {
                List<Categorie_Langue> listCategoreLangue = context.Categorie_Langue.ToList();

                List<CategoreLangue_BO> listCategoreLangueBO = listCategoreLangue.ToListCategoreLangue();

                return listCategoreLangueBO;
                
            }
        }
    }
}
