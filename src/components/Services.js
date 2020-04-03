import React, { PureComponent } from 'react'
import {FaCocktail, FaHiking,  FaBeer, FaShuttleVan} from 'react-icons/fa';
import {MdIconPack} from 'react-icons/lib/md/airport-shuttle'

import Title from './Title';
class Services extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:"Delicious cocktails made from first class bartenders. Service ranked top in the state"

            },
            {
                icon:<FaHiking/>,
                title:"#1 hiking trails",
                info:"Delicious cocktails made from first class bartenders. Service ranked top in the state"

            },
      
            {
                icon:<FaBeer/>,
                title:"Strongest Beer!",
                info:"Delicious cocktails made from first class bartenders. Service ranked top in the state"

            },

            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info:"Delicious cocktails made from first class bartenders. Service ranked top in the state"

            }
        ]
            
        }
    }

    render() {
        return (  
        <section className="services">
        <Title title="services"/>
        <div className= "services-center">
            {this.state.services.map((item,index)=> {
                return( <article key={index} className="services">
                   <span> {item.icon}</span> 
                   <h6>{item.title}</h6>
                   <p>{item.info}</p>
                </article> 
                );
            })}
        </div>  
        </section>
            
        );
    }
}

export default Services
