import React,{Component} from "react";
import RVD from './../npm/react-virtual-dom/react-virtual-dom';
import Map from "../npm/map/map";
import AppContext from "../app-context";
export default class OrderPopup extends Component{
    static contextType = AppContext
    keyValue_layout(key,value){
        return {
            gap:6,
            style:{height:36},
            row:[
                {html:key + ':',className:'fs-12',align:'v'},
                {html:value,className:'fs-12 bold',align:'v'}
            ]
        }
    }
    header_layout(buyer,phone,amount){
        return {
            column:[
                {
                    row:[
                        this.keyValue_layout('نام و نام خانوادگی خریدار',buyer),
                        {flex:1},
                        this.keyValue_layout('شماره تلفن',phone), 
                    ],
                },
                {
                    row:[
                        this.keyValue_layout('مبلغ سفارش',amount),
                    ],
                }
            ]
        }
    }
    lineSplitter_layout(){
        return {
            size:36,align:'v',
            html:<div style={{height:1,background:'#ddd',width:'100%'}}></div>
        }
    }
    delivery_layout(province,city,address,latitude,longitude){
        return {
            size:200,
            column:[
                {html:'محل تحویل',className:'link-color bold'},
                {
                    flex:1,
                    row:[
                        {
                            flex:1,
                            column:[
                                this.keyValue_layout('استان',province),
                                this.keyValue_layout('شهر',city),
                                this.keyValue_layout('آدرس',address),
                            ]
                        },
                        {
                            flex:1,
                            html:(
                                <Map
                                    apiKey={'web.b4368cdb3d0c40189e97cd027bb821bb'}
                                    latitude={latitude}
                                    longitude={longitude}
                                    style={{width:'100%',height:'100%'}}
                                />
                            )
                        }
                    ]
                }
            ]
        }
    }
    status_layout(status){
        let {order_status_dic = {}} = this.context;
        let keys = Object.keys(order_status_dic);
        return {
            size:200,
            column:[
                {html:'وضعیت سفارش',className:'link-color bold'},
                {size:12},
                {
                    row:keys.map((key)=>this.statusButton_layout(key,status))
                },
                {size:12},
                {
                    style:{background:'#006C5020'},
                    className:'p-12',
                    column:[
                        {html:order_status_dic[status][1],style:{color:'#006C50'},className:'fs-14 bold'},
                        {html:order_status_dic[status][2],className:'fs-12'}
                    ]
                }
            ]
        }
    }
    statusButton_layout(key,status){
        let {order_status_dic = {}} = this.context;
        let {changeStatus} = this.props;
        let active = key === status;
        return {
            size:96,
            onClick:()=>changeStatus(key),
            column:[
                {
                    align:'vh',
                    html:(
                        <div style={{border:'1px solid',background:active?'#2BBA8F':'none'}} className='w-24 h-24 br-100'></div>
                    )
                },
                {
                    align:'vh',
                    html:order_status_dic[key][0],className:'fs-12'
                }
            ]
        }
    }
    render(){
        let {order} = this.props;
        let {buyer,phone,amount,province,city,address,latitude,longitude,status} = order;
        return (
            <RVD
                layout={{
                    className:'p-12',
                    column:[
                        this.header_layout(buyer,phone,amount),
                        this.lineSplitter_layout(),
                        this.delivery_layout(province,city,address,latitude,longitude),
                        this.status_layout(status)
                    ]
                }}
            />
        )
    }
}