import React, { Component } from "react";
import RVD from './../npm/react-virtual-dom/react-virtual-dom';
import Map from "../npm/map/map";
import storesrc from './../images/store.png';
import { Icon } from '@mdi/react';
import { mdiAccountCircle } from "@mdi/js";
import AppContext from "../app-context";
export default class OrderPopup extends Component {
    static contextType = AppContext
    constructor(props) {
        super(props);
        this.state = {
            bazargahDetails:{}
        }
    }
    componentDidMount() {
        let { apis } = this.context;
        let { saler } = this.props;
        apis({
            api: 'getBazargahDetailsBySaler',
            name: 'دریافت اطلاعات بازارگاه بر اساس فروشنده',
            parameter: saler,
            callback: (bazargahDetails) => this.setState({ bazargahDetails })
        })
    }
    keyValue_layout(key, value,conf) {
        return {
            ...conf,
            gap: 6,
            style: { height: 36 },
            row: [
                { html: key + ':', className: 'fs-12', align: 'v' },
                { html: value, className: 'fs-12 bold', align: 'v' }
            ]
        }
    }
    header_layout(name,code,phone,province,city,visitorName,visitorCode) {
        return {
            column: [
                {
                    row: [
                        this.keyValue_layout('نام و نام خانوادگی', `${name} (${code})`),
                        { flex: 1 },
                        this.keyValue_layout('شماره تلفن', phone),
                    ],
                },
                {
                    row: [
                        this.keyValue_layout('استان', province),
                        {flex:1},
                        this.keyValue_layout('شهر', city),
                    ],
                },
                {
                    row: [
                        this.keyValue_layout('نام ویزیتور', visitorName),
                        {flex:1},
                        this.keyValue_layout('کد ویزیتور', visitorCode),
                    ],
                }
            ]
        }
    }
    salerStatus_layout(status){
        return {
            column:[
                { html: 'وضعیت فروشنده', className: 'link-color bold fs-20' },
                { html:status}
            ]
        }
    }
    lineSplitter_layout() {
        return {
            size: 36, align: 'v',
            html: <div style={{ height: 1, background: '#ddd', width: '100%' }}></div>
        }
    }
    shop_layout(shopName,shopPhone,address,latitude,longitude) {
        return {
            size: 300,
            column: [
                { html: 'اطلاعات فروشگاه', className: 'link-color bold fs-20' },
                {
                    row:[
                        this.keyValue_layout('نام فروشگاه', shopName),
                        {flex:1},
                        this.keyValue_layout('تلفن ثابت', shopPhone),
                    ]            
                },
                {
                    size:300,
                    row:[
                        this.keyValue_layout('آدرس', address,{flex:1}),
                        {
                            flex: 1,
                            html: (
                                <Map
                                    apiKey={'web.b4368cdb3d0c40189e97cd027bb821bb'}
                                    latitude={latitude} longitude={longitude}
                                    style={{ width: '100%', height: '100%' }}
                                />
                            )
                        }
                    ]            
                }
            ]
        }
    }
    bazargahActivity_layout(bazargahDetails){
        let {activity = {}} = bazargahDetails;
        return {
            column: [
                { html: 'فعالیت در بازارگاه', className: 'link-color bold fs-20' },
                {size:12},
                {
                    childsProps:{style:{color:'#006C50',border:'1px solid',borderRadius:24,padding:'0 12px'}},
                    gap:12,
                    row:[
                        {html:`در انتظار ارسال ${activity.waitOfSend}`},
                        {html:`در انتظار تحویل ${activity.waitOfDelivery}`},
                        {html:`تحویل شده ${activity.delivered}`},
                        {html:`لغو شده ${activity.delivered}`},
                    ]            
                }
            ]
        }
    }
    bazargahSetting_layout(bazargahDetails){
        let {radius,zamaneAkhz} = bazargahDetails;
        return {
            column: [
                { html: 'فعالیت در بازارگاه', className: 'link-color bold fs-20' },
                {size:12},
                {
                    row:[
                        this.keyValue_layout('شعاع نمایش سفارشات', `${radius} km`),
                        {flex:1},
                        this.keyValue_layout('مدت زمان نمایش برای اخذ', `${zamaneAkhz} دقیقه`),
                    ]            
                }
            ]
        }
    }
    render() {
        let { saler } = this.props;
        let { name,code,phone,province,city,visitorName,visitorCode,status,shopName,shopPhone,address,latitude,longitude } = saler;
        let {bazargahDetails} = this.state;
        return (
            <RVD
                layout={{
                    className: 'p-12 ofy-auto',
                    style:{background:'#fff',height:'100%'},
                    column: [
                        this.header_layout(name,code,phone,province,city,visitorName,visitorCode),
                        this.lineSplitter_layout(),
                        this.salerStatus_layout(status),
                        this.lineSplitter_layout(),
                        this.shop_layout(shopName,shopPhone,address,latitude,longitude),
                        this.lineSplitter_layout(),
                        this.bazargahActivity_layout(bazargahDetails),
                        this.lineSplitter_layout(),
                        this.bazargahSetting_layout(bazargahDetails)
                    ]
                }}
            />
        )
    }
}