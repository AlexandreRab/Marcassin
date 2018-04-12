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
            }
            return listPersonnelBO;
        }
        public static List<LangueBadge_BO> ToListLangueBadgeBO (this List<LangueBadge> list)
        {
            if (list == null)
            {
                return null;
            }
            List<LangueBadge_BO> listLangueBadgeBO = new List<LangueBadge_BO>();
            foreach (LangueBadge lanbad in list)
            {
                var bo = new LangueBadge_BO
                {
                    id_Badge=lanbad.id_Badge,
                    id_Langue=lanbad.id_Langue,
                    traduction_badge=lanbad.traduction_badge
                };
            }
            return listLangueBadgeBO;
        }
        public static List<LangueCompetence_BO> ToListLangueCompetenceBO (this List<LangueCompetence> list)
        {
            if (list == null)
            {
                return null;
            }
            List<LangueCompetence_BO> listLangueCompetenceBO = new List<LangueCompetence_BO>();
            foreach (LangueCompetence lancom in list)
            {
                var bo = new LangueCompetence_BO
                {
                    id_Competence=lancom.id_Competence,
                    id_Langue=lancom.id_Langue,
                    traduction_Competence=lancom.traduction_Competence
                };
            }
            return listLangueCompetenceBO;
        }
        public static List<CategorieLangue_BO> ToListCategorieLangueBO (this List<CategorieLangue> list)
        {
            if (list == null)
            {
                return null;
            }
            List<CategorieLangue_BO> listCategorieLangueBO = new List<CategorieLangue_BO>();
            foreach (CategorieLangue catlan in list)
            {
                var bo = new CategorieLangue_BO
                {
                    id_Categorie=catlan.id_Categorie,
                    id_Langue=catlan.id_Langue,
                    traduction_Categorie=catlan.traduction_Categorie
                };
            }
            return listCategorieLangueBO;
        }
        public static List<UtilisateurBadge_BO> ToListUtilisateurBadgeBO (this List<UtilisateurBadge> list)
        {
            if (list == null)
            {
                return null;
            }
            List<UtilisateurBadge_BO> listUtilisateurBadgeBO = new List<UtilisateurBadge_BO>();
            foreach (UtilisateurBadge utibad in list)
            {
                var bo = new UtilisateurBadge_BO
                {
                    id_Utilisateur=utibad.id_Utilisateur,
                    id_Badge=utibad.id_Badge
                };
            }
            return listUtilisateurBadgeBO;
        }
    }
}
