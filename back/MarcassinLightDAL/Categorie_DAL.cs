using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MarcassinLightBO;

namespace MarcassinLightDAL
{
    public class Categorie_DAL
    {
        public static List<Categorie_BO> GetCategorie()
        {
            using (var context = new MarcassinEntities())
            {
                List<Categorie> listCategories = context.Categorie.ToList();
                List<Categorie_BO> listCategoriesBO = listCategories.ToListCategorieBO();

                return listCategoriesBO;
            }
        }
    }
}
