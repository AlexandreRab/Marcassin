using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BO;

namespace DAL
{
    public static class Extension
    {
        public static List<Langue_BO> ToListLangueBO(this List<Langue> list)
        {
            if(list == null)
            {
                return null;
            }
            List<Langue_BO> listLanguesBO = new List<Langue_BO>();
            foreach (Langue lan in list)
            {
                var bo = new Langue_BO
                {
                    id_Langue = lan.id_Langue,
                    Langue_intitule = lan.Langue_intitule,
                    Par_Defaut = lan.Par_Defaut
                };

                listLanguesBO.Add(bo);
            }
            return listLanguesBO;
        }

        public static List<Service_BO> ToListServiceBO(this List<Service> list)
        {
            if(list == null)
            {
                return null;
            }
            List<Service_BO> listServicesBO = new List<Service_BO>();
            foreach (Service  ser in list)
            {
                var bo = new Service_BO
                {
                    id_Service = ser.id_Service,
                    Nom = ser.Nom,
                    id_chef = ser.id_chef,
                    GUID = ser.GUID
                };

                listServicesBO.Add(bo);
            }
            return listServicesBO;
        }

        public static List<Badge_BO> ToListBadgeBO(this List<Badge> list)
        {
            if (list == null)
            {
                return null;
            }
            List<Badge_BO> listBadgeBO = new List<Badge_BO>();
            foreach (Badge bad in list)
            {
                var bo = new Badge_BO
                {
                    id_Badge = bad.id_Badge,
                    Image = bad.images,
                    Intitule = bad.nom
            };
                

                listBadgeBO.Add(bo);
            }
            return listBadgeBO;
        }

        public static List<Utilisateur_BO> ToListUtilisateurBO(this List<Utilisateur> list)
        {
            if (list == null)
            {
                return null;
            }

            List<Utilisateur_BO> listUtilisateurBO = new List<Utilisateur_BO>();
            foreach(Utilisateur uti in list)
            {
                var bo = new Utilisateur_BO
                {
                    id_Utilisateur = uti.id_Utilisateur,
                    Nom = uti.Nom,
                    Prenom = uti.Prenom,
                    Mail = uti.Mail,
                    Numero_Telephone = uti.Numero_Telephone,
                    Adresse = uti.Adresse,
                    Ville = uti.Ville,
                    Region = uti.Region,
                    Pays = uti.Pays,
                    Sexe = uti.Sexe,
                    Est_intervenant = uti.Est_intervenant,
                    GUID = uti.GUID,
                    Linkedin = uti.Linkedin
                };
               

                listUtilisateurBO.Add(bo);
            }
            return listUtilisateurBO;
        }
        public static List<Personnel_BO> ToListPersonnelBO (this List<Personnel> list)
        {
            if (list == null)
            {
                return null;
            }
            List<Personnel_BO> listPersonnelBO = new List<Personnel_BO>();
            foreach (Personnel pers in list)
            {
                var bo = new Personnel_BO
                {
                    id_Utilisateur = pers.id_Utilisateur,
                    Date_deb_contrat = pers.Date_deb_contrat,
                    Date_fin_contrat = pers.Date_fin_contrat,
                    Est_admin = pers.Est_admin
                };
                listPersonnelBO.Add(bo);
            }
            return listPersonnelBO;
        }

        public static List<LangueBadge_BO> ToListLangueBadgeBO (this List<Langue_Badge> list)
        {
            if (list == null)
            {
                return null;
            }
            List<LangueBadge_BO> listLangueBadgeBO = new List<LangueBadge_BO>();
            foreach (Langue_Badge lanbad in list)
            {
                var bo = new LangueBadge_BO
                {
                    id_Badge=lanbad.id_Badge,
                    id_Langue=lanbad.id_Langue,
                    Traduction_Badge=lanbad.Traduction
                };
                listLangueBadgeBO.Add(bo);
            }
            return listLangueBadgeBO;
        }
        public static List<LangueCompetence_BO> ToListLangueCompetenceBO (this List<Langue_Competence> list)
        {
            if (list == null)
            {
                return null;
            }
            List<LangueCompetence_BO> listLangueCompetenceBO = new List<LangueCompetence_BO>();
            foreach (Langue_Competence lancom in list)
            {
                var bo = new LangueCompetence_BO
                {
                    id_Competence=lancom.id_Competence,
                    id_Langue=lancom.id_Langue,
                    Traduction=lancom.Traduction
                };
                listLangueCompetenceBO.Add(bo);
            }
            return listLangueCompetenceBO;
        }
        public static List<CategorieLangue_BO> ToListCategorieLangueBO (this List<Categorie_Langue> list)
        {
            if (list == null)
            {
                return null;
            }
            List<CategorieLangue_BO> listCategorieLangueBO = new List<CategorieLangue_BO>();
            foreach (Categorie_Langue catlan in list)
            {
                var bo = new CategorieLangue_BO
                {
                    id_Categorie=catlan.Id_Categorie,
                    id_Langue=catlan.id_Langue,
                    Traduction=catlan.Traduction
                };
                listCategorieLangueBO.Add(bo);
            }
            return listCategorieLangueBO;
        }
        /// <summary>
        /// Get all "Competences" from database
        /// </summary>
        /// <param name="list">list of db object Competence </param>
        /// <returns>list of Competence_BO </returns>
        public static List<Competence_BO> TolistCompetenceBO(this List<Competence> list)
        {
            if(list== null)
            {
                return null;
            }
            List<Competence_BO> listCompetenceBO = new List<Competence_BO>();
            foreach (Competence cpt in list)
            {
                var bo = new Competence_BO
                {
                    id_Competence=cpt.id_Competence,
                    id_Categorie=cpt.id_categorie,
                    id_Competence_ref=cpt.id_Competence_ref,
                    est_actif=cpt.est_actif
                };
                listCompetenceBO.Add(bo);
            }
            return listCompetenceBO;
        }

        public static List<Cours_BO> ToListCoursBO(this List<Cour> list)
        {
            if(list == null)
            {
                return null;
            }

            List < Cours_BO > listCoursBO = new List<Cours_BO>();
            using (var context = new MarcassinEntities())
            {
                foreach (Cour cour in list)
                {
                    var comp = from Competence in context.Competences
                               where Competence.id_Competence == cour.id_Competance
                               select new Competence_BO()
                               {
                                   id_Competence = Competence.id_Competence,
                                   id_Categorie = Competence.id_categorie,
                                   est_actif =Competence.est_actif,
                                   id_Competence_ref =  Competence.id_Competence_ref,
                               };

                    if(comp.count != 0)
                    {
                        comp = comp.ElementAt(0);
                    }

                    var bo = new Cours_BO
                    {
                        id_Cours = cour.id_Cours,
                        DateReu = cour.Date,
                        Lieu = cour.Lieu,
                        Statut = cour.Status,
                        Competence = comp,
                    };

                   listCoursBO.Add(bo);
                }
                return listCoursBO;
            }  
        }

    }
}
