import React, { Component } from 'react';
import contactList from '../contacts.json';
import DetalleLista from './DetalleLista';

class DynamicContactList extends Component {
  state = {
      contactos: [
        {
          name: contactList[0].name,
          picture: contactList[0].pictureUrl,
          popularity: contactList[0].popularity
        },
        {
          name: contactList[1].name,
          picture: contactList[1].pictureUrl,
          popularity: contactList[1].popularity
        },
        {
          name: contactList[2].name,
          picture: contactList[2].pictureUrl,
          popularity: contactList[2].popularity
        },
        {
          name: contactList[3].name,
          picture: contactList[3].pictureUrl,
          popularity: contactList[3].popularity
        },
        {
          name: contactList[4].name,
          picture: contactList[4].pictureUrl,
          popularity: contactList[4].popularity
        }
      ]
    }

    addRandomContact = () => {
      let nuevosContactos = []
      // nuevosContactos.push(this.state.contactos)
      this.state.contactos.map((contacto, index) => {
        nuevosContactos.push(contacto)
      })

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
      console.log(nuevosContactos)
    }

    render(){
      // console.log('Estado', this.state.contactos)
      return (
        <div className="format">

        <button onClick={this.addRandomContact}>Add Random Contact</button>
          
          <div className="layout">
            <div>Picture</div>
            <div>Name</div>
            <div>Popularity</div>
          </div>

          <div className="">
            {
              this.state.contactos.map((contacto, index) => {
                return <DetalleLista key={index} {...contacto}></DetalleLista>
              })
            }
          </div>
        
        </div>
      )
    }
  }

  export default DynamicContactList;

  // class DynamicContactList extends Component {
  //   constructor () {
  //     super()
  //     this.state = {
  //       contactos: [

  //       ]
  //     }
  //   }
  // }

  // 0 + Math.floor((Math.random() * (0 + contactList.length)))