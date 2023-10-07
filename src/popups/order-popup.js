import React, { Component } from "react";
import RVD from './../npm/react-virtual-dom/react-virtual-dom';
import AIOMap from "../npm/aio-map/aio-map";
import storesrc from './../images/store.png';
import { Icon } from '@mdi/react';
import { mdiAccountCircle,mdiMapMarker,mdiMarker,mdiOfficeBuilding, mdiStar } from "@mdi/js";
import AppContext from "../app-context";
export default class OrderPopup extends Component {
    static contextType = AppContext
    constructor(props) {
        super(props);
        this.state = {
            order:props.order,
            salers: []
        }
    }
    componentDidMount() {
        let { state } = this.context;
        let { order } = this.state;
        let { latitude, longitude } = order;
        state.apis({
            api: 'get_salers_by_coords',
            name: 'دریافت لیست فروشندگان بر اساس موقعیت',
            parameter: { latitude, longitude },
            callback: (salers) => this.setState({ salers })
        })
    }
    keyValue_layout(key, value) {
        return {
            gap: 6,
            style: { height: 36 },
            row: [
                { html: key + ':', className: 'fs-12', align: 'v' },
                { html: value, className: 'fs-12 bold', align: 'v' }
            ]
        }
    }
    header_layout(buyer, phone, amount) {
        return {
            column: [
                {
                    row: [
                        this.keyValue_layout('نام و نام خانوادگی خریدار', buyer),
                        { flex: 1 },
                        this.keyValue_layout('شماره تلفن', phone),
                    ],
                },
                {
                    row: [
                        this.keyValue_layout('مبلغ سفارش', amount),
                    ],
                }
            ]
        }
    }
    lineSplitter_layout() {
        return {
            size: 36, align: 'v',
            html: <div style={{ height: 1, background: '#ddd', width: '100%' }}></div>
        }
    }
    delivery_layout(province, city, address, latitude, longitude) {
        return {
            size: 300,
            column: [
                { html: 'محل تحویل', className: 'link-color bold fs-20' },
                {
                    flex: 1,
                    row: [
                        {
                            flex: 1,
                            column: [
                                this.keyValue_layout('استان', province),
                                this.keyValue_layout('شهر', city),
                                this.keyValue_layout('آدرس', address),
                            ]
                        },
                        {
                            flex: 1,
                            html: (
                                <AIOMap
                                    apiKeys={{
                                        map:'web.68bf1e9b8be541f5b14686078d1e48d2',
                                        service:'service.30c940d0eff7403f9e8347160e384cc9'
                                    }}
                                    latitude={latitude}
                                    longitude={longitude}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            )
                        }
                    ]
                }
            ]
        }
    }
    status_layout(status) {
        let { state } = this.context;
        let { order_status_dic = {} } = state;
        let keys = Object.keys(order_status_dic);
        let statusItem = order_status_dic[status] || []
        return {
            size: 200,
            column: [
                { html: 'وضعیت سفارش', className: 'link-color bold fs-20' },
                { size: 12 },
                {
                    row: keys.map((key) => this.statusButton_layout(key, status))
                },
                { size: 12 },
                {
                    style: { background: '#006C5020' },
                    className: 'p-12',
                    column: [
                        { html: statusItem[1], style: { color: '#006C50' }, className: 'fs-14 bold' },
                        { html: statusItem[2], className: 'fs-12' }
                    ]
                }
            ]
        }
    }
    statusButton_layout(key, status) {
        let { state,actions } = this.context;
        let { order_status_dic = {} } = state;
        let { order } = this.state;
        let active = key === status;
        return {
            size: 96,
            onClick: async () => {
                let res = await actions.changeOrder(order,{status:key});
                if(res !== false){this.setState({order:res})}
            },
            column: [
                {
                    align: 'vh',
                    html: (
                        <div style={{ border: '1px solid', background: active ? '#2BBA8F' : 'none' }} className='w-24 h-24 br-100'></div>
                    )
                },
                {
                    align: 'vh',
                    html: order_status_dic[key][0], className: 'fs-12'
                }
            ]
        }
    }
    salers_map_layout(status,latitude,longitude){
        if(status !== '0'){return false}
        let {salers = []} = this.state;
        let markers = [{
            latitude, longitude, 
            size:36,
            color:'dodgerblue',
            html:<Icon path={mdiStar} style={{color:'orange'}} size={2}/>,
            text:<div style={{fontFamily:'IRANSans-light',fontWeight:'bold',color:'dodgerblue',fontSize:14,background:'#ffffff90'}}>{'موقعیت سفارش'}</div>
        }]
        markers = markers.concat(salers.map(({ latitude, longitude, name, phone }) => {
            return {
                latitude, longitude, 
                size:20,
                color:'red',
                html:<div style={{boxShadow:'0 0 0 6px red',borderRadius:'100%',width:12,height:12}}></div>,
                text:<div style={{fontFamily:'IRANSans-light',fontWeight:'bold',color:'dodgerblue',fontSize:10,background:'#ffffff90'}}>{name}</div>
            }
        }))
        return {
            flex:1,
            html:(
                <AIOMap
                    apiKeys={{
                        map:'web.68bf1e9b8be541f5b14686078d1e48d2',
                        service:'service.30c940d0eff7403f9e8347160e384cc9'
                    }}
                    showMarker={false}
                    onZoom={true}
                    latitude={latitude}
                    longitude={longitude}
                    style={{ width: '100%', height: 360 }}
                    getActions={({flyTo})=>{
                        this.flyTo = flyTo;
                    }}
                    markers={markers}
                />
            )
        }
    }
    salers_layout() {
        let { salers } = this.state;

        return {
            flex:1,
            style: { height: 360 },
            column: [
                { className: 'ofy-auto', flex: 1, column: salers.map((o) => this.saler_layout(o)) }
            ]
        }
    }
    saler_layout({ latitude,longitude,name, phone, distance }) {
        return {
            className: 'fs-14', size: 48,
            onClick:()=>{
                if(this.flyTo){this.flyTo(latitude,longitude,18)}
            },
            row: [
                { html: <Icon path={mdiAccountCircle} size={1.2} />, align: 'vh' },
                { size: 6 },
                {
                    flex: 1, align: 'v',
                    column: [
                        { html: name, className: 'bold' },
                        { html: phone }
                    ]
                },
                { html: `${distance.toFixed(1)} کیلومتر `, align: 'v' ,style:{fontSize:12}},
                { size: 6 },
                {
                    align: 'vh',
                    html: (
                        <button
                            className='button-1' style={{height:24,fontSize:12}}
                        >اخذ</button>
                    )
                }
            ]
        }
    }
    render() {
        let { order } = this.state;
        let { buyer, phone, amount, province, city, address, latitude, longitude, status } = order;
        return (
            <RVD
                layout={{
                    className: 'p-12 ofy-auto',
                    style:{background:'#fff',height:'100%'},
                    column: [
                        this.header_layout(buyer, phone, amount),
                        this.lineSplitter_layout(),
                        this.delivery_layout(province, city, address, latitude, longitude),
                        this.status_layout(status),
                        {
                            show:status === '0',
                            column:[
                                { html: 'لیست فروشندگان به ترتیب فاصله تا محل تحویل سفارش', className: 'link-color bold fs-20' },
                                {size:12},
                                {
                                    row:[
                                        this.salers_layout(),
                                        {size:12},
                                        this.salers_map_layout(status,latitude,longitude)
                                    ]
                                }
                            ]
                        },
                        {size:24}
                    ]
                }}
            />
        )
    }
}