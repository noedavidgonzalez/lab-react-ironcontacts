import React, { Component } from 'react';
import contactList from '../contacts.json';
import DetalleLista from './DetalleLista';
import _ from 'lodash';
class DynamicContactList extends Component {
  state = {
      contactos: []
    }
    componentWillMount=()=>{ 
      let primerosCinco=[];
      for (let i = 0; i < 5; i++) {
        let elContacto = {
          name: contactList[i].name,
          picture: contactList[i].pictureUrl,
          popularity: contactList[i].popularity
        }
        primerosCinco.push(elContacto);
      }
      this.setState({
        contactos: primerosCinco
      })
    }

    addRandomContact = () => {
      let nuevosContactos = this.state.contactos; 
      for (let i=0; i<5; i++) {
        const randomNumber = 0 + Math.floor((Math.random() * (0 + contactList.length)))
        let elContacto = {
          name: contactList[randomNumber].name,
          picture: contactList[randomNumber].pictureUrl,
          popularity: contactList[randomNumber].popularity
        }
        nuevosContactos.push(elContacto);
      }
      this.setState({
        contactos: nuevosContactos
      }) 
    }
    sortByName=()=>{ 
      let contactos = _.orderBy(this.state.contactos, [c => c.name], ['asc']).slice(0, this.state.contactos.length)
      this.setState({ contactos }) 
    }
    sortByPopularity = () => {

      let contactos = _.orderBy(this.state.contactos, [c => c.popularity], ['asc']).slice(0, this.state.contactos.length)
      this.setState({ contactos })
    }
    deleteContact=(contactIndex)=>{
      let contactos = this.state.contactos;
      contactos.splice(contactIndex, 1); 
      this.setState({ contactos})
    }

    render(){ 
      return (
        <div className="format">
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by Name</button>
          <button onClick={this.sortByPopularity}>Sort by popularity</button>
          <div className="layout">
            <div><h2>Picture</h2></div>
            <div><h2>Name</h2></div>
            <div><h2>Popularity</h2></div>
            <div> </div>
          </div>

          <div className="">
            {
              this.state.contactos.map((contacto, index) => {
                return <DetalleLista key={index} {...contacto} clickToDelete={() => this.deleteContact(index)}></DetalleLista>
              })
            }
          </div>
        
        </div>
      )
    }
  }

  export default DynamicContactList;
