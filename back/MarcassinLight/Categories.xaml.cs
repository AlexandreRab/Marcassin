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
    /// Interaction logic for Categories.xaml
    /// </summary>
    public partial class Categories : Page
    {
        public List<Categorie_BO> listCategories;
        public Categories()
        {
            InitializeComponent();
            listCategories = Appel_List.GetCategories();
            list.ItemsSource = listCategories;
        }

        private void Suppression_Click(object sender, RoutedEventArgs e)
        {

        }

        private void Creation_Click(object sender, RoutedEventArgs e)
        {
            NavigationService.Navigate(new CreateCompetence());
        }
    }
}
