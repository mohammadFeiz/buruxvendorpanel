import React,{Component} from "react";
import RVD from './../npm/react-virtual-dom/react-virtual-dom';
import Table from './../npm/aio-table/aio-table';
import AIODate from "../npm/aio-date/aio-date";
import SplitNumber from "../npm/aio-functions/split-number";
import AppContext from "../app-context";
export default class Orders extends Component{
    static contextType = AppContext;
    constructor(props){
        super(props);
        this.state = {items:[]}
    }
    componentDidMount(){
        let {apis} = this.context;
        apis({
            api:'get_orders',
            name:'دریافت لیست سفارشات',
            callback:(items)=>{
                this.setState({items})
            }
        })
    }
    getDelta(date){
        let delta = AIODate().getDelta({date,pattern:'{day} روز و {hour} ساعت پیش'})
        return delta
    }
    table_layout(){
        let {items} = this.state;
        return {
            flex:1,
            html:(
                <Table
                    templates={{
                        amount:(row)=>SplitNumber(row.amount),
                        date:(row)=>{
                            if(row.date){return AIODate().toJalali({date:row.date,pattern:'{year}/{month}/{day} {hour}:{minute}'})}
                        }
                    }}
                    style={{height:'100%'}}
                    columns={[
                        {title:'شماره سفارش',field:'row.number'},
                        {title:'فروشنده',field:'row.saler'},
                        {title:'آخرین وضعیت',field:'row.status'},
                        {title:'تاریخ تغییر وضعیت',field:'row.date',subtext:(row)=>this.getDelta(row.date),template:'date'},
                        {title:'استان',field:'row.province'},
                        {title:'مبلغ  (تومان)',field:'row.amount',template:'amount'},
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