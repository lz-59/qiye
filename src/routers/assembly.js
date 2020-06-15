import { Loadable } from '@@'

const Reg = Loadable(() => import('@/page/reg'))
const Login = Loadable(() => import('@/page/login'))
const Home = Loadable(() => import('@/layout/homeSwitch'))
const Homes = Loadable(() => import('@/page/home'))
const List = Loadable(() => import('@/page/list'))
const Elments = Loadable(() => import('@/page/elments'))

export {
  Reg,
  Login,
  Home,
  Homes,
  List,
  Elments,
}