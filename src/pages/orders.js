import React,{Component} from "react";
import RVD from './../npm/react-virtual-dom/react-virtual-dom';
import Table from './../npm/aio-table/aio-table';
import AIODate from "../npm/aio-date/aio-date";
import SplitNumber from "../npm/aio-functions/split-number";
import AppContext from "../app-context";
import { mdiDotsHorizontal } from "@mdi/js";
import {Icon} from '@mdi/react';
export default class Orders extends Component{
    static contextType = AppContext;
    getDelta(date){
        let delta = AIODate().getDelta({date,pattern:'{day} روز و {hour} ساعت پیش'})
        return delta
    }
    table_layout(){
        let {state} = this.context;
        let {orders} = state;
        return {
            flex:1,
            html:(
                <Table
                    templates={{
                        amount:(row)=>SplitNumber(row.amount),
                        date:(row)=>{
                            if(row.date){return AIODate().toJalali({date:row.date,pattern:'{year}/{month}/{day} {hour}:{minute}'})}
                        },
                        popup:(row)=>{
                            let {actions} = this.context;
                            return (
                                <Icon path={mdiDotsHorizontal} size={1} onClick={()=>{
                                    actions.openPopup('order',row)
                                }}/>
                            )
                        }
                    }}
                    style={{height:'100%'}}
                    columns={[
                        {template:'popup'},
                        {title:'شماره سفارش',field:'row.number'},
                        {title:'فروشنده',field:'row.saler'},
                        {title:'آخرین وضعیت',field:'row.status'},
                        {title:'تاریخ تغییر وضعیت',field:'row.date',subtext:(row)=>this.getDelta(row.date),template:'date'},
                        {title:'استان',field:'row.province'},
                        {title:'مبلغ  (تومان)',field:'row.amount',template:'amount'},
                    ]}
                    model={orders}
                />
            )
        }
    }
    render(){
        return (
            <RVD
                layout={{
                    className:'h-100',
                    column:[
                        this.table_layout()
                    ]
                }}
            />
        )
    }
}