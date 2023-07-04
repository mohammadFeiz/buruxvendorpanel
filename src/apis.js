import Axios from 'axios';

export default function getResponse(){
    return {
        order_status_dic(){
            return {mock:true}
        },
        get_orders(){
            return {mock:true}
        },
        get_salers_by_coords(){
            return {mock:true}
        },
        get_salers(){
            return {mock:true}
        },
        getBazargahDetailsBySaler(){
            return {mock:true}
        }
    }
}


export function getMock(){
    return {
        get_orders(){
            return [
                {
                    buyer:'محمد فیض',address:'تهران شیخ هایی شمالی',latitude:35.699739,longitude:51.338097,
                    phone:'09123534314',number:'6544634',saler:'عنایتی',status:'0',
                    date:new Date().getTime() - (25 * 60 * 60 * 1000),province:'تهران',city:'تهران',amount:123665000
                },
                {
                    buyer:'محمد فیض',address:'تهران شیخ هایی شمالی',latitude:35.699739,longitude:51.338097,
                    phone:'09123534314',number:'6544634',saler:'عنایتی',status:'0',
                    date:new Date().getTime() - (25 * 60 * 60 * 1000),province:'تهران',city:'تهران',amount:123665000
                },
                {
                    buyer:'محمد فیض',address:'تهران شیخ هایی شمالی',latitude:35.699739,longitude:51.338097,
                    phone:'09123534314',number:'6544634',saler:'عنایتی',status:'0',
                    date:new Date().getTime() - (25 * 60 * 60 * 1000),province:'تهران',city:'تهران',amount:123665000
                },
                {
                    buyer:'محمد فیض',address:'تهران شیخ هایی شمالی',latitude:35.699739,longitude:51.338097,
                    phone:'09123534314',number:'6544634',saler:'عنایتی',status:'0',
                    date:new Date().getTime() - (25 * 60 * 60 * 1000),province:'تهران',city:'تهران',amount:123665000
                },
                {
                    buyer:'محمد فیض',address:'تهران شیخ هایی شمالی',latitude:35.699739,longitude:51.338097,
                    phone:'09123534314',number:'6544634',saler:'عنایتی',status:'0',
                    date:new Date().getTime() - (25 * 60 * 60 * 1000),province:'تهران',city:'تهران',amount:123665000
                },
                {
                    buyer:'محمد فیض',address:'تهران شیخ هایی شمالی',latitude:35.699739,longitude:51.338097,
                    phone:'09123534314',number:'6544634',saler:'عنایتی',status:'0',
                    date:new Date().getTime() - (25 * 60 * 60 * 1000),province:'تهران',city:'تهران',amount:123665000
                },
                {
                    buyer:'محمد فیض',address:'تهران شیخ هایی شمالی',latitude:35.699739,longitude:51.338097,
                    phone:'09123534314',number:'6544634',saler:'عنایتی',status:'0',
                    date:new Date().getTime() - (25 * 60 * 60 * 1000),province:'تهران',city:'تهران',amount:123665000
                },
                {
                    buyer:'محمد فیض',address:'تهران شیخ هایی شمالی',latitude:35.699739,longitude:51.338097,
                    phone:'09123534314',number:'6544634',saler:'عنایتی',status:'0',
                    date:new Date().getTime() - (25 * 60 * 60 * 1000),province:'تهران',city:'تهران',amount:123665000
                },
                {
                    buyer:'محمد فیض',address:'تهران شیخ هایی شمالی',latitude:35.699739,longitude:51.338097,
                    phone:'09123534314',number:'6544634',saler:'عنایتی',status:'0',
                    date:new Date().getTime() - (25 * 60 * 60 * 1000),province:'تهران',city:'تهران',amount:123665000
                },
                {
                    buyer:'محمد فیض',address:'تهران شیخ هایی شمالی',latitude:35.699739,longitude:51.338097,
                    phone:'09123534314',number:'6544634',saler:'عنایتی',status:'0',
                    date:new Date().getTime() - (25 * 60 * 60 * 1000),province:'تهران',city:'تهران',amount:123665000
                },
                {
                    buyer:'محمد فیض',address:'تهران شیخ هایی شمالی',latitude:35.699739,longitude:51.338097,
                    phone:'09123534314',number:'6544634',saler:'عنایتی',status:'0',
                    date:new Date().getTime() - (25 * 60 * 60 * 1000),province:'تهران',city:'تهران',amount:123665000
                },
                {
                    buyer:'محمد فیض',address:'تهران شیخ هایی شمالی',latitude:35.699739,longitude:51.338097,
                    phone:'09123534314',number:'6544634',saler:'عنایتی',status:'0',
                    date:new Date().getTime() - (25 * 60 * 60 * 1000),province:'تهران',city:'تهران',amount:123665000
                },
                {
                    buyer:'محمد فیض',address:'تهران شیخ هایی شمالی',latitude:35.699739,longitude:51.338097,
                    phone:'09123534314',number:'6544634',saler:'عنایتی',status:'0',
                    date:new Date().getTime() - (25 * 60 * 60 * 1000),province:'تهران',city:'تهران',amount:123665000
                },
                {
                    buyer:'محمد فیض',address:'تهران شیخ هایی شمالی',latitude:35.699739,longitude:51.338097,
                    phone:'09123534314',number:'6544634',saler:'عنایتی',status:'0',
                    date:new Date().getTime() - (25 * 60 * 60 * 1000),province:'تهران',city:'تهران',amount:123665000
                },
                {
                    buyer:'محمد فیض',address:'تهران شیخ هایی شمالی',latitude:35.699739,longitude:51.338097,
                    phone:'09123534314',number:'6544634',saler:'عنایتی',status:'0',
                    date:new Date().getTime() - (25 * 60 * 60 * 1000),province:'تهران',city:'تهران',amount:123665000
                },
                {
                    buyer:'محمد فیض',address:'تهران شیخ هایی شمالی',latitude:35.699739,longitude:51.338097,
                    phone:'09123534314',number:'6544634',saler:'عنایتی',status:'0',
                    date:new Date().getTime() - (25 * 60 * 60 * 1000),province:'تهران',city:'تهران',amount:123665000
                },
                {
                    buyer:'محمد فیض',address:'تهران شیخ هایی شمالی',latitude:35.699739,longitude:51.338097,
                    phone:'09123534314',number:'6544634',saler:'عنایتی',status:'0',
                    date:new Date().getTime() - (25 * 60 * 60 * 1000),province:'تهران',city:'تهران',amount:123665000
                },
                {
                    buyer:'محمد فیض',address:'تهران شیخ هایی شمالی',latitude:35.699739,longitude:51.338097,
                    phone:'09123534314',number:'6544634',saler:'عنایتی',status:'0',
                    date:new Date().getTime() - (25 * 60 * 60 * 1000),province:'تهران',city:'تهران',amount:123665000
                }
            ]
        },
        order_status_dic(){
            return {
                '0':[
                    'ثبت در بازارگاه',
                    'سفارش در فروشگاه ثبت شده و در انتظار اخذ است',
                    'در صورت عدم اخد تا ۱۲ ساعت اقدام به تماس با فروشنده های اطراف سفارش کنید و به صورت دستی در لیست زیر برای فروشنده مربوطه اخذ کنید'
                ],
                '1':[
                    'اخذ شد',
                    'سفارش اخذ شده و در انتظار ارسال فروشنده است',
                    'در صورت عدم ارسال تا ۶ ساعت اقدام به تماس با فروشنده کنید و یا به صورت دستی وضعیت سفارش را به بروزرسانی کنید'
                ],
                '2':[
                    'ارسال از فروشگاه',
                    'سفارش از فروشگاه ارسال شده و در انتظار تحویل به خریدار است',
                    'در صورت عدم ارسال تا ۶ ساعت اقدام به تماس با فروشنده کنید و یا به صورت دستی وضعیت سفارش را به بروزرسانی کنید'
                ],
                '3':[
                    'تحویل به خریدار',
                    'سفارش به خریدار تحویل شده',
                    'سفارش به خریدار تحویل شده'
                ],
                '4':[
                    'لغو شده',
                    'سفارش لغو شده است',
                    'سفارش لفو شده است'
                ],
            }
        },
        get_salers_by_coords(){
            return [
                {name:'محمد رضا پور نامدار',phone:'09123534314',distance:3.5,latitude:35.699720 + getRandom(),longitude:51.338080 + getRandom()},
                {name:'محمد رضا پور نامدار',phone:'09123534314',distance:3.5,latitude:35.699720 + getRandom(),longitude:51.338080 + getRandom()},
                {name:'محمد رضا پور نامدار',phone:'09123534314',distance:3.5,latitude:35.699720 + getRandom(),longitude:51.338080 + getRandom()},
                {name:'محمد رضا پور نامدار',phone:'09123534314',distance:3.5,latitude:35.699720 + getRandom(),longitude:51.338080 + getRandom()},
                {name:'محمد رضا پور نامدار',phone:'09123534314',distance:3.5,latitude:35.699720 + getRandom(),longitude:51.338080 + getRandom()},
                {name:'محمد رضا پور نامدار',phone:'09123534314',distance:3.5,latitude:35.699720 + getRandom(),longitude:51.338080 + getRandom()},
                {name:'محمد رضا پور نامدار',phone:'09123534314',distance:3.5,latitude:35.699720 + getRandom(),longitude:51.338080 + getRandom()},
                {name:'محمد رضا پور نامدار',phone:'09123534314',distance:3.5,latitude:35.699720 + getRandom(),longitude:51.338080 + getRandom()},
                {name:'محمد رضا پور نامدار',phone:'09123534314',distance:3.5,latitude:35.699720 + getRandom(),longitude:51.338080 + getRandom()},
                {name:'محمد رضا پور نامدار',phone:'09123534314',distance:3.5,latitude:35.699720 + getRandom(),longitude:51.338080 + getRandom()},
                {name:'محمد رضا پور نامدار',phone:'09123534314',distance:3.5,latitude:35.699720 + getRandom(),longitude:51.338080 + getRandom()},
                {name:'محمد رضا پور نامدار',phone:'09123534314',distance:3.5,latitude:35.699720 + getRandom(),longitude:51.338080 + getRandom()},
                {name:'محمد رضا پور نامدار',phone:'09123534314',distance:3.5,latitude:35.699720 + getRandom(),longitude:51.338080 + getRandom()},
                {name:'محمد رضا پور نامدار',phone:'09123534314',distance:3.5,latitude:35.699720 + getRandom(),longitude:51.338080 + getRandom()},
                {name:'محمد رضا پور نامدار',phone:'09123534314',distance:3.5,latitude:35.699720 + getRandom(),longitude:51.338080 + getRandom()},
                {name:'محمد رضا پور نامدار',phone:'09123534314',distance:3.5,latitude:35.699720 + getRandom(),longitude:51.338080 + getRandom()},
                {name:'محمد رضا پور نامدار',phone:'09123534314',distance:3.5,latitude:35.699720 + getRandom(),longitude:51.338080 + getRandom()},
                {name:'محمد رضا پور نامدار',phone:'09123534314',distance:3.5,latitude:35.699720 + getRandom(),longitude:51.338080 + getRandom()},
                {name:'محمد رضا پور نامدار',phone:'09123534314',distance:3.5,latitude:35.699720 + getRandom(),longitude:51.338080 + getRandom()},
                
            ]
        },
        get_salers(){
            return [
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
                {name:"دانیال عنایتی",code:'c23222',province:'تهران',city:'تهران',phone:'09123534314',status:'فعال',visitorName:'محمد فیض',visitorCode:'c123123',shopName:'ممد استور',shopPhone:'02188050006',latitude:35.699720,longitude:51.338080,address:'تهران خیابان دوم همون اطراف'},
            ]
        },
        getBazargahDetailsBySaler(saler){
            return {
                zamaneAkhz:20,radius:12,
                activity:{
                    waitOfSend:1,
                    waitOfDelivery:1,
                    delivered:4,
                    canseled:5
                }
            }
        }
    }
}


function getRandom(){
    let sign = Math.round(Math.random())?1:-1
    return (Math.round(Math.random() * 10) / 1000 * sign)
}