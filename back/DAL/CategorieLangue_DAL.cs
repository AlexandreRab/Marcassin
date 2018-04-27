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
        public List<CategorieLangue_BO> GetCategoreLangue()
        {
            using (var context = new MarcassinEntities())
            {
                List<Categorie_Langue> listCategorieLangue = context.Categorie_Langue.ToList();

                List<CategorieLangue_BO> listCategorieLangueBO = listCategorieLangue.ToListCategorieLangueBO();

                return listCategorieLangueBO;
                
            }
        }
    }
}
