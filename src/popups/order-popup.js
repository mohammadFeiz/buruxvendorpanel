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
            salers: []
        }
    }
    componentDidMount() {
        let { apis } = this.context;
        let { order } = this.props;
        let { latitude, longitude } = order;
        apis({
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
        let { salers } = this.state;
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
                                <Map
                                    apiKey={'web.b4368cdb3d0c40189e97cd027bb821bb'}
                                    latitude={latitude}
                                    longitude={longitude}
                                    style={{ width: '100%', height: '100%' }}
                                    points={salers.map(({ latitude, longitude, name, phone }) => {
                                        return {
                                            latitude, longitude, icon: `
                                            <div style="position:absolute;left:-9px;top:-9px;width:30px;height:30px;display:flex;align-items:center;justify-content:center;">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xml:space="preserve">
                                                <defs>
                                                </defs>
                                                <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
                                                    <path d="M 9 33.294 l 0 46.274 c 0 1.576 1.278 2.854 2.854 2.854 h 66.293 c 1.576 0 2.854 -1.278 2.854 -2.854 l 0 -46.274 l 0 -13.301 c 0 -1.576 -1.278 -2.854 -2.854 -2.854 H 11.854 C 10.278 17.14 9 18.417 9 19.993 L 9 33.294 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(64,89,107); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                                    <path d="M 69.335 43.125 H 54.623 c -1.176 0 -2.13 0.954 -2.13 2.13 v 33.307 h 18.972 V 45.255 C 71.465 44.079 70.511 43.125 69.335 43.125 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(214,224,235); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                                    <path d="M 41.403 68.023 H 20.565 c -1.121 0 -2.03 -0.909 -2.03 -2.03 V 45.155 c 0 -1.121 0.909 -2.03 2.03 -2.03 h 20.839 c 1.121 0 2.03 0.909 2.03 2.03 v 20.839 C 43.433 67.115 42.524 68.023 41.403 68.023 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(214,224,235); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                                    <path d="M 9.2 33.294 H 8.8 c -4.86 0 -8.8 -3.94 -8.8 -8.8 l 0 -3.054 c 5.481 -1.841 11.432 -2.016 18 0 v 3.054 C 18 29.354 14.06 33.294 9.2 33.294 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(231,78,58); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                                    <path d="M 27.2 33.294 h -0.4 c -4.86 0 -8.8 -3.94 -8.8 -8.8 V 21.44 c 6.388 -1.301 12.427 -1.433 18 0 v 3.054 C 36 29.354 32.06 33.294 27.2 33.294 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(176,182,188); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                                    <path d="M 80.8 33.294 h 0.4 c 4.86 0 8.8 -3.94 8.8 -8.8 V 21.44 c -5.589 -1.483 -11.652 -1.253 -18 0 v 3.054 C 72 29.354 75.94 33.294 80.8 33.294 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(231,78,58); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                                    <path d="M 62.8 33.294 h 0.4 c 4.86 0 8.8 -3.94 8.8 -8.8 V 21.44 c -6 -2.558 -12 -2.558 -18 0 v 3.054 C 54 29.354 57.94 33.294 62.8 33.294 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(176,182,188); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                                    <path d="M 36 21.44 c 0.929 -3.982 0.861 -8.649 0 -13.861 H 23.225 c -3.432 4.62 -5.173 9.241 -5.225 13.861 H 36 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(214,224,235); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                                    <polygon points="0,21.44 11.39,7.58 23.23,7.58 18,21.44 " style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,112,88); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                                                    <path d="M 54 21.44 c -2.167 -4.489 -1.851 -9.128 0 -13.861 h 12.775 c 4.264 5.189 6.219 9.858 5.225 13.861 H 54 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(214,224,235); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                                    <polygon points="90,21.44 78.61,7.58 66.78,7.58 72,21.44 " style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,112,88); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                                                    <path d="M 45.2 33.294 h -0.4 c -4.86 0 -8.8 -3.94 -8.8 -8.8 V 21.44 c 6 -2.558 12 -2.558 18 0 v 3.054 C 54 29.354 50.06 33.294 45.2 33.294 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(231,78,58); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
                                                    <polygon points="36,7.58 46.77,7.58 54,7.58 54,21.44 36,21.44 " style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,112,88); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
                                                </g>
                                            </svg>
                                            </div>
                                            `
                                        }
                                    })}
                                />
                            )
                        }
                    ]
                }
            ]
        }
    }
    status_layout(status) {
        let { order_status_dic = {} } = this.context;
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
        let { order_status_dic = {} } = this.context;
        let { changeStatus } = this.props;
        let active = key === status;
        return {
            size: 96,
            onClick: () => changeStatus(key),
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
    salers_layout() {
        let { salers } = this.state;

        return {
            style: { maxHeight: 300 },
            column: [
                { html: 'لیست فروشندگان به ترتیب فاصله تا محل تحویل سفارش', className: 'link-color bold fs-20' },
                { className: 'ofy-auto', flex: 1, column: salers.map((o) => this.saler_layout(o)) }
            ]
        }
    }
    saler_layout({ name, phone, distance }) {
        return {
            className: 'fs-14', size: 48,
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
                { html: `${distance.toFixed(1)} کیلومتر تا محل تحویل سفارش`, align: 'v' },
                { size: 6 },
                {
                    align: 'vh',
                    html: (
                        <button
                            className='button-1'
                        >اخذ</button>
                    )
                }
            ]
        }
    }
    render() {
        let { order } = this.props;
        let { buyer, phone, amount, province, city, address, latitude, longitude, status } = order;
        return (
            <RVD
                layout={{
                    className: 'p-12 ofy-auto',
                    column: [
                        this.header_layout(buyer, phone, amount),
                        this.lineSplitter_layout(),
                        this.delivery_layout(province, city, address, latitude, longitude),
                        this.status_layout(status),
                        this.salers_layout()
                    ]
                }}
            />
        )
    }
}