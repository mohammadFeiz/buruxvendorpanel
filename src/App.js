import React,{Component} from 'react';
import RSA from './npm/react-super-app/react-super-app';
import RVD from './npm/react-virtual-dom/react-virtual-dom';
import AIOService from './npm/aio-service/aio-service';
import getResponse,{getMock} from './apis';
import AIOInput from './npm/aio-input/aio-input';
import OrderPopup from './popups/order-popup';
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
    this.state = {
      apis:AIOService({
        id:'bvpapis',
        getResponse,
        getMock
      }),
      userInfo:{name:'دانیال عنایتی'},
      order_status_dic:{}
    }
  }
  getContext(){
    return {
      ...this.state
    }
  }
  componentDidMount(){
    let {apis} = this.state;
    apis({
      api:'order_status_dic',
      callback:(order_status_dic)=>this.setState({order_status_dic})
    })
  }
  openPopup(key,parameter){
    let {addPopup} = this.state;
    if(key === 'order'){
      addPopup({
        type:'fullscreen',
        title:`شماره فاکتور ${parameter.number}`,
        body:()=><OrderPopup order={parameter}/>
      })
    }
  }
  render(){
    return (
      <AppContext.Provider value={this.getContext()}>
        <RSA
          id='bvp'
          navId='orders'
          navs={[
            {text:'سفارشات',icon:<Icon path={mdiListBoxOutline} size={1}/>,id:'orders'},
            {text:'فروشندگان',icon:<Icon path={mdiStoreOutline} size={1}/>,id:'salers'},
            {text:'مدیریت کاربران',icon:<Icon path={mdiAccount} size={1}/>,id:'user manager'}
          ]}
          navHeader={()=>{
            return <img className='p-12 p-t-48' style={{boxSizing:'border-box'}} src={bmsrc} width='100%'/>
          }}
          body={({navId})=>{
            // return (
            //   <OrderPopup
            //     order={{buyer:'محمد فیض',address:'تهران شیخ هایی شمالی',latitude:35.699739,longitude:51.338097,phone:'09123534314',number:'6544634',saler:'عنایتی',status:'0',date:new Date().getTime() - (25 * 60 * 60 * 1000),province:'تهران',city:'تهران',amount:123665000}}
            //   />
            // )
            if(navId === 'orders'){return <Orders/>}
            if(navId === 'salers'){return <Salers/>}
          }}
          header={()=><Header/>}
          getState={({addPopup,removePopup})=>{
            this.setState({addPopup,removePopup})
          }}
        />
      </AppContext.Provider>
    )
  }
}


class Header extends Component{
  static contextType = AppContext;
  render(){
    let {userInfo,logout} = this.context;
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
                  text={userInfo.name}
                />
              )
            }
          ]
        }}
      />
    )
  }
}