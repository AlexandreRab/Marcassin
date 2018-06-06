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
        /// <summary>
        /// Adds a categorie in database
        /// Simon-HUET
        /// </summary>
        /// <param name="catBO">Categorie to add</param>
        public static void AddCategorie(Categorie_BO catBO)
        {

            using (var db = new MarcassinEntities())
            {
                var catMere = from ca in db.Categorie
                          where ca.Intitule == catBO.Categorie_mere
                          select ca.id_Categorie;

                var cat = new Categorie
                {
                    id_Categorie_Mere = catMere.FirstOrDefault(),
                    Intitule = catBO.Intitule,

                };

                db.Categorie.Add(cat);
                db.SaveChanges();
                db.Categorie_Langue.Add(new Categorie_Langue
                {
                    Id_Categorie = cat.id_Categorie,
                    Traduction = catBO.Intitule,
                    id_Langue = 1,
                });
                db.SaveChanges();

            }

        }
    }
}
