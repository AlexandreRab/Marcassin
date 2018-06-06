using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using MarcassinLightBLL;
using MarcassinLightBO;

namespace MarcassinLight
{
    /// <summary>
    /// Logique d'interaction pour CreateCompetence.xaml
    /// </summary>
    public partial class CreateCompetence : Page
    {
        public List<Categorie_BO> listCategories;
        public CreateCompetence()
        {
            InitializeComponent();
            listCategories = Appel_List.GetCategories();
            C2.ItemsSource = listCategories;

        }

        private void Creation_Click(object sender, RoutedEventArgs e)
        {
            var comp = new Competence_BO
            {
                Competence = C1.Text,
                Categorie = C2.Text
            };
            MarcassinLightBLL.Create.CreateCompetence(comp);

            this.NavigationService.Navigate(new Uri("Competences.xaml", UriKind.Relative));

        }
    }
}
