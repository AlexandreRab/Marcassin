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
    /// Interaction logic for CreateCategorie.xaml
    /// </summary>
    public partial class CreateCategorie : Page
    {
        public List<Categorie_BO> listCategories;
        public CreateCategorie()
        {
            InitializeComponent();
            listCategories = Appel_List.GetCategories();
            C2.ItemsSource = listCategories;

        }

        private void Creation_Click(object sender, RoutedEventArgs e)
        {
            var cat = new Categorie_BO
            {
                Categorie_mere = C2.Text,
                Intitule = C1.Text,
            };
            MarcassinLightBLL.Create.CreateCategorie(cat);

            this.NavigationService.Navigate(new Uri("Categories.xaml", UriKind.Relative));

        }
    }
}
