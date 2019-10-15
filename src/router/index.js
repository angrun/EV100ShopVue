import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Contact from '@/components/Contact';
import About from '@/components/About';
import Authorization from '@/components/Authorization';
import Item from '@/components/helpingComps/Item';
import Products from '@/components/Products';
import SingleProduct from '@/components/SingleProduct';
import Profile from '@/components/Profile';
import ShoppingCart from '@/components/ShoppingCart'
import ShippingInformation from '@/components/ShippingInformation';
import PayingInformation from '@/components/PayingInformation';
import Thanking from '@/components/Thanking';
import EditForm from '@/components/helpingComps/EditForm';
import Stats from '@/components/Stats';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },

    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },

    {
      path: '/about',
      name: 'About',
      component: About,
    },

    {
      path: '/authorization',
      name: 'Authorization',
      component: Authorization,
    },
    {
      path: '/item',
      name: 'Item',
      component: Item,
    },
    {
      path: '/products',
      name: 'Products',
      component: Products,
    },
    {
      path: '/singleProduct',
      name: 'SingleProduct',
      component: SingleProduct,
      props: true
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/shoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart,
    },
    {
      path: '/shippingInformation',
      name: 'ShippingInformation',
      component: ShippingInformation,
    },
    {
      path: '/payingInformation',
      name: 'PayingInformation',
      component: PayingInformation,
    },
    {
      path: '/thanking',
      name: 'Thanking',
      component: Thanking,
    },
    {
      path: '/editForm',
      name: 'EditForm',
      component: EditForm,
    },

    {
      path: '/stats',
      name: 'Stats',
      component: Stats,
    }
  ],
});
