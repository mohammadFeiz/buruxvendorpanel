import React,{Component} from "react";
import RVD from './../npm/react-virtual-dom/react-virtual-dom';
import Table from './../npm/aio-table/aio-table';
import AIODate from "../npm/aio-date/aio-date";
import SplitNumber from "../npm/aio-functions/split-number";
import AppContext from "../app-context";
import {Icon} from "@mdi/react";
import { mdiDotsHorizontal } from "@mdi/js";
export default class Salers extends Component{
    static contextType = AppContext;
    constructor(props){
        super(props);
        this.state = {items:[]}
    }
    componentDidMount(){
        let {state} = this.context;
        state.apis({
            api:'get_salers',
            name:'دریافت لیست سفارشات فروشندگان',
            callback:(items)=>{
                this.setState({items})
            }
        })
    }
    table_layout(){
        let {items} = this.state;
        return {
            flex:1,
            html:(
                <Table
                    templates={{
                        popup:(row)=>{
                            let {actions} = this.context;
                            return (
                                <Icon path={mdiDotsHorizontal} size={1} onClick={()=>{
                                    actions.openPopup('saler',row)
                                }}/>
                            )
                        }
                    }}
                    style={{height:'100%'}}
                    columns={[
                        {template:'popup'},
                        {title:'نام و نام خانوادگی',field:'row.name'},
                        {title:'کد فروشنده',field:'row.code'},
                        {title:'استان',field:'row.state'},
                        {title:'شهر',field:'row.city'},
                        {title:'شماره تلفن',field:'row.phone'},
                        {title:'وضعیت',field:'row.status'},
                    ]}
                    model={items}
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