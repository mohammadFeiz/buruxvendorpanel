import React,{Component} from 'react';
import RSA from './npm/react-super-app/react-super-app';
import RVD from './npm/react-virtual-dom/react-virtual-dom';
import AIOService from './npm/aio-service/aio-service';
import getResponse,{getMock} from './apis';
import AIOInput from './npm/aio-input/aio-input';
import OrderPopup from './popups/order-popup';
import SalerPopup from './popups/saler-popup';
import bmsrc from './images/bm.png';
import {Icon} from '@mdi/react';
import Orders from './pages/orders';
import Salers from './pages/salers';
import {mdiListBoxOutline,mdiStoreOutline,mdiAccountCircle,mdiExitToApp,mdiAccount} from '@mdi/js';
import AppContext from './app-context';
import './App.css';

export default class App extends Component{
  render(){
    return <BVP/>
  }
}

class BVP extends Component{
  constructor(props){
    super(props);
    this.baseUrl = 'https://localhost:44340'
    //this.baseUrl = 'https://localhost:44340'
    this.state = {
      rsa:new RSA({
        id:'bvp',rtl:true,
        navId:'orders',
        AppContext,
        navs:[
          {text:'سفارشات',icon:<Icon path={mdiListBoxOutline} size={1}/>,id:'orders'},
          {text:'فروشندگان',icon:<Icon path={mdiStoreOutline} size={1}/>,id:'salers'},
          {text:'مدیریت کاربران',icon:<Icon path={mdiAccount} size={1}/>,id:'user manager'}
        ],
        navHeader:()=>{
          return <img className='p-12 p-t-48' style={{boxSizing:'border-box'}} src={bmsrc} width='100%' alt=''/>
        },
        initialState:{
          baseUrl:this.baseUrl,
          apis:AIOService({id:'bvpapis',getResponse,getMock,baseUrl:this.baseUrl}),
          userInfo:{name:'دانیال عنایتی'},
          order_status_dic:{},
          orders:[]    
        },
        actions:{
          openPopup:this.openPopup.bind(this),
          changeOrder:this.changeOrder.bind(this)
        },
        body:({navId})=>{
          if(navId === 'orders'){return <Orders/>}
          if(navId === 'salers'){return <Salers/>}
        },
        headerContent:()=><Header/>
      }),
      
      
    }
  }
  componentDidMount(){
    let {rsa} = this.state;
    rsa.state.apis({
      api:'order_status_dic',
      callback:(order_status_dic)=>rsa.SetState('order_status_dic',order_status_dic)
    })
    rsa.state.apis({api:'get_orders',name:'دریافت لیست سفارشات',callback:(orders)=>rsa.SetState('orders',orders)})
  }
  changeOrder(order,changeObject){
    let {rsa} = this.state;
    let {orders} = rsa.state;
    let newOrder = {...order,...changeObject};
    let newOrders = orders.map((o)=>o.id === order.id?newOrder:o);
    rsa.SetState('orders',newOrders)
    return newOrder
  }
  openPopup(key,parameter){
    let {rsa} = this.state;
    if(key === 'order'){
      rsa.addModal({
        position:'right',
        attrs:{style:{width:'90vw'}},
        header:{title:`شماره فاکتور ${parameter.number}`},
        body:{render:()=><OrderPopup order={parameter}/>}
      })
    }
    if(key === 'saler'){
      rsa.addModal({
        position:'fullscreen',
        //header:{title:`شماره فاکتور ${parameter.number}`},
        body:{render:()=><SalerPopup saler={parameter}/>}
      })
    }
  }
  render(){
    let {rsa} = this.state;
    return rsa.render()
  }
}


class Header extends Component{
  static contextType = AppContext;
  render(){
    let {state,logout} = this.context;
    return (
      <RVD
        layout={{
          row:[
            {flex:1},
            {
              html:(
                <AIOInput
                  type='select'
                  before={<Icon path={mdiAccountCircle} size={1} />}
                  options={[
                    {text:'خروج از حساب کاربری',onClick:()=>logout(),before:<Icon path={mdiExitToApp} size={.7}/>}
                  ]}
                  text={state.userInfo.name}
                />
              )
            }
          ]
        }}
      />
    )
  }
}